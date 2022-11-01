import React from 'react'
import { DeleteContainer } from './style'

export const DeleteEgress = () => {
    return (
        <DeleteContainer>
            <h1>Tem certeza que deseja excluir este usuário?</h1>

            <div>
                <span>Nome</span>
                <span>ID</span>
            </div>

            <section>
                <button>Sim</button>
                <button>Não</button>
            </section>
        </DeleteContainer>
    )
}
