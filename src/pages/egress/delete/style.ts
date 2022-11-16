import styled from 'styled-components';

export const DeleteContainer = styled.div`
    display: grid;
    place-items: center;
    color: #fff;
    height: calc(100vh - 90px);
    padding: 20vh 0;
    h1{
        margin-top: 20px;
    }
    div{
        background-color: rgba(255, 255, 255, .3);
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        font-size: 20px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 1fr 1fr;
        row-gap: 20px;
        column-gap: 4rem;
    }
    section{
        display: flex;
        gap: 20px;
        margin-top: 20px;
        button, a {
            cursor: pointer;
            color: #000;
            text-decoration: none;
            background-color: #fff;
            padding: .2rem .8rem;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 1.4rem;
        }
    }
`;