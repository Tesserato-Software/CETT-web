import React from 'react'
import { DeleteHierarchyContainer } from './style'

export const DeleteHierarchy = () => {
    return (
        <DeleteHierarchyContainer>
            <section>
                <h1>Deletar cargo:  3 - Coordenador</h1>
                <aside>
                    <button>Não</button>
                    <button className='confirm'>Sim</button>
                </aside>
            </section>
        </DeleteHierarchyContainer>
    )
}
