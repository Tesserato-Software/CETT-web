import styled from "styled-components"

export const AttachContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1rem;
`;

export const UserSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    background-color: #D9D9D950;
    color: #fff;
    padding: 1rem;
    margin-bottom: 0.3rem;
    border-radius: 0.5rem;
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
        padding: .3rem;
        border-radius: 0.2rem;
    }
    a:hover {
        background-color: #ff0030;
        color: #fff;
    }
    li {
        list-style: none;
        padding: 0.3rem;
        margin: 0.3rem;
    }
    h1 {
        font-size: 1.5rem;
        color: #dfdfdf;
    }

`;