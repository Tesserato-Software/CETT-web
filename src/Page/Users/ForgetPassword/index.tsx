import React from 'react'
import { ForgetContainer } from './style'

export const ForgetPassword = () => {
    return (
        <ForgetContainer>
            <section>
                <h1>Esqueceu sua senha?</h1>
                <p>Insira seu e-mail para receber um link de recuperação de senha.</p>
                <form>
                    <input type="email" placeholder="E-mail" />
                    <button>Enviar</button>
                </form>
            </section>
        </ForgetContainer>
    )
}
