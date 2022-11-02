import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Egress } from '../page/egress'
import { CreateEgress } from '../page/egress/create'
import { DeleteEgress } from '../page/egress/delete'
import { EgressList } from '../page/egress/list'
import { UpdateEgress } from '../page/egress/update';
import { Hierarchy } from "../page/Hierarchy";
import { HierarchyList } from "../page/Hierarchy/List";
import { Login } from "../page/Login";
import { AtachEgress } from '../page/AtachEgress/index';
import { DetachEgress } from '../page/DetachEgress/index';
import { DetachArchive } from '../page/DetachArchive/index';
import { Atacharchive } from '../page/AtachArchive';
import { UsersList } from '../page/Users/List'
import { UsersRegister } from '../page/Users/Register'
import { Users } from '../page/Users'
import { InputArchive } from '../page/InputArchive/attach/index';
import { ExportExcel } from '../page/InputArchive/export'
import { Archives } from '../page/archive'
import { CreateArchive } from '../page/archive/create'
import { CreateHierarchy } from '../page/Hierarchy/create';
import { Excel } from '../page/Excel'


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

                <Route
                    path="egress"
                    element={<Egress />}
                >

                    <Route
                        path="list"
                        element={<EgressList />}
                    />
                    <Route
                        path="create"
                        element={<CreateEgress />}
                    />
                    <Route
                        path="edit"
                        element={<UpdateEgress />}
                    />
                    <Route
                        path="delete"
                        element={<DeleteEgress />}
                    />

                    {/* VINC BY ARCHIVE */}
                    <Route
                        path="detach-user-archive"
                        element={<DetachArchive />}
                    />
                    <Route
                        path="attach-user-archive"
                        element={<Atacharchive />}
                    />
                </Route>

                <Route path="archive" element={<Hierarchy />}>

                    {/* VINC BY EGRESS */}
                    <Route
                        path="attach-egress"
                        element={<AtachEgress />}
                    />
                    <Route
                        path="detach-egress"
                        element={<DetachEgress />}
                    />

                </Route>

                <Route path="excel" element={<Excel />}>
                    <Route
                        path="import"
                        element={<InputArchive />}
                    />

                    <Route
                        path="export"
                        element={<ExportExcel />}
                    />
                </Route>

                <Route path="archive" element={<Archives />}>
                        <Route path="list" element={<EgressList />} />
                        <Route path="create" element={<CreateArchive />} />
                        <Route path="edit" element={<UpdateEgress />} />
                        <Route path="delete" element={<DeleteEgress />} />
                </Route>
                
                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                    <Route path="create" element={<CreateHierarchy />} />
                </Route>

                <Route 
                    path="users" 
                    element={<Users />}
                >
                    <Route 
                        path="register"
                        element={<UsersRegister />}
                    />
                    <Route 
                        path="list" 
                        element={<UsersList />}
                    />
                </Route>
            </Routes>
        </>
    )
}
