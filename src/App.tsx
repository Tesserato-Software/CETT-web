import { MainRouts } from './routes'
import { useNavigate } from 'react-router-dom'
import GlobalTheme from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createContext, useEffect, useState } from 'react';
import { api } from './services/api'

export const userDataContext = createContext<{user: user | undefined}>({user: undefined})

function App() {
    const [shouldResetPassword, setShouldResetPassword] = useState<boolean>(false)
    const [isDontLogged, setIsDontLogged] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [userData, setUserData] = useState<user>()
    const navigate = useNavigate()

    useEffect(() => {
        api.get('/auth/get-user-data')
        .then((response) => setUserData(response.data))
        .catch((error) => {
            if(error.response?.data?.message === 'Unauthorized' && !["/login", "/"].includes(window.location.pathname)) {
                setIsDontLogged(true)
                navigate('/dont-logged')
            }

            if (error.response?.data?.message === 'user_disabled' && !["/login"].includes(window.location.pathname)) {
                setIsDisabled(true);
                navigate('/user-disabled');
            }

            if (error.response?.data?.message === 'should_reset_password') {
                setShouldResetPassword(true);
                setUserData(error.response.data)
                navigate('/should-reset-password');
            }
        })
    }, [window.location.pathname])

    return (
        <userDataContext.Provider value={{user: userData}}>
            <ToastContainer />
            <GlobalTheme />        
            <MainRouts shouldResetPassword={shouldResetPassword} user_id={userData?.id} isDisabled={isDisabled} isDontLogged={isDontLogged} />
        </userDataContext.Provider>
            
    )
}

export default App
