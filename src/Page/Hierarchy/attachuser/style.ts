import styled from "styled-components"

export const AttachContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D9D9D950;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1rem;
    border-bottom: 0.1rem solid #000;
`;

export const UserSection = styled.div`
    border-bottom: 0.1rem solid #000;
    display: flex;
    flex-direction: column;
    color: #fff;
    .user {
        font-size: 1.5rem;
    }

    select{
        border: none;
        border-radius: 0.2rem;
        margin: 0 1.5rem 0.3rem 0 ;
    }

    button{
        border: none;
        padding: 0.2rem;
    }

    .opt{
        margin-right: 1rem;
    }
    a {
        margin-left: 1rem;
        text-decoration: none;
        color: #fff;
        background-color: #ff0070;
    }
    li {
        list-style: none;
    }
`;