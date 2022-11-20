import { RightContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import xIcon from "../../assets/marca-x.png";
import { userDataContext } from "../../App";
import { useContext } from "react";

export const RightBar = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const { user } = useContext(userDataContext),
		items = [
			user?.is_super_user ? {
				name: "Escolas",
				subItems: [
					{
						name: "Cadastrar",
						link: "/school/create",
					},
					{
						name: "Listar",
						link: "/school/list",
					},
				]
			} : null,
			{
				name: "Egressos",
				subItems: [
					{
						name: "Cadastrar",
						link: "/egress/create",
					},
					{
						name: "Listar",
						link: "/egress/list",
					},
					user?.hierarchy.can_delete ? {
						name: "Listar Inativos",
						link: "/egress/list-disableds",
					} : null,
				],
			},
			{
				name: "Caixas de Arquivos",
				subItems: [
					{
						name: "Cadastrar",
						link: "/archive/create",
					},
					{
						name: "Listar",
						link: "/archive/list",
					},
				],
			},
			{
				name: "Usuários",
				subItems: [
					{
						name: "Cadastrar",
						link: "/users/create",
					},
					{
						name: "Listar",
						link: "/users/list",
					},
					user?.hierarchy.can_enable_users ? {
						name: "Listar Inativos",
						link: "/users/list-disableds",
					} : null,
				],
			},
			{
				name: "Hierarquias",
				subItems: [
					{
						name: "Cadastrar",
						link: "/hierarchy/create",
					},
					{
						name: "Listar",
						link: "/hierarchy/list",
					},
				],
			},
			{
				name: "Relatórios",
				subItems: [
					{
						name: "Exportar para excel",
						link: "/excel/export",
					},
				],
			},
			{
				name: "Excel",
				subItems: [
					{
						name: "Importar de excel",
						link: "/excel/import",
					},
				],
			}
		],
		navigate = useNavigate(),
		token = localStorage.getItem("@Auth:token");

	const loginLogout = () => {
		if (token) {
			navigate("/login")
			localStorage.removeItem("@Auth:token")
		} else {
			navigate("/login");
		}
	}

	return (
		<RightContainer isOpen={isOpen}>
			<div className="right-bar">
				<div className="right-bar-header">
					<h1>Menu</h1>
					<img
						title="Fechar menu"
						onClick={onClose}
						src={xIcon}
					/>
				</div>
				<div className="right-bar-body">
					{token && items.map((item, index) => { return item ?(
						<div className="right-bar-item" key={index}>
							<h2>{item.name}</h2>
							<div className="right-bar-sub-items">
								{item.subItems?.map((subItem, index) => (
									<Link to={subItem?.link || ''} key={index} replace>
										{subItem?.name}
									</Link>
								))}
							</div>
						</div>
					) : null})}
				</div>
				<div className="right-bar-footer">
					<button
						onClick={() => loginLogout()}
					>
						{token ? <><IoIcons.IoIosLogOut /> Logout</> : <><IoIcons.IoIosLogIn /> Login</>}
					</button>
				</div>
			</div>
		</RightContainer>
	);
};
