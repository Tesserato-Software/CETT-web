import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import { CreateSchoolContainer } from './style'

export const SchoolCreate = () => {
    const navigate = useNavigate()
    const [schoolData, setSchoolData] = useState<{
        name: string;
    }>({
        name: ''
    }),
        [isLoading, setIsLoading] = useState(false),
        onSubmit = () => {
            setIsLoading(true);
            api.post('/school/create', {...schoolData })
            .then(() => {
                toast.success('Escola criada com sucesso!');
                setSchoolData({
                    name: ''
                });
                return navigate('/school/list')
                })
                .catch(err => {
                    toast.error('Erro ao criar os dados da escola.'), { theme: 'colored' } 
                    console.error(err)
                })
                .finally(() => setIsLoading (false))
        }

    return (
        <CreateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
            <input className="texto" type="text" placeholder="Nome"
                onChange={(e) => {
                    setSchoolData(prevState => ({ ...prevState, name: e.target.value }))
                    }
                }
            />
            <div className='botoes'>
                <Link to="/school/list" className="button">
                    Voltar
                </Link>
                <button
                    onClick={onSubmit}
                >{isLoading ? 'Loading...' : 'Cadastrar'}</button>
            </div>
        </CreateSchoolContainer>
    )
}