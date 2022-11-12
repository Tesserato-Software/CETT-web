import React, { useState } from 'react'
import { UpdateSchoolContainer } from './style'

export const SchoolUpdate = () => {
    const [name, setName] = useState('');

    return (
        <UpdateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
            <input className="texto" type="text"
                onChange={e => setName(e.target.value)}
            />
            <input className="botao_update" type="submit" value="editar"
                disabled={name.length <= 4}
            ></input>
        </UpdateSchoolContainer>
    )
}