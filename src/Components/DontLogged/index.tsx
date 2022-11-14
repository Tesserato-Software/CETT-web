import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerButton } from './style'

export const DontLogged = () => {  
  useEffect(() => {
    localStorage.removeItem("@Auth:token");
  })

    return (
      <Container>
        <div className="row">Você não está autenticado. Por favor realize o log-in para ter acesso a essa tela!</div>
        <ContainerButton>
          <Link className="Link" to="/login">
            Fazer Log-in
          </Link>
        </ContainerButton>
      </Container>
  )
}