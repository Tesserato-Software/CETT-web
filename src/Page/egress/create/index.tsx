import React, { useState } from 'react'
import { api } from '../../../services/api';
import { EgressCreateContainer } from './style'

export const CreateEgress = () => {
    const [egressData, setEgressData] = useState<{
        name: string;
        CGM_id: string;
        arq_id?: number;    
        birth_date?: Date;
        responsible_name: string;
        archive_id?: number;
    }>({
        name: '',
        CGM_id: '',
        responsible_name: ''
    }),
        [isLoading, setIsLoading] = useState(false),
        onSubmit = () => {
            setIsLoading(true);
            api.post('/egress/create', {...egressData, CGM_id: Number(egressData.CGM_id)})
                .then(res => {
                    console.log(res.data)
                    setEgressData({
                        name: '',
                        CGM_id: '',
                        arq_id: undefined,
                        birth_date: undefined,
                        archive_id: undefined,
                        responsible_name: '',
                    })
                })
                .catch(err => {
                    console.error(err)
                })
                .finally(() => setIsLoading(false))
        }

    return (
        <EgressCreateContainer>
            <header>
                <h1>Novo Cadastro</h1>
            </header>
            <section className='card'>
                <input
                    type="text"
                    placeholder='Nome'
                    value={egressData.name}
                    onChange={(e) => 
                        setEgressData(prevState => ({
                            ...prevState,
                            name: e.target.value
                        }))
                    }
                />
                <input
                    type="text"
                    placeholder='CGM'
                    value={egressData.CGM_id}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            CGM_id: e.target.value
                        }))
                    }}
                />
                <input
                    placeholder='Data de Nascimento'
                    type="date"
                    value={egressData.birth_date?.toISOString().split('T')[0]}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            birth_date: new Date(e.target.value)
                        }))
                    }}
                />
                <input
                    type="text"
                    placeholder='Nome da Mãe'
                    value={egressData.responsible_name}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            responsible_name: e.target.value
                        }))
                    }}
                />
                
                <input
                    type="number"
                    placeholder='Nº Arquivo'
                    value={egressData.arq_id}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            arq_id: Number(e.target.value)
                        }))
                    }}
                />
                <input
                    type="number"
                    placeholder='Nº caixa'
                    value={egressData.archive_id}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            archive_id: Number(e.target.value)
                        }))
                    }}
                />

            </section>
            <button
                onClick={onSubmit}
            >{isLoading ? 'Loading...' : 'Cadastrar'}</button>
        </EgressCreateContainer>
    )
}
