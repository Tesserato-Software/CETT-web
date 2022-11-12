import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateLength } from '../../../utils/formValidator'
import { Container, ContainerButton } from './style'

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
    const [role, setRole] = useState({}),
        [formData, setFormData] = useState({
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
            }
        })

    return (
        <form>
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
                    placeholder="Nome"
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
                />
                <select
                    className="select"
                    placeholder="Permissão"
                    name="role"
                    onChange={event => setRole(event?.target.value)}
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
                    <button className="button" type="submit"
                        disabled={
                            !validateLength(formData.name.value, formData.name.min, formData.name.max) ||
                            !validateLength(formData.email.value, formData.email.min, formData.email.max) ||
                            !validateLength(formData.password.value, formData.password.min, formData.password.max) ||
                            !validateLength(formData.confirmPassword.value, formData.confirmPassword.min, formData.confirmPassword.max) ||
                            formData.password.value !== formData.confirmPassword.value
                        }
                    >
                        Salvar
                    </button>
                    <Link className="Link" to="/users/list">
                        Voltar
                    </Link>
                </ContainerButton>
            </Container>
        </form>
    )
}
