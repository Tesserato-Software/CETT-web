import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Components/Navbar/NavBar";
import { Hierarchy } from "../Page/Hierarchy";
import { HierarchyList } from "../Page/Hierarchy/List";
import { School } from "../Page/School";
import { SchoolList } from "../Page/School/List";
import { SchoolCreate } from "../Page/School/Create";
import { SchoolUpdate } from "../Page/School/Update";
import { SchoolDelete } from "../Page/School/Delete";

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
                    path="hierarchy"
                    element={<Hierarchy/>}
                >
                    <Route path="list" element={<HierarchyList/>}/>
                </Route>
                <Route
                    path="school"
                    element={<School/>}
                >
                    <Route path="list" element={<SchoolList/>}/>
                    <Route path="create" element={<SchoolCreate/>}/>
                    <Route path="update" element={<SchoolUpdate/>}/>
                    <Route path="delete" element={<SchoolDelete/>}/>
                </Route>
            </Routes>
        </>
    )
}
