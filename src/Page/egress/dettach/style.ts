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
        }

        .archive-id {
            margin-top: 1.5rem;
            border: 3px solid #fff;
            padding: 1rem;
            border-radius: 15px;
            color: #ff0000;
            maxwidth: 340px%;
        }
    }

    .div-button {
        display: flex;
        justify-content: center;
        margin : 0 auto;

        .voltar {
            color: #fff;
            background-color: #344458;
            border: solid 1px black;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                background-color: black;
                border: solid 1px #344458;
            }
            &:active {
                background-color: black;
                border: solid 1px #344458;
            }
        }
        button {
            margin-left: 2rem;
            width: 180px;
            height: 60px;
            background-color: #e13763;
            font-weight: normal;
            color: #fff;
            font-size: 20px;
            border: solid 1px #e13763;
            border-radius: 8px;

            &:hover {
                color: #fff;
                background-color: #e137;
                border: solid 1px #e13763;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
            }
        }
    }
`;
