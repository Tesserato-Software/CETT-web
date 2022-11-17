import React, { useState } from 'react'
import { DeleteHierarchyContainer } from './style'
import { api } from '../../../services/api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const DeleteHierarchy = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const backNoSubmit = () => {
        navigate("/hierarchy/list")
    }

    const handleSubmit = () => {
        setIsLoading(true)
        api.delete(`hierarchy/delete/${id}`)
            .then(() => {
                toast.success('Hierarquia deletada com sucesso')
                navigate("/hierarchy/list")    
            })
            .catch(err => {
                if (err.response.data.message === 'hierarchy_with_user') {
                    toast.error('Não é possível deletar uma hierarquia que possui usuários')
                } else {
                    toast.error('Erro ao deletar hierarquia')
                }
            })
            .finally(() => setIsLoading(false))
    }




    return (
        <DeleteHierarchyContainer>
            <section>
                <h1>Deletar cargo:</h1>
                <aside>
                    <button className='voltar' onClick={backNoSubmit}>Não</button>
                    <button className='confirm' onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Carregando...' : 'Sim'}    
                    </button>
                </aside>
            </section>
        </DeleteHierarchyContainer>
    )
}
