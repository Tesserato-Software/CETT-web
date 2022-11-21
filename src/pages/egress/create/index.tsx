import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
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
        [isLoading, setIsLoading] = useState<{
            list: boolean;
            create: boolean;
        }>({
            list: true,
            create: false
        }),
        [archives, setArchives] = useState([]),
        onSubmit = () => {
            setIsLoading({
                ...isLoading,
                create: true
            });
            api.post('/egress/create', {...egressData, CGM_id: Number(egressData.CGM_id)})
                .then(() => {
                    setEgressData({
                        name: '',
                        CGM_id: '',
                        arq_id: undefined,
                        birth_date: undefined,
                        archive_id: undefined,
                        responsible_name: '',
                    })
                    toast.success('Egresso criado com sucesso!', 
                        { theme: 'colored' }
                    );
                })
                .catch(err => {
                    console.error(err)
                    toast.error('Erro ao criar egresso!',
                        { theme: 'colored' }
                    );
                })
                .finally(() => setIsLoading({
                    ...isLoading,
                    create: false
                }))
        }

    useEffect(() => {
        setIsLoading({
            ...isLoading,
            list: true
        })
        api.get('archive/list')
            .then(res => {
                setArchives(res.data)
            })
            .catch(err => {
                toast.error('Erro ao listar arquivos', 
                    {theme: 'colored'
                })
                console.error(err)
            })
            .finally(() => setIsLoading({
                ...isLoading,
                list: false
            }))
    }, [])

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
                <select
                    value={egressData.archive_id}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            archive_id: Number(e.target.value)
                        }))
                    }}
                >
                    <option value={undefined}>Selecione um arquivo</option>
                    {!isLoading.list && archives?.map((archive: any) => (
                        <option key={archive.id} value={archive.id}>{archive.id}</option>
                    ))}
                </select>
            </section>
            <button
                onClick={onSubmit}
            >{isLoading.create ? 'Loading...' : 'Cadastrar'}</button>
        </EgressCreateContainer>
    )
}
