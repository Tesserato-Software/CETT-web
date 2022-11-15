import { MainRouts } from './routes'
import { useNavigate } from 'react-router-dom'
import GlobalTheme from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react';
import { api } from './services/api'

function App() {
    const [shouldResetPassword, setShouldResetPassword] = useState<boolean>(false)
    const [isDontLogged, setIsDontLogged] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [user_id, setUser_id] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        api.get('/auth/get-user-data')
            .catch((error) => {
                if(error.response.data.message === 'Unauthorized' && window.location.pathname !== '/login') {
                    setIsDontLogged(true)
                    navigate('/dont-logged')
                }

                if (error.response.data.message === 'user_disabled') {
                    setIsDisabled(true);
                    navigate('/user-disabled');
                }
                if (error.response.data.message === 'should_reset_password') {
                    const user_id = error.response.data.id !== undefined ? error.response.data.id : null 
                    setShouldResetPassword(true);
                    setUser_id(user_id);
                    navigate('/should-reset-password');
                }
            })
    }, [window.location.pathname])

    return (
        <>
            <ToastContainer />
            <GlobalTheme />        
            <MainRouts shouldResetPassword={shouldResetPassword} user_id={user_id} isDisabled={isDisabled} isDontLogged={isDontLogged} />
        </>
            
    )
}

export default App
