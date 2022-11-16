import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Egress } from '../../../models/Egress'
import { api } from '../../../services/api'
import { DeleteContainer } from './style'

export const DeleteEgress = () => {
    const { id } = useParams(),
        [isLoading, setIsLoading] = useState<{
            loading: boolean
            delete: boolean
        }>({
            loading: true,
            delete: false,
        }),
        [egress, setEgress] = useState<Egress>(),
        navigate = useNavigate(),
        onDelete = () => {
            setIsLoading({ ...isLoading, delete: true })
            api.delete(`/egress/delete/${id}`)
                .then(() => {
                    toast.success('Egresso excluído com sucesso!', { theme: 'colored' })
                    setIsLoading({ ...isLoading, delete: false })
                    navigate('/egress/list')
                })
                .catch(() => {
                    toast.error('Erro ao excluir egresso!', { theme: 'colored' })
                    setIsLoading({ ...isLoading, delete: false })
                })
        }

    useEffect(() => {
        setIsLoading({
            ...isLoading,
            loading: true,
        })
        api.get(`/egress/show/${id}`)
            .then(res => {
                setEgress(res.data)
            })
            .catch(err => {
                toast.error('Erro ao carregar dados do egresso', 
                    { theme: 'colored' }
                );
                console.error(err)
            })
            .finally(() => setIsLoading({
                ...isLoading,
                loading: false,
            }))
    }, [id])

    return (
        <DeleteContainer>
            {!isLoading.loading
                ? <>
                    <h1>Tem certeza que deseja excluir este usuário?</h1>

                    <div className='grid'>
                        {egress?.arq_id
                            && <span>
                                <strong>Id: </strong>
                                {egress?.arq_id}
                            </span>
                        }
                        {egress?.name
                            && <span>
                                <strong>Nome: </strong>
                                {egress?.name}
                            </span>
                        }
                        {egress?.CGM_id
                            && <span>
                                <strong>CGM: </strong>
                                {egress?.CGM_id}
                            </span>
                        }
                        {egress?.responsible_name
                            && <span>
                                <strong>Nome do responsável: </strong>
                                {egress?.responsible_name}
                            </span>
                        }
                        {egress?.archive_id
                            && <span>
                                <strong>Id da caixa: </strong>
                                {egress?.archive_id}
                            </span>
                        }
                        {egress?.birth_date
                            && <span>
                                <strong>Data de nascimento: </strong>
                                {new Date(egress?.birth_date).toDateString()}
                            </span>
                        }
                    </div>

                    <section>

                        <Link
                            to='/'
                            replace={true}
                        >Voltar para home</Link>

                        <button onClick={onDelete}>{
                            isLoading.delete
                                ? 'Excluindo...'
                                : 'Excluir'
                        }</button>

                    </section>
                </>
                : <h1>Carregando...</h1>
            }
        </DeleteContainer>
    )
}
