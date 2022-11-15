import React, { useState } from 'react'
import styled from 'styled-components';
import { DateTime } from 'ts-luxon';
import { Egress } from '../../../models/Egress';
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
    const [egresses, setEgresses] = useState<Egress[]>()

    const export_handler = async () => {
        if (egresses && egresses.length) {
            let dataEx = await data_export(egresses)
                , url = window.URL.createObjectURL(dataEx)
                , a = document.createElement("a")
                , now = DateTime.now()
    
            a.href = url;
            a.download = `Usuários egressos - ${now.toLocaleString(DateTime.DATETIME_MED)}`;
            a.click();
        }
    }

    return (
        <ExportContainer>
            <section>
                <button onClick={export_handler}>Exportar egressos em Excel</button>
                <span>.xls e .xlsx</span>
            </section>
        </ExportContainer>
    )
}
