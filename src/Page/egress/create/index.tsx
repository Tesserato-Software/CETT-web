import React from 'react'
import { EgressCreateContainer } from './style'

export const CreateEgress = () => {
    return (
        <EgressCreateContainer>
            <header>
                <h1>Novo Cadastro</h1>
            </header>
            <section className='card'>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='CGM'/>
                <input type="text" placeholder='Data de Nascimento'/>
                <input type="text" placeholder='Nome da Mãe'/>
                
                <input type="number" placeholder='Nº Arquivo'/>
                <input type="number" placeholder='Nº caixa'/>

            </section>
            <button>Cadastrar</button>
        </EgressCreateContainer>
    )
}
