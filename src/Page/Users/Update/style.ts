import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 2rem auto 1rem auto;
    gap: 1rem;
    border-radius: 12px;
    background-color: rgba(231, 231, 231, 0.3);
    padding: 2rem;
    h1 {
        color: #fff;
    }
    .input {
        background-color: #D9D9D9;
        padding: 4px;
        border: 1px solid #D9D9D9;
        border-radius: 8px;
        width: 80%;
    }
    .select {
        border-radius: 8px;
        width: 80%; 
    }
    .button {
        width: 30%;
        background-color: #E13763;
        padding: .3rem;
        border: 1px solid #E13763;
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
    .Link {
        width: 30%;
        background-color: #344458;
        padding: .3rem;
        border: 1px solid #344458;
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
        text-align: center;
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`