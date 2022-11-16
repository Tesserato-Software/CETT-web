import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Hierarchy } from "..";
import { api } from "../../../services/api";
import { CreateHierarchyContainer } from "./style";

type hierarchy = {
	id: number;
	name: string;
	can_delete: boolean;
	can_update: boolean;
	can_enable_user: boolean;
};

type User = {
	id: number;
	hierarchy_id: number | null;
	hierarchy: any[];
};

export const UpdateHierarchy = () => {
	const navigate = useNavigate()
	const { id } = useParams();
	const [name, setName] = useState("");
	const [can_enable_users, setCanEnableUsers] = useState<boolean>();
	const [can_update, setCanUpdate] = useState<boolean>();
	const [can_delete, setCanDelete] = useState<boolean>();
	const [loading, setLoading] = useState<{
		update: boolean;
		show: boolean;
	}>({
		update: false,
		show: true,
	});

	useEffect(() => {
		setLoading({
			...loading,
			show: true,
		});

		api.get(`/hierarchy/show/${id}`)
			.then((response) => {
				setName(response.data[0].name);
				setCanUpdate(response.data[0].can_update);
				setCanDelete(response.data[0].can_delete);
				setCanEnableUsers(response.data[0].can_enable_users);
			})
			.catch((err) => {
				toast.error(
					"Ops, algo não deu certo ao atualizar a hierarquia.",
					{ theme: "colored" }
				);
				console.error(err);
			})
			.finally(() => {
				setLoading({
					...loading,
					show: false,
				});
			});
	}, []);

	const onSubmit = () => {
		setLoading({
			...loading,
			update: true,
		});

		api.put(`/hierarchy/update/${id}`, {
			name: name,
			can_update: can_update,
			can_delete: can_delete,
			can_enable_users: can_enable_users,
		})
			.then(() => {
				toast.success("Hierarquia atualizada com sucesso!", {
					theme: "colored",
				});
				navigate('/hierarchy/list')
			})
			.catch((err) => {
				toast.error(
					"Ops, algo não deu certo ao atualizar a hierarquia.",
					{ theme: "colored" }
				);
				console.error(err);
			})
			.finally(() => {
				setLoading({
					...loading,
					update: false,
				});
			});
	};

	return (
		<CreateHierarchyContainer>
			<h1>Alterar cargo</h1>
			{!loading.show ? <section>
				<div id="nomeInput">
					<input
						type="text"
						placeholder="Nome"
						id="UInput"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div id="checkBox">
					<div id="checks">
						<input
							type="checkbox"
							onClick={() => {
								setCanUpdate(!can_update);
							}}
							defaultChecked={can_update}
						/>
						<span>Pode editar</span>{" "}
					</div>

					<div id="checks">
						<input
							type="checkbox"
							onClick={() => {
								setCanDelete(!can_delete);
							}}
							defaultChecked={can_delete}
						/>
						<span>Pode deletar</span>{" "}
					</div>
					<div id="checks">
						<input
							type="checkbox"
							onClick={() => {
								setCanEnableUsers(!can_enable_users);
							}}
							defaultChecked={can_enable_users}
						/>
						<span>Pode habilitar usuário</span>{" "}
					</div>
				</div>
			</section>: <h1>Carregando...</h1>}
			<button disabled={loading.update} onClick={onSubmit}>{loading.update ? 'Alterando...' : 'Salvar'}</button>
		</CreateHierarchyContainer>
	);
};
