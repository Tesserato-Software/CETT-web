import styled from 'styled-components';

export const DeleteContainer = styled.div`
    display: grid;
    place-items: center;
    color: #fff;
    h1{
        margin-top: 20px;
    }
    div{
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
    section{
        display: flex;
        gap: 20px;
        margin-top: 20px;
        button {
            padding: .2rem .8rem;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 1.4rem;
        }
    }
`;