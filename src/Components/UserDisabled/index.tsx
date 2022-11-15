import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerButton } from './style'

export const UserDisabled = () => {  
    return (
      <Container>
        <div className="row">Usuário desabilitado, por favor entre em contato com seu administrador!</div>
        <ContainerButton>
          <Link className="Link" to="/login">
            Voltar
          </Link>
        </ContainerButton>
      </Container>
  )
}
