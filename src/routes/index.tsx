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
import { CreateHierarchy } from '../page/Hierarchy/create';


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
                    path="about"
                    element={
                        <>
                            <h1>about</h1>
                        </>
                    }
                />
                <Route
                    path="egress"
                    element={<Egress />}
                >
                    <Route
                        path="archive"
                        element={<Atacharchive />}
                    />
                    <Route
                        path="export"
                        element={<ExportExcel />}
                    />
                    <Route
                        path="atachegress"
                        element={<AtachEgress />}
                    />
                    <Route
                        path="detachegress"
                        element={<DetachEgress />}
                    />
                    <Route
                        path="archive"
                        element={<Atacharchive />}
                    />
                    <Route
                        path="InputArchive"
                        element={<InputArchive />}
                    />

                    <Route
                        path="detachearchive"
                        element={<DetachArchive />}
                    />

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

                    <Route path="egress" element={<Egress />}>
                        <Route path="list" element={<EgressList />} />
                        <Route path="create" element={<CreateEgress />} />
                        <Route path="edit" element={<UpdateEgress />} />
                        <Route path="delete" element={<DeleteEgress />} />
                    </Route>
                </Route>
                
                
          


                <Route path="hierarchy" element={<Hierarchy />}>
                    <Route path="list" element={<HierarchyList />} />
                    <Route path="create" element={<CreateHierarchy />} />

                </Route>
                
                
                
                
                <Route 
                    path="users" 
                    element={<Users />}>
                <Route 
                    path="list" 
                    element={<UsersList />} />
                </Route>
                <Route 
                    path="users/register" 
                    element={<UsersRegister />} /> 



                </Routes>
        </>
    )
}
