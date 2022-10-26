import React, { useContext } from 'react'
import { headerContext } from '..'

export const Input1 = () => {
    const { data, setData } = useContext(headerContext)

    return (
        <div>
            <input
                onChange={event => {
                    console.log(event.target.value)

                    let type_of_input = !isNaN(Number(event.target.value))
                        ? 'number'
                        : event.target.value.split('').every(l => isNaN(+l))
                            ? 'string'
                            : 'date'

                    setData({
                        input1: event?.target.value,
                        input2: data?.input2?.map(item => {
                            if (type_of_input === 'number') {
                                return {
                                    ...item,
                                    is_enabled: item.name === 'CGM'
                                }
                            }
                            if (type_of_input === 'string') {
                                return {
                                    ...item,
                                    is_enabled: item.name === 'nome'
                                }
                            }
                            return {...item, is_enabled: item.is_enabled = false}
                        })
                    })
                }}
            />
            {data?.input2
                ?.filter(d => !!d.checked)
                .map((item, index) => (
                    <div key={index}>
                        <span>{item.name}: {(!!item.checked) && item.checked}</span>
                    </div>
                ))
            }
        </div>
    )
}