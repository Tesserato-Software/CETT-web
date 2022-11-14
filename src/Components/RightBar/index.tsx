import React from "react";
import { RightContainer } from "./style";
import LogoBranco from "../../assets/logo_branco_transparent.png";
import { Link, useNavigate } from "react-router-dom";
import * as IoIcons from "react-icons/io";

export const RightBar = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const items = [
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
		],
		navigate = useNavigate();

	return (
		<RightContainer isOpen={isOpen}>
			<div className="right-bar">
				<div className="right-bar-header">
					<h1>Menu</h1>
					<img
						title="Fechar menu"
						onClick={onClose}
						src={LogoBranco}
					/>
				</div>
				<div className="right-bar-body">
					{items.map((item, index) => (
						<div className="right-bar-item" key={index}>
							<h2>{item.name}</h2>
							<div className="right-bar-sub-items">
								{item.subItems.map((subItem, index) => (
									<Link to={subItem.link} key={index} replace>
										{subItem.name}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="right-bar-footer">
					<button
						onClick={() => {
							navigate("/login");
							localStorage.removeItem("@Auth:token");
						}}
					>
						<IoIcons.IoIosLogOut /> Logout
					</button>
				</div>
			</div>
		</RightContainer>
	);
};
