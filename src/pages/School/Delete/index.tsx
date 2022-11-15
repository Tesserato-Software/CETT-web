import React from 'react'
import { DeleteSchoolContainer } from './style'

export const SchoolDelete = () => {
    return (
        <DeleteSchoolContainer>
            <h1 className="titulo">Tem certeza que deseja excluir a escola Thiago Terra?</h1>
            <aside>
                <button>Não</button>
                <button className='confirm'>Sim</button>
            </aside>
        </DeleteSchoolContainer>
    )
}