type hierarchy = {
    id: number
    school_id: number
    name: string
    can_update: boolean
    can_delete: boolean
}

declare export type user = {
    full_name: string
    id: number
    hierarchy: hierarchy[]
    email: string
}

declare export type formData = {
    full_name: {
        value: string
        min: number
        max: number
    }
    email: {
        value: string
        min: number
        max: number
    }
    password: {
        value: string
        min: number
        max: number
    }
    confirmPassword: {
        value: string
        min: number
        max: number
    }
    hierarchy_id: {
        value: number
    }
}