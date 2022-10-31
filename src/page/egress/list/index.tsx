import React from 'react'
import { ListContainer } from './style'

export const EgressList = () => {
    return (
        <ListContainer>
            <header className='root-header'>
                <aside>
                    <input type="text" placeholder="Search"/>
                    <select value='campos'>
                        <option value="1">Coordenador</option>
                        <option value="2">Secretário</option>
                        <option value="3">Estagiário</option>
                    </select>
                    <select value='ordem'>
                        <option value="1">alfabética A - Z</option>
                        <option value="2">alfabética Z - A</option>
                    </select>
                </aside>
                <aside>
                    <button>Cadastrar Egresso</button>
                </aside>
            </header>
            <section className='egress-grid'>
                <header className='grid-header'>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>CGM</span>
                    <span>N Arquivo</span>
                    <span>Data nascimento</span>
                    <span>Nome mãe</span>
                </header>
                <div>
                    <div className='row'>
                        <span>1</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>2</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>3</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>1</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>2</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>3</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>1</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>2</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                    <div className='row'>
                        <span>3</span>
                        <span>João</span>
                        <span>123456789</span>
                        <span>123456789</span>
                        <span>01/01/2000</span>
                        <span>Joana</span>
                    </div>
                </div>
            </section>
        </ListContainer>
    )
}
