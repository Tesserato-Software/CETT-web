import React, { useState } from 'react'
import { ForgetContainer } from './style'

export const ForgetPassword = () => {
    const [email, setEmail] = useState<string>('');

    return (
        <ForgetContainer>
            <section>
                <h1>Esqueceu sua senha?</h1>
                <p>Insira seu e-mail para receber um link de recuperação de senha.</p>
                <form>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                    <button
                        disabled={email.length === 0 || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null}
                    >Enviar</button>
                </form>
            </section>
        </ForgetContainer>
    )
}
