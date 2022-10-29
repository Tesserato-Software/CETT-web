import React, { createContext, useState } from 'react'
import { Input1 } from './input1'
import { Input2 } from './input2'

type headerData = {
    input1: string
    input2: {
        name: string
        checked?: string
        is_enabled: boolean
    }[]
}

type headerContextType = {
    data: headerData
    setData: (data: headerData) => void
}

export const headerContext = createContext({} as headerContextType)

export const Container = () => {
    const [data, setData] = useState<headerData>({
        input1: '',
        input2: [
            {
                name: 'Nome',
                checked: undefined,
                is_enabled: true
            },
            {
                name: 'Email',
                checked: undefined,
                is_enabled: true
            },
            {
                name: 'Permissao',
                checked: undefined,
                is_enabled: true
            }
        ]
    })

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10rem'
            }}
        >
            <headerContext.Provider value={{ data, setData }}>
                <Input1 />
                <Input2 />
            </headerContext.Provider>
        </div>
    )
}
