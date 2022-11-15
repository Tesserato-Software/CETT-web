import React, { useState } from 'react'
import { CreateSchoolContainer } from './style'

export const SchoolCreate = () => {
    const [name, setName] = useState('');

    return (
        <CreateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
            <input className="texto" type="text"
                onChange={e => setName(e.target.value)}
            />
            <input className="botao_criar" type="submit" value="criar"
                disabled={name.length <= 4}
            ></input>
        </CreateSchoolContainer>
    )
}