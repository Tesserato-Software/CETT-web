import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginDiv } from "./style";
import logoImage from "../../assets/loginImage.png";
import * as AiIcons from 'react-icons/ai';

export const Login = () => {
	const [data, setData] = useState<{
			email: string;
			password: string;
		}>({
			email: "",
			password: "",
		}),
		[isLoading, setIsLoading] = useState(false),
		[isPasswordHidden, setIsPasswordHidden] = useState(false),
		navigate = useNavigate();

	const onSubmit = () => {
		let attempts = localStorage.getItem("@Login:attempts") || "0";

		setIsLoading(true);
		api.post("/auth/login", data)
			.then((response) => {
				localStorage.setItem(
					"@Auth:token",
					JSON.stringify(response.data.token)
				);
				localStorage.removeItem("@Login:attempts");
				toast.success("Login realizado com sucesso!", {
					theme: "colored",
				});

				setTimeout(() => {
					navigate("/");
				}, 500);
			})
			.catch((error) => {
				if (
					((error?.response?.data?.errors
					&& !error?.response?.data?.errors
						?.filter((e: any) => e.rule === "exists")
						.length) || !error?.response?.data?.up__unhashed)
					&& !!data.email
				) {
					if (+attempts > 3) {
						toast.error(
							"Você excedeu o número de tentativas, seu usuário será inativado e sua senha será resetada. Por favor contate o seu administrador.",
							{ theme: "colored", autoClose: false },
						);
						api.post("auth/login-failure", { email: data.email });
						localStorage.setItem('@Login:attempts', JSON.stringify(0))
						return;
					} else {
						localStorage.setItem(
							"@Login:attempts",
							JSON.stringify(+attempts + 1)
						);
					}
				}

				toast.error(
					"Erro, verifique as credenciais. Ao errar a senha por 3 vezes, seu usuário será inativado.",
					{ theme: "colored" }
				);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<LoginDiv>
			<div className="container">
				<h1>LOGIN</h1>
				<section>
					<div className="form-group first">
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
							id="email"
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}
							onKeyPress={(e) => {
								if (e.key === "Enter") onSubmit();
							}}
						/>
					</div>
					<div className="form-group last">
						<label htmlFor="password">Password</label>
						<input
							type={isPasswordHidden ? "password" : "text"}
							id="password"
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
							onKeyPress={(e) => {
								if (e.key === "Enter") onSubmit();
							}}
						/>
						{isPasswordHidden
							? <AiIcons.AiOutlineEye
								onClick={() => setIsPasswordHidden(false)}
							/>
							: <AiIcons.AiOutlineEyeInvisible
								onClick={() => setIsPasswordHidden(true)}
							/>
						}
					</div>
					<button
						onClick={onSubmit}
						className="button-login"
						type="submit"
					>
						{isLoading ? "Carregando..." : "Entrar"}
					</button>
				</section>
			</div>
			<div className="div-image">
				<img className="logo" src={logoImage} alt="Logo" />
			</div>
		</LoginDiv>
	);
};
