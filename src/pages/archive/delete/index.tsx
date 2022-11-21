import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import { DeleteArchiveContainer } from './style'

export const DeleteArchive = () => {
    const { id } = useParams(),
        [isLoading, setIsLoading] = useState(false),
        navigate = useNavigate(),
        onSubmit = () => {
            setIsLoading(true);
            api.delete(`/archive/delete/${id}`)
                .then(() => {
                    toast.success(`Arquivo ${id} Deletado com Sucesso`, { theme: 'colored' })
                    setTimeout(() => {
                        navigate("/archive/list");
                    }, 500);
                })
                .catch(() => {
                    toast.error('Erro ao Deletar', 
                    { theme: 'colored' }
                    )
                })
                .finally(() => setIsLoading(false))
        }

    return (
        <DeleteArchiveContainer>
            <section>
                <h1>Deletar caixa: {id} </h1>
                <aside>
                    <Link to={'/archive/list'}>Não</Link>
                    <button onClick={onSubmit} className='confirm' disabled={isLoading}>Sim</button>
                </aside>
            </section>
        </DeleteArchiveContainer>
    )
}
