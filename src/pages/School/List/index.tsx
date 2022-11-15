import React from 'react'
import { ListSchoolContainer } from './style'

export const SchoolList = () => {
    return (
        <ListSchoolContainer>
            <div>
                <form>
                    <input className='text' type="text" placeholder='Filtros'/>
                    <input className='text' type="text" placeholder='Campos'/>
                </form>
            </div>
            <div className= 'lista'>
                <div className='borda_titulo'>
                    <h1 className= 'titulo'>Id</h1>
                    <h1 className= 'titulo'>Nome</h1>
                    <h1 className= 'titulo'>Situação</h1>
                </div>
                <div className='dados'>
                    <span>01</span>
                    <span>Colégio Estadual Tiago Terra</span>
                    <span>ativa</span>
                </div>
                <div className='dados'>
                    <span>02</span>
                    <span>Colégio Estadual Vicente Rijo</span>
                    <span>ativa</span>
                </div>
            </div>
        </ListSchoolContainer>
    )
}
