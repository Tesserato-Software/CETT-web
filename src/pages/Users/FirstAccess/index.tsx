import React, { useState } from 'react'
import { FirstAccessContainer } from './style'

export const FirstAccess = () => {
    const [passwords, setPasswords] = useState<string[]>(['', ''])

    return (
        <FirstAccessContainer>
            <aside>
                <h1>Bem vindo!</h1>
                <h2>Primeiro, redefina a sua senha, para a que deseja</h2>
            </aside>
            <section>
                <label>Escreva sua senha:</label>
                <input type="password"
                    onChange={e => setPasswords([e.target.value, passwords[0]])}
                />
                <br/>
                <label>Confirme a sua senha:</label>
                <input type="password"
                    onChange={e => setPasswords([e.target.value, passwords[1]])}
                />
            </section>
            <button
                disabled={passwords[0].length <= 8 || passwords[1].length  <= 8 || passwords[0] !== passwords[1]}
            >Salvar</button>
        </FirstAccessContainer>
    )
}
