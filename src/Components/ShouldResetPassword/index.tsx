import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerButton } from "./style";
import { getEventValueFormData } from "../../utils/getFormData";
import { formData } from "../../models/User";
import { initialStateFormData } from "../../utils/constants/Users";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { validateLength } from '../../utils/formValidator'


export const ShouldResetPassword = ({ user_id }: { user_id?: number }) => {
	const [formData, setFormData] = useState<formData>({
		...initialStateFormData,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const isInvalidPassword = formData.password.value !== formData.confirmPassword.value

	const onSubmit = () => {
		if (user_id) {
			setIsLoading(true);
			if(isInvalidPassword) {
				setIsLoading(false);
	
				return toast.error("A senha e a confirmação de senha devem ser correspondentes!")
			}	
			if ((formData.password.min > formData.password.value.length) || 
			(formData.password.value.length > formData.password.max)) {
				setIsLoading(false);
	
				return toast.error(`A senha deve estar entre ${formData.password.min} 
				e ${formData.password.max} caracteres!`, 
				{ theme: "colored", toastId: 'invalid-password'})
			}

			api.post(`/user/psw-storage/${user_id}`, {
				password: formData.password.value,
			})
				.then(() => {
					toast.success("Senha atualizada com sucesso!",{ theme: "colored" }); 
					navigate("/egress/list");
				})
				.catch(err => {
					console.error(err);
					if(err.response.data.exists){
						toast.error("A senha deve ser diferente de pelo menos 3 anteriores!",{ theme: "colored" });
					} else {
						toast.error("Erro ao atualizar senha!",{ theme: "colored" });
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	return (
		<Container>
			<h3>Necessário Resetar a senha!</h3>
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
			<ContainerButton>
				<button
					className="Link"
					disabled={isLoading}
					onClick={onSubmit}
				>
					Resetar
				</button>
			</ContainerButton>
		</Container>
	);
};
