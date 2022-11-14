import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import { DeleteArchiveContainer } from './style'

export const DeleteArchive = () => {
    const { id } = useParams(),
    [isLoading, setIsLoading] = useState(false),
    onSubmit = () => {
        setIsLoading(true);
        api.delete(`/archive/delete/${id}`)
        .then(response => {
            console.log(response.data)
          
        })
        .catch((err: any) => {
            console.error(err)
        })
        .finally(() => setIsLoading(false))
    }

    console.log(localStorage.getItem('@Auth:token')) 


    return (
        <DeleteArchiveContainer>
            <section>
                <h1>Deletar caixa:  3</h1>
                <aside>
                    <Link to={'/archive/home'}>Não</Link>
                    <button onClick={onSubmit} className='confirm'>Sim</button>
                </aside>
            </section>
        </DeleteArchiveContainer>
    )
}
