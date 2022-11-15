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
    .row {
        width: 90%;
        text-align: center;
        background-color: #D9D9D9;
        border-radius: 8px;
        padding: 0.5rem;
        p {
            color: #000;
        }
    }
    .button {
        width: 30%;
        text-align: center;
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
        cursor: pointer;
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`