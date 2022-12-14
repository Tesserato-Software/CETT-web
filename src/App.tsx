import { MainRouts } from './routes'
import { useNavigate } from 'react-router-dom'
import GlobalTheme from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createContext, useEffect, useState } from 'react';
import { api } from './services/api'
import { hierarchy, user } from './models/User'

export const userDataContext = createContext<{user: user | undefined}>({user: undefined})

function App() {
    const [shouldResetPassword, setShouldResetPassword] = useState<boolean>(false)
    const [isDontLogged, setIsDontLogged] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [user_id, setUser_id] = useState<number>(0)
    const [user_hierarchy, setUser_hierarchy] = useState<hierarchy>()
    const [userData, setUserData] = useState<user>()
    const navigate = useNavigate()

    useEffect(() => {
        api.get('/auth/get-user-data')
        .then((response) => {
            setUser_id(response.data.id)
            setUser_hierarchy(response.data.hierarchy)
            setUserData(response.data)
        })
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
                setUser_id(error.response?.data?.id)
                navigate('/should-reset-password');
            }
        })
    }, [window.location.pathname])

    return (
        <userDataContext.Provider value={{user: userData}}>
            <ToastContainer />
            <GlobalTheme />
            <MainRouts 
                shouldResetPassword={shouldResetPassword} 
                user_id={user_id} 
                isDisabled={isDisabled} 
                isDontLogged={isDontLogged}
                user_hierarchy={user_hierarchy} 
                is_super_user={userData?.is_super_user}
            />
        </userDataContext.Provider>    
    )
}

export default App
