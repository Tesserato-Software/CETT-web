import styled from "styled-components";

export const RadioButton = styled.input.attrs({ type: "radio" })`
  
    background-color:#00476f ;
    border:1px solid #d9d9d9;

  
`;

export const AttachDiv = styled.div`
    .data-archive {
        max-width: 400px;
        min-width: 220px;
        margin-botton: 0.5rem;
        margin-top: 1rem;
        display: flex;
        background-color: #fff;
        border-radius: 8px;
        padding: 0.2rem;
        gap: 20rem;
        justify-content: space-around;
        span {
            color: #000;
            margin-left: 1rem;
        }
        input {
            margin-right: 1rem;
            width: 100%;
            baccground-color: #00476f;
        }

        span {
            font-size: 1.3rem;
            font-weight: 600;
            color: black;
        }
    }
`;
