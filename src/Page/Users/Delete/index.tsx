import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerButton } from './style'

export const UsersDelete = () => {
    return (
        <form>
            <Container>
                <h1>Deletar Usuário</h1>
                <div className="row">
                    <p>Tem certeza que deseja deletar o usuário?</p>
                </div>
                <ContainerButton>
                    <Link to="/users/list" className="button">
                        Voltar
                    </Link>
                    <Link className="Link" to="/users/list">
                        Deletar
                    </Link>
                </ContainerButton>
            </Container>
        </form>
    )
}
