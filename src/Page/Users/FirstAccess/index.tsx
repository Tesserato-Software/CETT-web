import React from 'react'
import { FirstAccessContainer } from './style'

export const FirstAccess = () => {
    return (
        <FirstAccessContainer>
            <aside>
                <h1>Bem vindo!</h1>
                <h2>Primeiro, redefina a sua senha, para a que deseja</h2>
            </aside>
            <section>
                <label>Escreva sua senha:</label>
                <input type="password" />
                <br/>
                <label>Confirme a sua senha:</label>
                <input type="password" />
            </section>
            <button>Salvar</button>
        </FirstAccessContainer>
    )
}
