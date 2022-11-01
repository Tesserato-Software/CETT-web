import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Egress } from '../Page/egress'
import { EgressList } from '../Page/egress/list'
import { Hierarchy } from '../Page/Hierarchy'
import { HierarchyList } from '../Page/Hierarchy/List'
import { UsersList, UsersRegister } from '../Page/Users'

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
                <Route path="egress" element={<EgressList />}>
                    <Route path="list" element={<EgressList />} />
                </Route>
                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                </Route>
                <Route path="users" element={<UsersList />}>
                    <Route path="list" element={<UsersList />} />
                </Route>
                <Route path="users/register" element={<UsersRegister />} />
            </Routes>
        </>
    )
}
