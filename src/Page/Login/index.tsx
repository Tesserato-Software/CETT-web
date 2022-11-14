import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginDiv } from "./style";

export const Login = () => {
	const [data, setData] = useState<{
		email: string;
		password: string;
	}>({
		email: "",
		password: "",
	}),
		[isLoading, setIsLoading] = useState(false),
		navigate = useNavigate()

    const onSubmit = () => {
		setIsLoading(true);
        api.post("/auth/login", data)
            .then((response) => {
                console.log(response);
				localStorage.setItem("@Auth:token", JSON.stringify(response.data.token));
				toast.success("Login realizado com sucesso!", {theme: 'colored'});

				setTimeout(() => {
					navigate("/");
				}, 500);
            })
            .catch((error) => {
				console.log(error);
				toast.error("Erro, verifique as credenciais", {theme: 'colored'});
            })
			.finally(() => setIsLoading(false));
    }

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
						/>
					</div>
					<div className="form-group last">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
						/>
					</div>
					<button onClick={onSubmit} className="button-login" type="submit">
						{isLoading ? 'Carregando...' : 'Entrar'}
					</button>
				</section>
			</div>
		</LoginDiv>
	);
};
