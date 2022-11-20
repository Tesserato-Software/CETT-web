import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { validateLength } from "../../../utils/formValidator";
import { Container, ContainerButton } from "./style";
import { toast } from "react-toastify";
import {
	getValueData,
	getEventValueFormData,
} from "../../../utils/getFormData";
import { formData } from "../../../models/User";
import { initialStateFormData } from "../../../utils/constants/Users";

export const UsersRegister = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<formData>({
		...initialStateFormData,
	});
	const [roles, setRoles] = useState<any>([]);
	const navigate = useNavigate();
	const mailformatBr = /^[a-z0-9.]+@[a-z0-9]+.[edu | com]+(.[br]+)$/g
	const mailformat = /^[a-z0-9.]+@[a-z0-9]+(.[com]+)$/g

	const isInvalidPassword = formData.password.value !== formData.confirmPassword.value;
	const isInvalidEmail = !(formData.email.value.match(mailformatBr) 
	|| formData.email.value.match(mailformat))


	const isInvalidLength =
		!validateLength(
		formData.full_name.value,
		formData.full_name.min,
		formData.full_name.max,
		) ||
		!validateLength(
			formData.email.value,
			formData.email.min,
			formData.email.max,
		) ||
		!validateLength(
			formData.password.value,
			formData.password.min,
			formData.password.max
		) ||
		!validateLength(
			formData.confirmPassword.value,
			formData.confirmPassword.min,
			formData.confirmPassword.max
		)

	useEffect(() => {
		api.get("hierarchy/list")
			.then((response) => setRoles(response.data))
			.catch(() =>
				toast.error("Erro ao buscar as hierarquias!", {
					theme: "colored",
				})
			);
	}, []);

	const handleSubmit = () => {
		setIsLoading(true);
		if(isInvalidEmail) {
			setIsLoading(false);

			return toast.error("E-mail inválido!")
		}
		if(isInvalidPassword) {
			setIsLoading(false);

			return toast.error("A senha e a confirmação de senha devem ser correspondentes!")
		}	
		if ((formData.password.min >= formData.password.value.length) || 
		(formData.password.value.length >= formData.password.max)) {
			setIsLoading(false);

			return toast.error(`A senha deve estar entre ${formData.password.min} 
			e ${formData.password.max} caracteres!`, 
			{ theme: "colored", toastId: 'invalid-password'})
		}

		api.post("user/create", {
			hierarchy_id: getValueData(formData, "hierarchy_id") || roles[0].id,
			full_name: getValueData(formData, "full_name"),
			email: getValueData(formData, "email"),
			password: getValueData(formData, "password"),
		})
			.then(() => {
				setFormData({ ...initialStateFormData });

				toast.success("Usuário criado com sucesso!", {
					theme: "colored",
				});
				return navigate("/users/list");
			})
			.catch(() =>
				toast.error("Erro ao criar usuário!", { theme: "colored" })
			)
			.finally(() => setIsLoading(false));
	};

	return (
		<Container>
			<h1>Cadastro de Usuário</h1>
			<input
				className="input"
				type="text"
				onChange={(event) => {
					setFormData({
						...getEventValueFormData(formData, "full_name", event),
					});
				}}
				min={formData.full_name.min}
				max={formData.full_name.max}
				name="full_name"
				placeholder="Nome"
				disabled={isLoading}
			/>
			<input
				className="input"
				type="email"
				onChange={(event) => {
					setFormData({
						...getEventValueFormData(formData, "email", event),
					});
				}}
				min={formData.email.min}
				max={formData.email.max}
				name="email"
				placeholder="E-mail"
				disabled={isLoading}
			/>
			<input
				className="input"
				type="password"
				onChange={(event) => {
					setFormData({
						...getEventValueFormData(formData, "password", event),
					});
				}}
				min={formData.password.min}
				max={formData.password.max}
				name="password"
				placeholder="Senha"
				disabled={isLoading}
			/>
			<input
				className="input"
				type="password"
				onChange={(event) => {
					setFormData({
						...getEventValueFormData(
							formData,
							"confirmPassword",
							event
						),
					});
				}}
				min={formData.confirmPassword.min}
				max={formData.confirmPassword.max}
				name="confirmPassword"
				placeholder="Confirme a Senha"
				disabled={isLoading}
			/>
			<select
				className="select"
				placeholder={isLoading ? "Carregando..." : "Permissão"}
				name="hierarchy_id"
				value={roles.find(
					(r: any) => r?.id === formData.hierarchy_id.value
				)}
				disabled={isLoading}
				onChange={(event) =>
					setFormData({
						...getEventValueFormData(
							formData,
							"hierarchy_id",
							event
						),
					})
				}
			>
				{roles.map((role: any) => {
					return (
						<option key={role.id} value={role.id}>
							{role.name}
						</option>
					);
				})}
			</select>
			<ContainerButton>
				<button
					className="button"
					type="submit"
					disabled={isInvalidLength || isLoading}
					onClick={handleSubmit}
				>
					Cadastrar
				</button>
				<Link className="Link" to="/users/list">
					Voltar
				</Link>
			</ContainerButton>
		</Container>
	);
};
