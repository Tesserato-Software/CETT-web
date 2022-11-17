import React, { useEffect, useState } from 'react'
import { UpdateSchoolContainer } from './style'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export const SchoolUpdate = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [formData, setFormData] = useState({
        name: {
            value: '',
            min: 4,
            max: 50
        }
    })

    useEffect(() => {
        api.get(`school/get-school/${id}`)
        .then((response) => {
            const { name } = response.data[0]
            setFormData({
                name: {
                    ...formData.name,
                    value: name
                }
            })
        })
        .catch((err) => {
            console.error(err);
            toast.error('Erro ao carregar escola!', {theme: 'colored'})
        })
        .finally(() => setIsLoading(false))
    }, [])

    const getValueData = (data: any, obj: any) => {
        const { value } = data[obj]

        return value;
    }

    const handleSubmit = () => {
        setIsLoading(true);
        api.put(`school/update/${id}`, {
            name: getValueData(formData, 'name'),
        })
        .then(() => {
            toast.success('Escola atualizada com sucesso!', {theme: 'colored'});
            navigate('/school/list')
        })
        .catch(() => toast.error('Erro ao atualizar escola!', {theme: 'colored'}))
        .finally(() => setIsLoading(false))
    }

    return (
        <UpdateSchoolContainer>
            <h1 className="titulo">Novo nome da escola</h1>
            <input
                className='texto'         
                onChange={event => {
                    setFormData({
                        ...formData,
                        name: {
                            ...formData.name,
                            value: event.target.value
                        }
                    })
                }}
                min={formData.name.min}
                max={formData.name.max}
                name="name"
                value={formData.name.value}
                placeholder={isLoading ? "Carregando..." : "Nome"}
                disabled={isLoading}
            />
            <div className='botoes'>
                <Link to="/school/list" className="button">
                    Voltar
                </Link>
                <button className="botao_update" onClick={handleSubmit}
                >
                    {isLoading ? "Carregando..." : "Salvar"}
                </button>
            </div>
        </UpdateSchoolContainer>
    )
}