import styled from "styled-components";

export const ForgetContainer = styled.div`
    color: #ffff;
    display: grid;
    place-items: center;
    height: calc(100vh - 90px);
    padding: 15vh 0;
    section{
        max-width: 40%;
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.5rem;
        }
        form{
            margin-top: 4rem;
            display: flex;
            gap: 7rem;
            input{
                padding: .2rem .7rem;
                border: none;
                outline: none;
                border-radius: 5px;
                font-size: 1.6rem;
            }
            button{
                border-radius: 8px;
                padding: .2rem 2rem;
                background-color: #E13763;
                font-size: 1.6rem;
                font-weight: 500;
                color: #FFFF;    
                outline: none;
                border: none;            
            }
        }
    }
`;