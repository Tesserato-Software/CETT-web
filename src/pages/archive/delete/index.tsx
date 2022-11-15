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
                .then(response => {
                    console.log(response.data)
                    toast.success(`Arquivo ${id} Deletado com Sucesso`, { theme: 'colored' })
                    setTimeout(() => {
                        navigate("/archive/list");
                    }, 500);
                })
                .catch((err: any) => {
                    console.error(err)
                    toast.error('Erro ao Deletar', { theme: 'colored' }
                    )
                })
                .finally(() => setIsLoading(false))
        }

    console.log(localStorage.getItem('@Auth:token'))


    return (
        <DeleteArchiveContainer>
            <section>
                <h1>Deletar caixa: {id} </h1>
                <aside>
                    <Link to={'/archive/list'}>Não</Link>
                    <button onClick={onSubmit} className='confirm'>Sim</button>
                </aside>
            </section>
        </DeleteArchiveContainer>
    )
}
