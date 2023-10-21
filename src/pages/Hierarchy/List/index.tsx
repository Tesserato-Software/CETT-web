import { useEffect, useState } from "react";
import { DateTime } from "ts-luxon";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type users = {
	id: number;
	full_name: string;
	password: string;
	email: string;
	hierarchy_id: number;
	school_id: number;
	first_access: DateTime;
};

type listProps = {
	id: number;
	name: string;
	can_delete: boolean;
	can_update: boolean;
	school_id: number;
	users: users[] | [];
};

export const HierarchyList = () => {
	const [list, setList] = useState<listProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		api.get("/hierarchy/list")
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.error(error);
				toast.success("Algo não deu certo.", 
				 	{ theme: "colored" }
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						gap: '15px',
						marginTop: '30px'
					}}
				>
					{list?.map((item) => {
						return (
							<div
								style={{
									backgroundColor: "#D9D9D9",
									border: "1px solid white",
									width: "60%",
									display: "flex",
									justifyContent: "space-between",
									padding: "10px",
									borderRadius: "8px",
								}}
								key={item.id}
							>
								<span
									style={{
										color: "black",
										width: "25rem",
									}}
								>
									{item.name}
								</span>

								<span
									style={{
										color: "green",
									}}
								>
									<span>Usuários: </span>
									{item.users?.length}
								</span>
								<div>
									<Link
										style={{
											marginRight: "30px",
											padding: "5px 10px",
											backgroundColor: "rgb(169, 169, 169)",
											color: "white",
											border: "none",
											textDecoration: "none",
											borderRadius: "8px"
										}}
										className="LinkUpdate"
										to={`/hierarchy/update/${item.id}`}
									>
										Editar
									</Link>

									<Link
										style={{
											marginRight: "30px",
											padding: "5px 10px",
											backgroundColor: "rgb(225, 55, 99)",
											color: "white",
											border: "none",
											textDecoration: "none",
											borderRadius: "8px"
										}}
										className="LinkUpdate"
										to={`/hierarchy/delete/${item.id}`}
									>
										Remover
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
