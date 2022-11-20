import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    min-height: 50vh;
    margin: 8rem auto 1rem auto;
    gap: 1rem;
    border-radius: 12px;
    background-color: rgba(231, 231, 231, 0.3);
    padding: 2rem;
    h3 {
        font-size: 2rem;
        color: #fff;
    }
    div.row{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 80%;
        .input {
            background-color: #D9D9D9;
            padding: 4px;
            border: 1px solid #D9D9D9;
            border-radius: 8px;
            width: 100%;
            padding: .5rem .3rem;
        }
        svg{
            position: absolute;
            top: 20%;
            right: 1rem;
            color: #000;
            cursor: pointer;
            font-size: 1.5rem;
        }
    }
    .Link {
        width: 30%;
        background-color: #E13763;
        padding: .5rem .3rem;
        border: 1px solid #E13763;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: bolder;
        color: #fff;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        &:disabled {
            opacity: .8;
            cursor: not-allowed;
        }
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
