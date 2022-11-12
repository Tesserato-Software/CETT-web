import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import { Container, ContainerButton } from './style'
import { toast } from 'react-toastify'

export const UsersDelete = () => {
    const { id } = useParams()

    const handleSubmit = () => {        
        api.delete(`user/delete/${id}`)
        .then(() => {
            toast.success('Usuário deletado com sucesso!')
        })
        .catch(() => toast.error('Erro ao deletar usuário!'))
    }

    return (
            <Container>
                <h1>Deletar Usuário</h1>
                <div className="row">
                    <p>Tem certeza que deseja deletar o usuário?</p>
                </div>
                <ContainerButton>
                    <Link to="/users/list" className="button">
                        Voltar
                    </Link>
                    <button className="Link" onClick={handleSubmit}>
                        Deletar
                    </button>
                </ContainerButton>
            </Container>
    )
}
