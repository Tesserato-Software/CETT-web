import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerButton } from './style'

const roles = [
    {
        value: 1,
        label: 'Coordenador'
    },
    {
        value: 2,
        label: 'Secretário'
    },
    {
        value: 3,
        label: 'Estagiário'
    }
]

export const UsersRegister = () => {
    const [role, setRole] = useState({})

    console.log(role)

    return (
        <form>
            <Container>
                <h1>Cadastro de Usuário</h1>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Nome"
                />
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                />
                <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                <input
                    className="input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a Senha"
                />
                <select
                    className="select"
                    placeholder="Permissão"
                    name="role"
                    onChange={event => setRole(event?.target.value)}
                >
                    {roles.map(role => {
                        return (
                            <option key={role.value} value={role.value}>
                                {role.label}
                            </option>
                        )
                    })}
                </select>
                <ContainerButton>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                    <Link className="Link" to="/users/list">
                        Voltar
                    </Link>
                </ContainerButton>
            </Container>
        </form>
    )
}
