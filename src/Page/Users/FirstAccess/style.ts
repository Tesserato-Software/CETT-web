import styled from 'styled-components';

export const FirstAccessContainer = styled.div`
    color: #FFFF;
    display: grid;
    place-items: center;
    height: calc(100vh - 90px);
    padding: 15vh 0;
    aside{
        width: 40%;
        text-align: left;
        h1{
            font-size: 2.5rem;
        }
        h2{
            font-weight: 300;
        }
    }
    section{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        gap: .3rem;
        width: 40%;
        input{
            border: none;
            border-radius: 5px;
            padding: .5rem .7rem;
            width: 45%;
            outline: none;
            font-size: 1rem;
        }
    }
    button {
        padding: .3rem 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 10%;
        background-color: #E13763;
        color: #fff;
        font-size: 1.3rem;
        margin-left: 20%;
        cursor: pointer;
    }
`;