import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { DateTime } from 'ts-luxon';
import { Egress } from '../../../models/Egress';
import { api } from '../../../services/api';
import { data_export } from './data-export';

const ExportContainer = styled.div`
    height: calc(100vh - 90px);
    width: 100%;
    display: grid;
    place-items: center;
    section{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        button {
            background: #E13763;
            border-radius: 8px;
            border: none;
            outline: none;
            padding: .8rem 1rem;
            color: #fff;
            font-size: 1.7rem;
            cursor: pointer;
        }
        span{
            text-align: center;
            font-size: 1.2rem;
            color: #fff;
        }
    }
`;

export const ExportExcel = () => {
    
    const [egresses, setEgresses] = useState<Egress[]>(),
        [loading, setLoading] = useState<{
            list: boolean,
            export: boolean
        }>({
            list: true,
            export: false
        })
        const export_handler = async () => {
            if (egresses && egresses.length) {
                setLoading({ ...loading, export: true })
                let dataEx = await data_export(egresses)
                    , url = window.URL.createObjectURL(dataEx)
                    , a = document.createElement("a")
                    , now = DateTime.now()
        
                a.href = url;
                a.download = `Usuários egressos - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}.xlsx`;
                a.click();

                setLoading({ ...loading, export: false })
            }
        }

    useEffect(() => {
        setLoading({
            ...loading,
            list: true
        })
        api.get('/egress/list')
            .then(res => {
                setEgresses(res.data)
            })
            .catch(err => {
                toast.error('Erro ao carregar dados', 
                    {theme: 'colored'
                });
                console.error(err)
            })
            .finally(() => setLoading({
                ...loading,
                list: false
            }))
    }, [])

    return (
        <ExportContainer>
            {!loading.export ? <section>
                <button onClick={export_handler}>{loading.export ? 'Carregando...' : 'Exportar egressos em Excel'}</button>
                <span>.xls e .xlsx</span>
            </section> : 'Carregando...'}
        </ExportContainer>
    )
}
