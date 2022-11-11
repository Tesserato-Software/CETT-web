import styled from 'styled-components';

export const InputDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    width: 60%;
    background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(21px);
    border-radius: 25px;
    border: 5px solid rgba(255, 255, 255, 0.09);

    .input-archive {
        text-align: center;
        padding: 5rem;
        border-radius: 25px;
    }

    .div-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
        filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(21px);
        border-radius: 25px;
    }

    .input {
        width: 19rem;
        height: 2rem;
        margin-top: 2rem;
    }

    button {
        background: #E13763;
        border-radius: 8px;
        border: none;
        width: 10rem;
        height: 2rem;
        font-size: 1.3rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: #fff;
        cursor: pointer;
    }
`;