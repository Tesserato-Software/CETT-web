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
import { Unauthorized } from "../Components/Unauthorized";
import { hierarchy } from "../models/User";
import { userDataContext } from "../App";
import { useContext } from "react";
import { DisabledEgresses } from "../pages/egress/disabledEgresses";

export const MainRouts = ({
	shouldResetPassword,
	user_id,
	isDisabled,
	isDontLogged,
	user_hierarchy,
	is_super_user,
}: {
	shouldResetPassword: boolean;
	user_id: number;
	isDisabled: boolean;
	isDontLogged: boolean;
	user_hierarchy: hierarchy | undefined;
	is_super_user: boolean | undefined;
}) => {
	const arr = window.location.pathname.split("/"),
		{ user } = useContext(userDataContext),
		token = localStorage.getItem("@Auth:token");

	const hasPermission = (
		permission: "can_update" | "can_delete" | "can_enable_users"
	) => {
		if (user_hierarchy) {
			return user_hierarchy[permission];
		}
		return false;
	};

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
						element={<ShouldResetPassword user_id={user?.id} />}
					/>
				</Routes>
			);
		}
		if (isDisabled) {
			return (
				<Routes>
					<Route path="user-disabled" element={<UserDisabled />} />
				</Routes>
			);
		}
	};

	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<NavBar
				title_json={window.location.pathname
					.split("/")
					.slice(1)
					.join("-")}
				have_menu={!window.location.pathname.includes("login")}
			/>

			{ValidateUser()}

			<div style={{ paddingBottom: "calc(120px * 2)" }}>
				<Routes>
					{!!token ? (
						<>
							<Route index path="/" element={<EgressList />} />

							<Route path="login" element={<Login />} />
							<Route
								path="first-access"
								element={<FirstAccess />}
							/>
							<Route
								path="forget-password"
								element={<ForgetPassword />}
							/>

							<Route path="egress" element={<Egress />}>
								<Route path="list" element={<EgressList />} />
								<Route
									path="create"
									element={<CreateEgress />}
								/>
								<Route
									path="edit/:id"
									element={
										hasPermission("can_update") ? (
											<UpdateEgress />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="delete/:id"
									element={<DeleteEgress />}
								/>
								<Route 
									path="list-disableds"
									element={hasPermission("can_delete") ? 
									<DisabledEgresses /> 
									: <Unauthorized />}
								/>

								{/* VINC BY ARCHIVE */}
								<Route
									path="dettach/:id"
									element={
										hasPermission("can_update") ? (
											<DetachArchive />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="attach/:id"
									element={
										hasPermission("can_update") ? (
											<AttachArchive />
										) : (
											<Unauthorized />
										)
									}
								/>
							</Route>

							<Route path="excel" element={<Excel />}>
								<Route path="import" element={<InputExcel />} />

								<Route
									path="export"
									element={<ExportExcel />}
								/>
							</Route>

							<Route path="archive" element={<Archives />}>
								<Route
									path="create"
									element={<CreateArchive />}
								/>
								<Route path="list" element={<ListArchive />} />
								<Route
									path="delete/:id"
									element={
										hasPermission("can_delete") ? (
											<DeleteArchive />
										) : (
											<Unauthorized />
										)
									}
								/>

								{/* VINC BY EGRESS */}
								<Route
									path="attach-egress/:id"
									element={
										hasPermission("can_update") ? (
											<AttachEgress />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="detach-egress/:id"
									element={
										hasPermission("can_update") ? (
											<DetachEgress />
										) : (
											<Unauthorized />
										)
									}
								/>
							</Route>

							<Route path="hierarchy" element={<Hierarchy />}>
								<Route
									path="list"
									element={<HierarchyList />}
								/>
								<Route
									path="create"
									element={<CreateHierarchy />}
								/>
								<Route
									path="update/:id"
									element={
										hasPermission("can_update") ? (
											<UpdateHierarchy />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="delete/:id"
									element={
										hasPermission("can_delete") ? (
											<DeleteHierarchy />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="add-user"
									element={
										hasPermission("can_update") ? (
											<AttachUser />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="remove-user"
									element={
										hasPermission("can_update") ? (
											<DettachUser />
										) : (
											<Unauthorized />
										)
									}
								/>
							</Route>

							<Route path="users" element={<Users />}>
								<Route
									path="create"
									element={<UsersRegister />}
								/>
								<Route
									path="list"
									element={<UsersList user_id={user_id} />}
								/>
								<Route
									path="list-disableds"
									element={<UsersListDisableds />}
								/>
								<Route
									path="update/:id"
									element={
										hasPermission("can_update") ? (
											<UsersUpdate />
										) : (
											<Unauthorized />
										)
									}
								/>
								<Route
									path="delete/:id"
									element={
										hasPermission("can_delete") ? (
											<UsersDelete />
										) : (
											<Unauthorized />
										)
									}
								/>
							</Route>
							<Route path="school" element={<School />}>
								<Route path="list" element={is_super_user ? <SchoolList /> : <Unauthorized />} />
								<Route
									path="create"
									element={is_super_user ? <SchoolCreate /> : <Unauthorized />}
								/>
								<Route
									path="update/:id"
									element={is_super_user ? <SchoolUpdate /> : <Unauthorized />}
								/>
								<Route
									path="delete/:id"
									element={is_super_user ? <SchoolDelete /> : <Unauthorized />}
								/>
							</Route>
						</>
					) : (
						["login", "/"].map((path, index) => (
							<Route
								path={path}
								index
								key={index}
								element={<Login />}
							/>
						))
					)}
				</Routes>
			</div>

			<Footer />
		</div>
	);
};
