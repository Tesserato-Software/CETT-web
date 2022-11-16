import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Egress } from '../../../models/Egress'
import { api } from '../../../services/api'
import { DeleteContainer } from './style'

export const DeleteEgress = () => {
    const { id } = useParams(),
        [isLoading, setIsLoading] = useState(false),
        [egress, setEgress] = useState<Egress>()

    useEffect(() => {
        setIsLoading(true)
        api.get(`/egress/show/${id}`)
            .then(res => {
                setEgress(res.data[0])
            })
            .catch(err => {
                toast.error('Erro ao carregar dados do egresso', 
                    { theme: 'colored' }
                );
                console.error(err)
            })
            .finally(() => setIsLoading(false))
    }, [id])

    return (
        <DeleteContainer>
            {!isLoading
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

                        <button>Sim</button>

                    </section>
                </>
                : <h1>Carregando...</h1>
            }
        </DeleteContainer>
    )
}
