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
import { DetachArchive } from '../page/egress/dettach/index'
import { AttachArchive } from '../page/egress/attach'
import { Users } from '../page/Users'
import { UsersList } from '../page/Users/List'
import { UsersRegister } from '../page/Users/Register'
import { UsersUpdate } from '../page/Users/Update'
import { UsersDelete } from '../page/Users/Delete'
import { InputExcel } from '../page/Excel/attach/index'
import { ExportExcel } from '../page/Excel/export'
import { Archives } from '../page/archive'
import { CreateArchive } from '../page/archive/create'
import { CreateHierarchy } from '../page/Hierarchy/create'
import { Excel } from '../page/Excel'
import { DeleteHierarchy } from '../page/Hierarchy/delete'
import { UpdateHierarchy } from '../page/Hierarchy/update'
import { AttachUser } from '../page/Hierarchy/attachuser'
import { DettachUser } from '../page/Hierarchy/dettachuser'
import { ListArchive } from '../page/archive/list'
import { DeleteArchive } from '../page/archive/delete'
import { FirstAccess } from '../page/Users/FirstAccess'
import { ForgetPassword } from '../page/Users/ForgetPassword'
import { School } from "../page/School";
import { SchoolList } from "../page/School/List";
import { SchoolCreate } from "../page/School/Create";
import { SchoolUpdate } from "../page/School/Update";
import { SchoolDelete } from "../page/School/Delete";
import { ShouldResetPassword } from '../Components/ShouldResetPassword/index'


export const MainRouts = ({ shouldResetPassword }: any) => {
    return (
        <>
            <NavBar
                title={'Navbar'}
                have_menu={!window.location.href.includes('login')}
            />
            {shouldResetPassword ? 
            <Routes>
                <Route path="should-reset-password" element={<ShouldResetPassword />} /> 
            </Routes>
                : 
            <Routes>
                <Route
                    index
                    path="/"
                    element={<EgressList />}
                />
                
                <Route path="login" element={<Login />} />
                <Route path="first-access" element={<FirstAccess />} />
                <Route path="forget-password" element={<ForgetPassword />} />

                <Route path="egress" element={<Egress />}>
                    <Route path="list" element={<EgressList />} />
                    <Route path="create" element={<CreateEgress />} />
                    <Route path="edit" element={<UpdateEgress />} />
                    <Route path="delete/:id" element={<DeleteEgress />} />

                    {/* VINC BY ARCHIVE */}
                    <Route
                        path="dettach"
                        element={<DetachArchive />}
                    />
                    <Route
                        path="attach"
                        element={<AttachArchive />}
                    />
                </Route>

                <Route path="excel" element={<Excel />}>
                    <Route path="import" element={<InputExcel />} />

                    <Route path="export" element={<ExportExcel />} />
                </Route>

                <Route path="archive" element={<Archives />}>
                    <Route path="create" element={<CreateArchive />} />
                    <Route path="list" element={<ListArchive />} />
                    <Route path="delete" element={<DeleteArchive />} />

                    {/* VINC BY EGRESS */}
                    <Route path="attach-egress/:id" element={<AttachEgress />} />
                    <Route path="detach-egress" element={<DetachEgress />} />
                </Route>

                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                    <Route path="create" element={<CreateHierarchy />} />
                    <Route path="update/:id" element={<UpdateHierarchy />} />
                    <Route path="delete/:id" element={<DeleteHierarchy />} />
                    <Route path="add-user" element={<AttachUser />} />
                    <Route path="remove-user" element={<DettachUser />} />
                </Route>

                <Route path="users" element={<Users />}>
                    <Route path="create" element={<UsersRegister />} />
                    <Route path="list" element={<UsersList />} />
                    <Route path="update/:id" element={<UsersUpdate />} />
                    <Route path="delete/:id" element={<UsersDelete />} />
                </Route>
                <Route
                    path="school"
                    element={<School />}
                >
                    <Route path="list" element={<SchoolList />} />
                    <Route path="create" element={<SchoolCreate />} />
                    <Route path="update" element={<SchoolUpdate />} />
                    <Route path="delete" element={<SchoolDelete />} />
                </Route>
                
            </Routes>}
        </>
    )
}
