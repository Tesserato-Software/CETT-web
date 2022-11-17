import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { School } from '../../../models/School'
import { api } from '../../../services/api'
import { DeleteSchoolContainer } from './style'

export const SchoolDelete = () => {
    const navigate = useNavigate()
    const { id } = useParams(),
        [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true)
        api.delete(`/school/delete/${id}`)
            .then(() => {
                toast.success('Escola deletada com sucesso!')
                return navigate('/school/list')
            })
            .catch(err => {
                toast.error('Erro ao deletar os dados da escola!', { theme: 'colored' });
                console.error(err)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <DeleteSchoolContainer>
            {!isLoading
                ?<>
                <h1 className="titulo">Tem certeza que deseja excluir essa escola?</h1>
                <aside>
                    <Link to="/school/list" className="button">
                        Voltar
                    </Link>
                    <button className="Link" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Carregando...' : 'Deletar'}
                    </button>
                </aside>
                </>
                : <h1>Carregando...</h1>
            }  
        </DeleteSchoolContainer>
    )
}