import styled from "styled-components";

export const DetachArchiveDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    .div-container-egress {
        margin-top: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        width: 110vh;
        align-items: center;
        possition: absolute;

        .div-head {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            gap: 15rem;
            border-bottom: 3px solid #d9d9d9;
            color: #fff;
            max-width: 100%;
            background-color: ;
        }

        .archive-id {
            margin-top: 1.5rem;
            border: 2px solid #fff;
            padding: 1rem;
            border-radius: 15px;
            color: #ff0000;
            maxwidth: 340px%;
        }
    }

    .div-button {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        gap: 2rem;
    }

    .voltar {
        color: #fff;
        padding: 1rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 8px;
        width: 100%;
        background-color: #5e5e5e;
        font-weight: bolder;
        color: #fff;
        font-size: 1.2rem;
        &:hover {
            transform: scale(1.05);
        }
    }
    .desanexar {
        color: #fff;
        padding: 1rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 8px;
        width: 100%;
        background-color: #e13763;
        font-weight: bolder;
        color: #fff;
        font-size: 1.2rem;

        &:hover {
            transform: scale(1.05);
        }
    }
`;
