import styled from "styled-components";

export const EgressDiv = styled.div`
    color: #ffff;
    .one {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    th {
        padding: 10px;
    }

    .first-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .div-first-table {
        margin: 5px auto;
        width: 10%;
        padding: 2rem 4rem;
        display: flex;
        justify-content: center;
        gap: 20px;
        background: radial-gradient(
                97.66% 97.66% at 50% 2.34%,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 100%
            ),
            radial-gradient(
                    97.57% 210.75% at 0.9% 2.98%,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0) 100%
                )
                /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(21px);
        border-radius: 10px;
    }
    .first-table {
        border-radius: 8px;
        width: 50%;
        text-align: center;
    }

    .btn {
        display: flex;
        justify-content: center;
        gap: 15px;
    }
    button {
        width: 10.5rem;
        height: 2.6rem;
        border-radius: 8px;
        padding: 10px;
        background-color: #e13763;
        font-size: 1rem;
        font-weight: 500;
        color: #ffff;
        cursor: pointer;
        border: none;
    }
    .second-container {
        margin: 5px auto;
        width: 70%;
        padding: 2rem 4rem;
        display: flex;
        justify-content: center;
        gap: 20px;
        background: radial-gradient(
                97.66% 97.66% at 50% 2.34%,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 100%
            ),
            radial-gradient(
                    97.57% 210.75% at 0.9% 2.98%,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0) 100%
                )
                /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(21px);

        border-radius: 10px;
    }
    .second-table {
        border-radius: 8px;
        width: 100%;
        text-align: center;
    }
`;
