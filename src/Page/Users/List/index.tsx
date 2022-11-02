import React, { useEffect, useState } from 'react'
import {
    Container,
    ListContainer,
    ListItems,
    ListItem,
    ListHeader,
    ListSpan,
    ListeHeaderItem
} from './style'

type user = {
    name: string
    id: number
    role: string
}

type data = {
    users: user[]
}

const data = [
    {
        name: 'Lisboa',
        id: 1,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Bortoliero',
        id: 2,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Gabriel',
        id: 3,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Watanabe',
        id: 4,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 5,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 6,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 7,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 8,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 9,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 9,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 10,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 11,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 12,
        role: 'Coordenador',
        email: 'teste@teste.com'
    },
    {
        name: 'Lisboa',
        id: 13,
        role: 'Coordenador',
        email: 'teste@teste.com'
    }
]

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

const columns = [
    { value: 1, label: 'ID' },
    { value: 2, label: 'NOME' },
    { value: 3, label: 'E-MAIL' },
    { value: 4, label: 'CARGO' }
]

export const UsersList = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [role, setRole] = useState({})

    useEffect(() => {
        console.log(name, email, role)
    }, [name, email, role])

    const filteredNames =
        name.length > 0 ? data.filter(aluno => aluno.name.includes(name)) : data

    return (
        <>
            <Container className="users-list-form-container">
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={name}
                    onChange={event => setName(event?.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={event => setEmail(event?.target.value)}
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
                <button>Cadastrar Usuário</button>
            </Container>
            <ListContainer className="users-list-list-container">
                <ListHeader>
                    {columns.map(column => (
                        <ListeHeaderItem key={column.value}>
                            {column.label}
                        </ListeHeaderItem>
                    ))}
                </ListHeader>
                <ListItems>
                    {filteredNames.map(user => (
                        <ListItem key={user.id}>
                            <ListSpan>{user.id}</ListSpan>
                            <ListSpan>{user.name}</ListSpan>
                            <ListSpan>{user.email}</ListSpan>
                            <ListSpan>{user.role}</ListSpan>
                        </ListItem>
                    ))}
                </ListItems>
            </ListContainer>
        </>
    )
}
