import React, { useEffect, useState } from 'react'
import {
    Container,
    ListContainer,
    ListItems,
    ListItem,
    ListHeader,
    ListSpan,
    ListHeaderItem,
    ListSpanLink
} from './style'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api'
import { toast } from 'react-toastify';
import { user } from '../../../models/User'

const columns = [
    { value: 1, label: 'ID' },
    { value: 2, label: 'NOME' },
    { value: 3, label: 'E-MAIL' },
    { value: 4, label: 'CARGO' },
    { value: 5, label: ''}
]

export const UsersListDisableds = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<user[]>([])
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [role, setRole] = useState<any>({})
    const [roles, setRoles] = useState<any>([])

    useEffect(() => {
        setIsLoading(true)
        api.get('user/list-disableds')
        .then(response => setUsers(response.data))
        .catch(() => toast.error('Erro ao buscar os usuários inativos!'))
        .finally(() => setIsLoading(false))

        api.get('hierarchy/list')
        .then(response => setRoles(response.data))
        .catch(() => toast.error('Erro ao buscar as hierarquias inativos!'))
    }, [])

    const filteredNames =
        name.length > 0 ? users.filter(user => user.full_name.includes(name)) : users

    return (
        <>
            <Container className="users-list-form-container">
                <div>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nome"
                        name="full_name"
                        value={name}
                        onChange={event => setName(event?.target.value)}
                    />
                    <input
                        className="input"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={email}
                        onChange={event => setEmail(event?.target.value)}
                    />
                    <select
                        className="select"
                        placeholder="Permissão"
                        name="role"
                        onChange={event => setRole(event?.target.value)}
                    >
                        {roles.map((role: any) => {
                            return (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </Container>
            <ListContainer className="users-list-list-container">
                <ListHeader>
                    {columns.map(column => (
                        <ListHeaderItem key={column.value}>
                            {column.label}
                        </ListHeaderItem>
                    ))}
                </ListHeader>
               { isLoading ? <div className="loading">Carregando...</div> : <ListItems>
                    {filteredNames.map(user => (
                        <ListItem key={user.id}>
                            <ListSpan>{user.id}</ListSpan>
                            <ListSpan>{user.full_name}</ListSpan>
                            <ListSpan>{user.email}</ListSpan>
                            <ListSpan>{user.hierarchy.map(value => value.name)}</ListSpan>
                            <ListSpanLink>
                                <Link className="LinkUpdate" to={`/users/update/${user.id}`}>Editar</Link>
                                <Link className="LinkUpdate" to={`/users/delete/${user.id}`}>Deletar</Link>
                            </ListSpanLink>
                        </ListItem>
                    ))}
                </ListItems>}
            </ListContainer>
        </>
    )
}
