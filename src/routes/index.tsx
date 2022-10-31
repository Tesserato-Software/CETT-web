import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Egress } from '../page/egress'
import { EgressList } from '../page/egress/list'

export const MainRouts = () => {
    return (
        <>
            <NavBar
                title={'Navbar'}
                have_menu={!window.location.href.includes('login')}
            />
            <Routes>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            <h1>index</h1>
                        </>
                    }
                />
                <Route
                    path="about"
                    element={
                        <>
                            <h1>about</h1>
                        </>
                    }
                />
                <Route
                    path="egress"
                    element={<EgressList/>}
                >
                    <Route
                        path="list"
                        element={<EgressList/>}
                    />
                </Route>
            </Routes>
        </>
    )
}
