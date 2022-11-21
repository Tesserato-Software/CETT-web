import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerButton } from "./style";
import { getEventValueFormData } from "../../utils/getFormData";
import { formData } from "../../models/User";
import { initialStateFormData } from "../../utils/constants/Users";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { validateLength } from '../../utils/formValidator'
import * as AiIcons from 'react-icons/ai';


export const ShouldResetPassword = ({ user_id }: { user_id?: number }) => {
	const [formData, setFormData] = useState<formData>({
		...initialStateFormData,
	});
	const [passwordsHidden, setPasswordsHidden] = useState({
		password: true,
		confirm: true
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const isInvalidPassword = formData.password.value !== formData.confirmPassword.value

	const onSubmit = () => {
		if (user_id) {
			setIsLoading(true);
			if(isInvalidPassword) {
				setIsLoading(false);
	
				return toast.error("A senha e a confirmação de senha devem ser correspondentes!", { theme: "colored" })
			}	
			if ((formData.password.min > formData.password.value.length) || 
			(formData.password.value.length > formData.password.max)) {
				setIsLoading(false);
	
				return toast.error(`A senha deve estar entre ${formData.password.min} 
				e ${formData.password.max} caracteres!`, 
				{ theme: "colored", toastId: 'invalid-password'})
			}

			let hard_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
			if (!hard_pass.test(formData.password.value)) {
				setIsLoading(false);

				return toast.error(`A senha deve conter pelo menos 8 caracteres,
				uma letra maiúscula, uma letra minúscula, um número e um caractere especial!`,
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
						toast.error("Erro ao atualizar senha!", { theme: "colored" });
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	return (
		<Container>
			<h3>Necessário Redefinir a senha!</h3>
			<div className="row">
				<input
					className="input"
					type={passwordsHidden.password ? "password" : 'text'}
					onChange={(event) => {
						setFormData({
							...getEventValueFormData(formData, "password", event),
						});
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") onSubmit();
					}}
					min={formData.password.min}
					max={formData.password.max}
					name="password"
					placeholder="Senha"
					disabled={isLoading}
				/>
				{passwordsHidden.password
					? <AiIcons.AiOutlineEye
						onClick={() => setPasswordsHidden({...passwordsHidden, password: false})}
					/>
					: <AiIcons.AiOutlineEyeInvisible
						onClick={() => setPasswordsHidden({...passwordsHidden, password: true})}
					/>
				}
			</div>
			<div className="row">
				<input
					className="input"
					type={passwordsHidden.confirm ? "password" : 'text'}
					onChange={(event) => {
						setFormData({
							...getEventValueFormData(
								formData,
								"confirmPassword",
								event
							),
						});
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") onSubmit();
					}}
					min={formData.confirmPassword.min}
					max={formData.confirmPassword.max}
					name="confirmPassword"
					placeholder="Confirme a Senha"
					disabled={isLoading}
				/>
				{passwordsHidden.confirm
					? <AiIcons.AiOutlineEye
						onClick={() => setPasswordsHidden({...passwordsHidden, confirm: false})}
					/>
					: <AiIcons.AiOutlineEyeInvisible
						onClick={() => setPasswordsHidden({...passwordsHidden, confirm: true})}
					/>
				}
			</div>
			<ContainerButton>
				<button
					className="Link"
					disabled={(isLoading || (
						(formData.password.value.length < formData.password.min) ||
						(formData.password.value.length > formData.password.max) ||
						(formData.password.value !== formData.confirmPassword.value)
					))}
					onClick={onSubmit}
				>
					{isLoading ? 'Carregando...' : 'Redefinir'}
				</button>
			</ContainerButton>
		</Container>
	);
};
