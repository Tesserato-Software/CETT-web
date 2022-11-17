import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { Container, ContainerButton } from './style'
import { toast } from 'react-toastify'

export const UsersDelete = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate()


    const handleSubmit = () => {        
        setIsLoading(true)
        api.delete(`user/delete/${id}`)
        .then(() => {
            toast.success('Usuário deletado com sucesso!', 
                { theme: 'colored' }
            );
            navigate('/users/list')
        })
        .catch(() => toast.error('Erro ao deletar usuário!', 
            { theme: 'colored' }
        ))
        .finally(() => setIsLoading(false))
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
                    <button className="Link" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Carregando...' : 'Deletar'}
                    </button>
                </ContainerButton>
            </Container>
    )
}
