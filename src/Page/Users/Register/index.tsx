import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api'
import { validateLength } from '../../../utils/formValidator'
import { Container, ContainerButton } from './style'
import { toast } from 'react-toastify'

const roles = [
    {
        value: 1,
        label: 'Coordenador'
    },
    {
        value: 2,
        label: 'Secretário'
    },
    {
        value: 3,
        label: 'Estagiário'
    }
]

export const UsersRegister = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<{
        full_name: string;
        email: string;
        hierarchy_id: number;
        password: string;
    }>({
        full_name: '',
        email: '',
        hierarchy_id: 0,
        password: ''
    })

    const [formData, setFormData] = useState({
        full_name: {
            value: '',
            min: 4,
            max: 30
        },
        email: {
            value: '',
            min: 6,
            max: 30
        },
        password: {
            value: '',
            min: 8,
            max: 30
        },
        confirmPassword: {
            value: '',
            min: 8,
            max: 30
        },
        hierarchy_id: {
            value: 0,
        }
    })

    const getValueData = (data: any, obj: any) => {
        const { value } = data[obj]

        return value;
    }

    const handleSubmit = () => {
        setIsLoading(true)
        api.post('user/create', { 
            hierarchy_id: getValueData(formData, 'hierarchy_id'), 
            full_name: getValueData(formData, 'full_name'),
            email: getValueData(formData, 'email') ,
            password: getValueData(formData, 'password')
        })
        .then(() => {
            setUser({
                full_name: '',
                email: '',
                hierarchy_id: 0,
                password: ''
            })
        
            return toast.success('Usuário criado com sucesso!');
        })
        .catch(() => toast.error('Erro ao criar usuário!'))
        .finally(() => setIsLoading(false))
    }

    return (
            <Container>
                <h1>Cadastro de Usuário</h1>
                <input
                    className="input"
                    type="text"
                    onChange={event => {
                        setFormData({
                            ...formData,
                            full_name: {
                                ...formData.full_name,
                                value: event.target.value
                            }
                        })
                    }}
                    min={formData.full_name.min}
                    max={formData.full_name.max}
                    name="full_name"
                    placeholder="Nome"
                    disabled={isLoading}
                />
                <input
                    className="input"
                    type="email"
                    onChange={event => {
                        setFormData({
                            ...formData,
                            email: {
                                ...formData.email,
                                value: event.target.value
                            }
                        })
                    }}
                    min={formData.email.min}
                    max={formData.email.max}
                    name="email"
                    placeholder="E-mail"
                    disabled={isLoading}
                />
                <input
                    className="input"
                    type="password"
                    onChange={event => {
                        setFormData({
                            ...formData,
                            password: {
                                ...formData.password,
                                value: event.target.value
                            }
                        })
                    }}
                    min={formData.password.min}
                    max={formData.password.max}
                    name="password"
                    placeholder="Senha"
                    disabled={isLoading}
                />
                <input
                    className="input"
                    type="password"
                    onChange={event => {
                        setFormData({
                            ...formData,
                            confirmPassword: {
                                ...formData.confirmPassword,
                                value: event.target.value
                            }
                        })
                    }}
                    min={formData.confirmPassword.min}
                    max={formData.confirmPassword.max}
                    name="confirmPassword"
                    placeholder="Confirme a Senha"
                    disabled={isLoading}
                />
                <select
                    className="select"
                    placeholder="Permissão"
                    name="hierarchy_id"
                    disabled={isLoading}
                    onChange={event => setFormData({
                        ...formData,
                        hierarchy_id: {
                            ...formData.hierarchy_id,
                            value: Number(event?.target.value)
                        }
                    })}
                >
                    {roles.map(role => {
                        return (
                            <option key={role.value} value={role.value}>
                                {role.label}
                            </option>
                        )
                    })}
                </select>
                <ContainerButton>
                    {/* validateLength */}
                    <button
                        className="button"
                        type="submit"
                        disabled={
                            !validateLength(
                                formData.full_name.value,
                                formData.full_name.min,
                                formData.full_name.max
                            ) ||
                            !validateLength(
                                formData.email.value,
                                formData.email.min,
                                formData.email.max
                            ) ||
                            !validateLength(
                                formData.password.value,
                                formData.password.min,
                                formData.password.max
                            ) ||
                            !validateLength(
                                formData.confirmPassword.value,
                                formData.confirmPassword.min,
                                formData.confirmPassword.max
                            ) ||
                            formData.password.value !==
                                formData.confirmPassword.value ||
                            isLoading
                        }
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </button>
                    <Link className="Link" to="/users/list">
                        Voltar
                    </Link>
                </ContainerButton>
            </Container>
    )
}
