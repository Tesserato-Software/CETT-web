import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { validateLength } from '../../../utils/formValidator'
import { Container, ContainerButton } from './style'
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

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

export const UsersUpdate = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [formData, setFormData] = useState({
        name: {
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

    useEffect(() => {
        api.get(`user/get-user/${id}`)
        .then((response) => {
            const { full_name, email, hierarchy_id, password } = response.data[0]

            setFormData({
                ...formData,
                name: {
                    ...formData.name,
                    value: full_name
                },
                email: {
                    ...formData.email,
                    value: email
                },
                hierarchy_id: {
                    ...formData.hierarchy_id,
                    value: hierarchy_id
                },
                password: {
                    ...formData.password,
                    value: password
                }
            })
        })
        .catch(() => toast.error('Erro ao carregar usuário!'))
        .finally(() => setIsLoading(false))
    }, [])

    const getValueData = (data: any, obj: any) => {
        const { value } = data[obj]

        return value;
    }

    const handleSubmit = () => {
        setIsLoading(true);
        api.put(`user/update/${id}`, {
            hierarchy_id: getValueData(formData, 'hierarchy_id'), 
            full_name: getValueData(formData, 'name'),
            email: getValueData(formData, 'email') ,
            password: getValueData(formData, 'password')
        })
        .then(() => {
            setFormData({
                name: {
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
        
            return toast.success('Usuário atualizado com sucesso!');
        })
        .catch(() => toast.error('Erro ao atualizar usuário!'))
        .finally(() => setIsLoading(false))
    }

    return (
        <Container>
            <h1>Editar Usuário</h1>
            <input
            className="input"
                type="text"
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
                value={formData.email.value}
                placeholder={isLoading ? "Carregando..." : "E-mail"}
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
                value={formData.password.value}
                placeholder={isLoading ? "Carregando..." : "Senha"}
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
                value={formData.confirmPassword.value}
                placeholder="Confirme a Senha"
                disabled={isLoading}
            />
            <select
                className="select"
                placeholder={isLoading ? "Carregando..." : "Permissão"}
                name="role"
                value={formData.hierarchy_id.value}
                disabled={isLoading}
                onChange={event => setFormData({
                    ...formData,
                    hierarchy_id: {
                        ...formData.hierarchy_id,
                        value: Number(event.target.value)
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
                <button className="button"
                    onClick={handleSubmit}
                    disabled={
                        !validateLength(formData.name.value, formData.name.min, formData.name.max) ||
                        !validateLength(formData.email.value, formData.email.min, formData.email.max) ||
                        !validateLength(formData.password.value, formData.password.min, formData.password.max) ||
                        !validateLength(formData.confirmPassword.value, formData.confirmPassword.min, formData.confirmPassword.max) ||
                        formData.password.value !== formData.confirmPassword.value ||
                        isLoading
                    }
                >
                    {isLoading ?
                        "Carregando..." : "Salvar"
                    }
                </button>
                <Link className="Link" to="/users/list">
                    Voltar
                </Link>
            </ContainerButton>
        </Container>
    )
}
