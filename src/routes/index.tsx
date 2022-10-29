import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Hierarchy } from '../Page/Hierarchy'
import { HierarchyList } from '../Page/Hierarchy/List'

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
                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                </Route>
            </Routes>
        </>
    )
}
