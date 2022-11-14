import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Table } from '../../../Components/Table'
import { Egress } from '../../../models/Egress'
import { api } from '../../../services/api'
import { ListContainer } from './style'

export const EgressList = () => {
    const [egresses, setEgresses] = useState<Egress[]>(),
        [isLoading, setIsLoading] = useState(true),
        [filters, setFilters] = useState(),
        [pagination, setPagination] = useState()

    useEffect(() => {
        setIsLoading(true)
        api.post('/egress/list', {
            filters,
        })
            .then(response => {
                setEgresses(response.data)
            })
            .catch(error => {
                toast.error('Erro ao listar egressos', {theme: 'colored'})
                console.log(error)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <ListContainer>
            <Table
                columns={[
                    {
                        name: 'ID',
                        identifier: 'arq_id',
                        filterable: true,
                        sortable: [
                            {
                                name: 'Crescente',
                                type: 'ASC',
                            },
                            {
                                name: 'Decrescente',
                                type: 'DESC',
                            }
                        ],
                    },
                    {
                        name: 'Nome',
                        identifier: 'name',
                        sortable: [{
                            name: 'Alfabética (A-Z)',
                            type: 'asc'
                        }, {
                            name: 'Alfabética (Z-A)',
                            type: 'desc'
                        }],
                        filterable: true
                    },
                    {
                        name: 'CGM',
                        identifier: 'CGM_id',
                        sortable: [{
                            name: 'Crescente',
                            type: 'asc'
                        }, {
                            name: 'Decrescente',
                            type: 'desc'
                        }],
                        filterable: true
                    },
                    {
                        name: 'Data de nascimento',
                        identifier: 'birth_date',
                        sortable: [{
                            name: 'Crescente',
                            type: 'asc'
                        }, {
                            name: 'Decrescente',
                            type: 'desc'
                        }],
                        filterable: true,
                        formatter: (value: string) => {
                            return new Date(value).toLocaleDateString('pt-BR')
                        }
                    },
                    {
                        name: 'Nome do responsável',
                        identifier: 'responsible_name',
                        filterable: true
                    },

                ]}
                data={egresses}
            />
        </ListContainer>
    )
}
