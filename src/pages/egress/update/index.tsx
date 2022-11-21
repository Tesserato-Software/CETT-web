import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import { EgressCreateContainer } from './style'
import { DateTime } from 'ts-luxon';

export const UpdateEgress = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [egressData, setEgressData] = useState<{
        name: string;
        CGM_id: string;
        arq_id?: number;    
        birth_date?: string;
        responsible_name: string;
        archive_id?: number;
    }>({
        name: '',
        CGM_id: '',
        responsible_name: ''
    }),
        [isLoading, setIsLoading] = useState<{
            list: boolean;
            update: boolean;
            infos: boolean;
        }>({
            list: true,
            update: false,
            infos: true,
        }),
        [archives, setArchives] = useState([]),
        onSubmit = () => {
            setIsLoading({
                ...isLoading,
                update: true
            });
            api.post(`/egress/update/${id}`, {...egressData, CGM_id: Number(egressData.CGM_id)})
                .then(() => {
                    setEgressData({
                        name: '',
                        CGM_id: '',
                        arq_id: undefined,
                        birth_date: undefined,
                        archive_id: undefined,
                        responsible_name: '',
                    })
                    toast.success('Egresso salvo com sucesso!', 
                        { theme: 'colored' }
                    );
                    navigate('/egress/list')
                })
                .catch(err => {
                    console.error(err)
                    toast.error('Erro ao salvar egresso!',
                        { theme: 'colored' }
                    );
                })
                .finally(() => setIsLoading({
                    ...isLoading,
                    update: false
                }))
        }

    useEffect(() => {
        api.get('archive/list')
            .then(res => {
                setArchives(res.data)
            })
            .catch(() => {
                toast.error('Erro ao listar arquivos', 
                    {theme: 'colored'}
                )
            })
            .finally(() => setIsLoading({
                ...isLoading,
                list: false
            }))
    }, [])

    useEffect(() => {
        api.get(`egress/show/${id}`)
            .then(res => {
                setEgressData({
                    ...res.data, 
                    CGM_id: String(res.data.CGM_id),
                    birth_date: DateTime.fromISO(res.data.birth_date).toFormat('yyyy-MM-dd').toString(),
                })
            })
            .catch(err => {
                toast.error('Erro ao buscar egresso', 
                    { theme: 'colored' }
                )
                console.error(err)
            })
            .finally(() => setIsLoading({
                ...isLoading,
                infos: false
            }))
    }, [])

    return (
        <EgressCreateContainer>
            <header>
                <h1>Editar Egresso</h1>
            </header>
            <section className='card'>
                <input
                    type="text"
                    placeholder={isLoading.infos ? 'Carregando...' : 'Nome' }
                    value={egressData.name}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            name: e.target.value
                        }))
                    } 
                    }
                />
                <input
                    type="text"
                    placeholder={isLoading.infos ? 'Carregando...' : 'CGM' }
                    value={egressData.CGM_id}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            CGM_id: e.target.value
                        }))
                    }}
                />
                <input
                    placeholder={isLoading.infos ? 'Carregando...' : 'Data de Nascimento'}
                    type="date"
                    value={egressData?.birth_date}
                    onChange={(e) => {
                        setEgressData(prevState => ({
                            ...prevState,
                            birth_date: e.target.value
                        }))
                    }}
                />
                <input
                    type="text"
                    placeholder={isLoading.infos ? 'Carregando...' : 'Nome da Mãe'}
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
                    placeholder={isLoading.infos ? 'Carregando...' : 'Nº Arquivo'}
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
                    {!egressData.archive_id && <option value={undefined}>Selecione um arquivo</option>}
                    {!isLoading.list && archives?.map((archive: any) => {
                        return (
                        <option key={archive.id} value={archive.id}>{archive.id}</option>
                    )})}
                </select>
            </section>
            <div className="buttonsContainer">
                <Link className="Link" to="/egress/list">Voltar</Link>
                <button
                    onClick={onSubmit}
                >{isLoading.update ? 'Loading...' : 'Salvar'}
                </button>
            </div>
        </EgressCreateContainer>
    )
}
