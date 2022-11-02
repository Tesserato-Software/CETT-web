import React from 'react'
import { DeleteArchiveContainer } from './style'

export const DeleteArchive = () => {
    return (
        <DeleteArchiveContainer>
            <section>
                <h1>Deletar caixa:  3</h1>
                <aside>
                    <button>Não</button>
                    <button className='confirm'>Sim</button>
                </aside>
            </section>
        </DeleteArchiveContainer>
    )
}
