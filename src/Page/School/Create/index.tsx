import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import { CreateSchoolContainer } from './style'

export const SchoolCreate = () => {
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
                toast.success('Usuário criado com sucesso!')
                setSchoolData({
                    name: ''
                })
                })
                .catch(err => {
                    console.error(err)
                })
                .finally(() => setIsLoading (false))
        }

    return (
        <CreateSchoolContainer>
            <h1 className="titulo">Nome da escola</h1>
            <input className="texto" type="text"
                onChange={(e) => {
                    setSchoolData(prevState => ({ ...prevState, name: e.target.value }))
                    }
                }
            />
            <Link to="/school/list" className="button">
                Voltar
            </Link>
            <button
                onClick={onSubmit}
            >{isLoading ? 'Loading...' : 'Cadastrar'}</button>
        </CreateSchoolContainer>
    )
}