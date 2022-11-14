import React, { useState } from "react";
import { api } from "../../services/api";
import { LoginDiv } from "./style";

export const Login = () => {
	const [data, setData] = useState<{
		email: string;
		password: string;
	}>({
		email: "",
		password: "",
	});

    const onSubmit = () => {
        api.post("/auth/login", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
					<button onClick={onSubmit}className="button-login" type="submit">
						Entrar
					</button>
				</section>
			</div>
		</LoginDiv>
	);
};
