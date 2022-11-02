import React from 'react'
import { UpdateSchoolContainer } from './style'

export const SchoolUpdate = () => {
    return (
        <UpdateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
                <input className="texto" type="text"/>
                <input className="botao_update" type="submit" value="editar"></input>
        </UpdateSchoolContainer>
    )
}