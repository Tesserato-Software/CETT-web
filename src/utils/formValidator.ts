/*
    Recebe: um minimo e um maximo de caracteres. só retorna true se o valor estiver entre os dois
*/
export const validateLength = (value: string, min: number, max: number) => {
    return value.length >= min && value.length <= max;
}