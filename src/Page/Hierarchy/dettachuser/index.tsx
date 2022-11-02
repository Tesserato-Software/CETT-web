import React from 'react'
import { AttachContainer, UserSection } from "./style"

export const DettachUser = () => {
    return (
        <AttachContainer>
            <UserSection>
            <span className='user'>User 1</span>
            <select name="role">
                <option value="">Coordenador</option>
            </select>
            <span className='opt'> <input type="checkbox"  /> Editar</span>
            <span> <input type="checkbox"  /> Excluir</span>
            </UserSection>
        </AttachContainer>

    )
}