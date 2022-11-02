import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Egress } from '../page/egress'
import { CreateEgress } from '../page/egress/create'
import { DeleteEgress } from '../page/egress/delete'
import { EgressList } from '../page/egress/list'
import { UpdateEgress } from '../page/egress/update'
import { Hierarchy } from '../page/Hierarchy'
import { HierarchyList } from '../page/Hierarchy/List'
import { Users } from '../page/Users'
import { UsersList } from '../page/Users/List'
import { UsersRegister } from '../page/Users/Register'
import { UsersUpdate } from '../page/Users/Update'
import { UsersDelete } from '../page/Users/Delete'

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
                <Route path="egress" element={<Egress />}>
                    <Route path="list" element={<EgressList />} />
                    <Route path="create" element={<CreateEgress />} />
                    <Route path="edit" element={<UpdateEgress />} />
                    <Route path="delete" element={<DeleteEgress />} />
                </Route>
                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                </Route>
                <Route path="users" element={<Users />}>
                    <Route path="list" element={<UsersList />} />
                    <Route path="register" element={<UsersRegister />} />
                    <Route path="update" element={<UsersUpdate />} />
                    <Route path="delete" element={<UsersDelete />} />
                </Route>
            </Routes>
        </>
    )
}
