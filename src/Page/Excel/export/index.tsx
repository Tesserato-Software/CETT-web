import React from 'react'
import styled from 'styled-components';

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
    return (
        <ExportContainer>
            <section>
                <button>Exportar egressos em Excel</button>
                <span>.xls e .xlsx</span>
            </section>
        </ExportContainer>
    )
}
