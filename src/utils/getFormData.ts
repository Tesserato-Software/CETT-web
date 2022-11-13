
export const getValueData = (data: any, obj: any) => {
    const { value } = data[obj]

    return value;
}

export const getEventValueFormData = (data: any, param: any, event: any) => {
    return {
        ...data,
        [param]: {
            ...data[param],
            value: event?.target.value
        }
    }
}