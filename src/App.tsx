import { NavBar } from './Components/Navbar/NavBar'
import { MainRouts } from './routes'
import GlobalTheme from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <ToastContainer />
            <GlobalTheme />
            <MainRouts />
        </>
    )
}

export default App
