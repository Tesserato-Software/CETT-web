import { Route, Routes, useParams } from "react-router-dom";
import { NavBar } from "../Components/Navbar/NavBar";

import { Egress } from "../pages/egress";
import { CreateEgress } from "../pages/egress/create";
import { DeleteEgress } from "../pages/egress/delete";
import { EgressList } from "../pages/egress/list";
import { UpdateEgress } from "../pages/egress/update";
import { Hierarchy } from "../pages/Hierarchy";
import { HierarchyList } from "../pages/Hierarchy/List";
import { Login } from "../pages/Login";
import { AttachEgress } from "../pages/archive/AttachEgress/index";
import { DetachEgress } from "../pages/archive/DetachEgress/index";
import { DetachArchive } from "../pages/egress/dettach/index";
import { AttachArchive } from "../pages/egress/attach";
import { Users } from "../pages/Users";
import { UsersList } from "../pages/Users/List";
import { UsersRegister } from "../pages/Users/Register";
import { UsersUpdate } from "../pages/Users/Update";
import { UsersDelete } from "../pages/Users/Delete";
import { UsersListDisableds } from "../pages/Users/DisabledUsers";
import { InputExcel } from "../pages/Excel/attach/index";
import { ExportExcel } from "../pages/Excel/export";
import { Archives } from "../pages/archive";
import { CreateArchive } from "../pages/archive/create";
import { CreateHierarchy } from "../pages/Hierarchy/create";
import { Excel } from "../pages/Excel";
import { DeleteHierarchy } from "../pages/Hierarchy/delete";
import { UpdateHierarchy } from "../pages/Hierarchy/update";
import { AttachUser } from "../pages/Hierarchy/attachuser";
import { DettachUser } from "../pages/Hierarchy/dettachuser";
import { ListArchive } from "../pages/archive/list";
import { DeleteArchive } from "../pages/archive/delete";
import { FirstAccess } from "../pages/Users/FirstAccess";
import { ForgetPassword } from "../pages/Users/ForgetPassword";
import { School } from "../pages/School";
import { SchoolList } from "../pages/School/List";
import { SchoolCreate } from "../pages/School/Create";
import { SchoolUpdate } from "../pages/School/Update";
import { SchoolDelete } from "../pages/School/Delete";
import { ShouldResetPassword } from "../Components/ShouldResetPassword";
import { UserDisabled } from "../Components/UserDisabled";
import { DontLogged } from "../Components/DontLogged";
import { Footer } from "../Components/Footer";

export const MainRouts = ({
	shouldResetPassword,
	user_id,
	isDisabled,
	isDontLogged,
}: any) => {
	const arr = window.location.pathname.split("/"),
        token = localStorage.getItem("@Auth:token")

	const ValidateUser = () => {
		if (isDontLogged) {
			return (
				<Routes>
					<Route path="dont-logged" element={<DontLogged />} />
				</Routes>
			);
		}
		if (shouldResetPassword) {
			return (
				<Routes>
					<Route
						path="should-reset-password"
						element={<ShouldResetPassword user_id={user_id} />}
					/>
				</Routes>
			);
		} else if (isDisabled) {
			return (
				<Routes>
					<Route path="user-disabled" element={<UserDisabled />} />
				</Routes>
			);
		}
	};

	return (
		<div style={{position: 'relative', minHeight: '100vh'}}>
			<NavBar
				title_json={window.location.pathname.split('/').slice(1).join('-')}
				have_menu={!window.location.pathname.includes("login")}
			/>

			{ValidateUser()}

            <div style={{paddingBottom: 'calc(120px * 2)'}}>

                <Routes>
                    {!!token ? <>
                        <Route index path="/" element={<EgressList />} />

                        <Route path="login" element={<Login />} />
                        <Route path="first-access" element={<FirstAccess />} />
                        <Route path="forget-password" element={<ForgetPassword />} />

                        <Route path="egress" element={<Egress />}>
                            <Route path="list" element={<EgressList />} />
                            <Route path="create" element={<CreateEgress />} />
                            <Route path="edit" element={<UpdateEgress />} />
                            <Route path="delete/:id" element={<DeleteEgress />} />

                            {/* VINC BY ARCHIVE */}
                            <Route path="dettach/:id" element={<DetachArchive />} />
                            <Route path="attach/:id" element={<AttachArchive />} />
                        </Route>

                        <Route path="excel" element={<Excel />}>
                            <Route path="import" element={<InputExcel />} />

                            <Route path="export" element={<ExportExcel />} />
                        </Route>

                        <Route path="archive" element={<Archives />}>
                            <Route path="create" element={<CreateArchive />} />
                            <Route path="list" element={<ListArchive />} />
                            <Route path="delete/:id" element={<DeleteArchive />} />

                            {/* VINC BY EGRESS */}
                            <Route
                                path="attach-egress/:id"
                                element={<AttachEgress />}
                            />
                            <Route path="detach-egress/:id" element={<DetachEgress />} />
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
                            <Route path="list" element={<UsersList user_id={user_id}/>} />
                            <Route
                                path="list-disableds"
                                element={<UsersListDisableds />}
                            />
                            <Route path="update/:id" element={<UsersUpdate />} />
                            <Route path="delete/:id" element={<UsersDelete />} />
                        </Route>
                        <Route path="school" element={<School />}>
                            <Route path="list" element={<SchoolList />} />
                            <Route path="create" element={<SchoolCreate />} />
                            <Route path="update" element={<SchoolUpdate />} />
                            <Route path="delete" element={<SchoolDelete />} />
                        </Route>
                    </> : ["login", "/"].map((path, index) => (
                            <Route
                                path={path}
                                index
                                key={index}
                                element={<Login />}
                            />
                        ))
                    }
                </Routes>
            </div>

            <Footer />
		</div>
	);
};
