import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { validateLength } from '../../../utils/formValidator'
import { Container, ContainerButton } from './style'
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { hierarchy } from '../../../models/User'

export const UsersUpdate = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [roles, setRoles] = useState<hierarchy[]>([])
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
        hierarchy_id: {
            value: 0,
        },
        should_reset_password: {
            value: false
        }
    })

    useEffect(() => {
        api.get('hierarchy/list')
        .then(response => setRoles(response.data))
        .catch(() => toast.error('Erro ao buscar as hierarquias!'))
    }, [])

    useEffect(() => {
        api.get(`user/get-user/${id}`)
        .then((response) => {
            const { full_name, email, hierarchy_id, should_reset_password } = response.data[0]

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
                should_reset_password: {
                    ...formData.should_reset_password,
                    value: should_reset_password,
                }
            })
        })
        .catch(() => toast.error('Erro ao carregar usuário!',
            { theme: 'colored' }
        ))
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
            should_reset_password: getValueData(formData, 'should_reset_password'),
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
                hierarchy_id: {
                    value: 0,
                },
                should_reset_password: {
                    value: false,
                },
            })
        
            toast.success('Usuário atualizado com sucesso!',
                { theme: 'colored' }
            );
            return navigate('/users/list')
        })
        .catch(() => toast.error('Erro ao atualizar usuário!',
            { theme: 'colored' }
        ))
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
                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>
                    )
                })}
            </select>
            <div className="checkbox">
                <input 
                    type="checkbox" 
                    name="shouldResetPassword" 
                    checked={formData.should_reset_password.value} 
                    onChange={(event) => setFormData({ ...formData, 
                        should_reset_password: { 
                            ...formData, 
                            value: event.target.checked 
                        } })}
                />
                <p>Precisa Resetar Senha?</p>
            </div>
            <ContainerButton>
                {/* validateLength */}
                <button className="button"
                    onClick={handleSubmit}
                    disabled={
                        !validateLength(formData.name.value, formData.name.min, formData.name.max) ||
                        !validateLength(formData.email.value, formData.email.min, formData.email.max) ||
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
