import styled from 'styled-components';

export const EgressUpdateContainer = styled.div`
    padding: 4rem 8rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    header{
        h1{
            font-size: 2.4rem;
            color: #fff;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    section{
        margin: 0 auto;
        width: 70%;
        padding: 4rem 8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        input{
            padding: .2rem .4rem;
            border-radius: 5px;
            border: none;
            outline: none;
        }
    }
    button{
        margin: 0 auto;
        padding: .2rem .8rem;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 1.4rem;
    }
`;