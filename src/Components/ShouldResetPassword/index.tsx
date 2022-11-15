import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContainerButton } from './style'
import { getEventValueFormData } from '../../utils/getFormData'
import { formData } from '../../models/User'
import { initialStateFormData } from '../../utils/constants/Users'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export const ShouldResetPassword = ({ user_id }: any) => {
  const [formData, setFormData] = useState<formData>({...initialStateFormData})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  
  const onSubmit = () => {
    setIsLoading(true)
    api.post(`psw-fa/${user_id}`)
    .then(() => {
      toast.success('Senha atualizada com sucesso!')
      navigate('/egress/list')
    })
    .catch(() => toast.error('Erro ao atualizar senha!'))
    .finally(() => setIsLoading(false))
  }

  return (
    <Container>
      <h3>Necessário Resetar a senha!</h3>
      <input
        className="input"
        type="password"
        onChange={event => {
          setFormData({
            ...getEventValueFormData(formData, 'password', event)
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
            ...getEventValueFormData(formData, 'confirmPassword', event)
          })
        }}
        min={formData.confirmPassword.min}
        max={formData.confirmPassword.max}
        name="confirmPassword"
        placeholder="Confirme a Senha"
        disabled={isLoading}
      />
      <ContainerButton>
        <button className="Link" disabled={isLoading} onClick={onSubmit}>
          Resetar
        </button>
      </ContainerButton>
    </Container>
  )
}
