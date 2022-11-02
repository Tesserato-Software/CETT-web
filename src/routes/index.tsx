import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'

import { Egress } from '../page/egress'
import { CreateEgress } from '../page/egress/create'
import { DeleteEgress } from '../page/egress/delete'
import { EgressList } from '../page/egress/list'
import { UpdateEgress } from '../page/egress/update'
import { Hierarchy } from '../page/Hierarchy'
import { HierarchyList } from '../page/Hierarchy/List'
import { Login } from '../page/Login'
import { AttachEgress } from '../page/archive/AttachEgress/index'
import { DetachEgress } from '../page/archive/DetachEgress/index'
import { DetachArchive } from '../page/egress/DetachArchive/index'
import { AttachArchive } from '../page/egress/AttachArchive'
import { UsersList } from '../page/Users/List'
import { UsersRegister } from '../page/Users/Register'
import { Users } from '../page/Users'
import { InputArchive } from '../page/Excel/attach/index'
import { ExportExcel } from '../page/Excel/export'
import { Archives } from '../page/archive'
import { CreateArchive } from '../page/archive/create'
import { CreateHierarchy } from '../page/Hierarchy/create'
import { Excel } from '../page/Excel'
import { DeleteHierarchy } from '../page/Hierarchy/delete'
import { UpdateHierarchy } from '../page/Hierarchy/update'

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

                <Route path="login" element={<Login />} />

                <Route path="egress" element={<Egress />}>
                    <Route path="list" element={<EgressList />} />
                    <Route path="create" element={<CreateEgress />} />
                    <Route path="edit" element={<UpdateEgress />} />
                    <Route path="delete" element={<DeleteEgress />} />

                    {/* VINC BY ARCHIVE */}
                    <Route
                        path="detach-user-archive"
                        element={<DetachArchive />}
                    />
                    <Route
                        path="attach-user-archive"
                        element={<AttachArchive />}
                    />
                </Route>

                <Route path="excel" element={<Excel />}>
                    <Route path="import" element={<InputArchive />} />

                    <Route path="export" element={<ExportExcel />} />
                </Route>

                <Route path="archive" element={<Archives />}>
                    <Route path="create" element={<CreateArchive />} />

                    {/* VINC BY EGRESS */}
                    <Route path="attach-egress" element={<AttachEgress />} />
                    <Route path="detach-egress" element={<DetachEgress />} />
                </Route>

                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                    <Route path="create" element={<CreateHierarchy />} />
                    <Route path="update" element={<UpdateHierarchy />} />
                    <Route path="delete" element={<DeleteHierarchy />} />
                </Route>

                <Route path="users" element={<Users />}>
                    <Route path="register" element={<UsersRegister />} />
                    <Route path="list" element={<UsersList />} />
                </Route>
            </Routes>
        </>
    )
}
