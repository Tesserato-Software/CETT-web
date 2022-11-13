import { NavBar } from './Components/Navbar/NavBar'
import { MainRouts } from './routes'
import GlobalTheme from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react';
import { api } from './services/api'

function App() {
    const [shouldResetPassword, setShouldResetPassword] = useState<boolean>(false)

    useEffect(() => {
        api.get('/auth/get-user-data').then((response) => {
            setShouldResetPassword(response.data.first_access);
        })
    }, [window.location.pathname])

    return (
        <>
            <ToastContainer />
            <GlobalTheme />        
            <MainRouts shouldResetPassword={shouldResetPassword} />
        </>
            
    )
}

export default App
