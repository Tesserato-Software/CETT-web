import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Components/Navbar/NavBar";

export const MainRouts = () => {
    return (
        <>
            <NavBar
                title={'Navbar'}
                have_menu={
                    !window.location.href.includes('login')
                }
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
                    path="/about"
                    element={
                        <>
                            <h1>about</h1>
                        </>
                    }
                />
            </Routes>
        </>
    )
}