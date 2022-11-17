import React, { useEffect, useState } from 'react'
import {
    Container,
    ListSchoolContainer,
    ListItems,
    ListItem,
    ListHeader,
    ListSpan,
    ListHeaderItem,
    ListSpanLink
} from './style'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'
import { School } from '../../../models/School'

const columns = [
    { value: 1, label: 'ID' },
    { value: 2, label: 'NOME' },
]
export const SchoolList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [school, setSchool] = useState<School[]>([])
    const [name, setName] = useState<string>('')
    const [role, setRole] = useState<any>({})
    const [roles, setRoles] = useState<any>([])

    useEffect(() => {
        setIsLoading(true)
        api.get('school/list')
        .then(response => setSchool(response.data))
        .catch(() => toast.error('Erro ao buscar as escolas!', { theme: 'colored' }))
        .finally(() => setIsLoading(false))
    }, [])

    const filteredNames =
    name.length > 0 ? school.filter(escola => escola.name.includes(name)) : school

return (
    <>
        <Container className="school-list-form-container">
            <div>
                <input
                    className="input"
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={name}
                    onChange={event => setName(event?.target.value)}
                />
            </div>
            <Link className="Link" to="/school/create">
                Cadastrar Escola
            </Link>
        </Container>
        <ListSchoolContainer className="school-list-list-container">
            <ListHeader>
                {columns.map(column => (
                    <ListHeaderItem key={column.value}>
                        {column.label}
                    </ListHeaderItem>
                ))}
            </ListHeader>
            { isLoading ? <div className="loading">Carregando...</div> : <ListItems>
                {filteredNames.map(School => (
                    <ListItem key={School.id}>
                        <ListSpan>{School.id}</ListSpan>
                        <ListSpan>{School.name}</ListSpan>
                        <ListSpanLink>
                            <Link className="LinkUpdate" to={`/school/update/${School.id}`}>Editar</Link>
                            <Link className="LinkDelete" to={`/school/delete/${School.id}`}>Deletar</Link>
                        </ListSpanLink>
                    </ListItem>
                ))}
                </ListItems>}
            </ListSchoolContainer>
        </>
    )
}