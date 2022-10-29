import React, { useContext } from 'react'
import { headerContext } from '..'

export const Input2 = () => {
    const { data, setData } = useContext(headerContext)

    return (
        <div>
            {data?.input2
                ?.filter(d => d.is_enabled)
                ?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setData({
                                ...data,
                                input2: data?.input2?.map((item, itemIndex) => {
                                    if (itemIndex === index) {
                                        return {
                                            ...item,
                                            checked: !!item.checked
                                                ? undefined
                                                : data.input1
                                        }
                                    }
                                    return item
                                })
                            })
                        }}
                    >
                        <span>{item.name}</span>
                        {item.checked && <span> X</span>}
                    </div>
                ))}
        </div>
    )
}
