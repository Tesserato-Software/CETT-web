import React from 'react'
import { CreateSchoolContainer } from './style'

export const SchoolCreate = () => {
    return (
        <CreateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
                <input className="texto" type="text"/>
                <input className="botao_criar" type="submit" value="criar"></input>
        </CreateSchoolContainer>
    )
}