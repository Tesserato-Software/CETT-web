import React from 'react'
import { LoginDiv } from './style'


export const Login = () => {    
    return (

        <LoginDiv>
            <div className='container'>
                <h1>LOGIN</h1>
                <form>
                    <div className='form-group' >
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' id='email'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'/>
                    </div>
                    <button className='button-login' type='submit'>Entrar</button>
                </form>
            </div>
        </LoginDiv>
                
)}




