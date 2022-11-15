import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerButton } from './style'

export const Unauthorized = () => {  
    return (
      <Container>
        <div className="row">Você não tem autorização para visualizar essa tela. 
        Por favor entre em contato com seu superior!</div>
        <ContainerButton>
          <Link className="Link" to="/">
            Voltar
          </Link>
        </ContainerButton>
      </Container>
  )
}