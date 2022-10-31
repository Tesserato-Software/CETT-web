import React, { useState } from 'react'

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
            <input type="text" name="name" placeholder="Nome" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Senha" />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirme a Senha"
            />
            <select
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
            <button type="submit">Cadastrar</button>
        </form>
    )
}
