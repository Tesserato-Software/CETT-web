import styled from "styled-components";

export const LoginDiv = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    div.container {
        display: grid;
        place-items: center;
        grid-template-rows: 90px 1fr;
        background-color: #fff;
        width: 65%;
        min-width: 400px;
        min-height: 400px;
        height: 80%;
        background: radial-gradient(
                97.66% 97.66% at 50% 2.34%,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 100%
            ),
            radial-gradient(
                97.57% 210.75% at 0.9% 2.98%,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0) 100%
            );
        filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(8px);
        border-radius: 20px;
        h1 {
            align-self: center;
            color: #fff;
            font-size: 2rem;
            font-weight: 500;
        }
        section {
            display: grid;
            place-items: center;
            grid-template-rows: 1fr 1fr 0.5fr;
            height: 100%;
            width: 100%;
            .form-group {
                display: flex;
                flex-direction: column;
                color: #fff;
                width: 70%;
                /* padding: 4rem 0; */
                &.first {
                    margin-top: 10%;
                }
                &.last {
                    margin-bottom: 10%;
                }
                input {
                    width: 100%;
                    height: 2.5rem;
                    border-radius: 5px;
                    border: none;
                    padding-left: 1rem;
                    font-size: 1rem;
                }
            }
            .button-login {
                width: 10.5rem;
                height: 2.6rem;
                border-radius: 8px;
                background-color: #e13763;
                color: #fff;
                font-weight: 500;
                border: none;
            }
        }

        .div-image {
            width: 90%;
            height: 80%;
            

        }
    }
`;
