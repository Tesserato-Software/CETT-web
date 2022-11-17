import styled from 'styled-components';

export const InputDiv = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: .5fr 1fr auto;
    header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        margin-bottom: 2rem;
        p {
            color: #fff;
            text-align: center;
            margin-top: 2rem;
            strong {
                margin-right: 0.5rem;
                font-size: 1.2rem;
            }
        }
        button {
            width: fit-content;
            height: fit-content;
            outline: none;
            border: none;
            background-color: #E13763;
            padding: 1rem 2rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bolder;
            gap: 1rem;
            cursor: pointer;
            svg{
                font-size: 1.4rem;
            }
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    div.upload-input{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 55%;
        margin: 0 auto;
        footer{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 2rem;
            gap: 2rem;
            aside{
                text-align: center;
                color: #fff;
                width: 100%;
                button {
                    padding: 1rem 0;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    border-radius: 8px;
                    width: 100%;
                    background-color: #E13763;
                    font-weight: bolder;
                    color: #fff;
                    font-size: 1.2rem;
                    &:hover{
                        transform: scale(1.05);
                    }
                    &.sec{
                        background-color: #5E5E5E;
                        &:hover {
                            filter: brightness(0.9);
                        }
                    }
                    &:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
    div.errors {
        width: 90%;
        margin: 0 auto;
        margin-top: 2rem;
        color: #fff;
        div.titles {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: baseline;
            column-gap: 1rem;
            padding: .4rem 1rem 0 .4rem;
            border-bottom: 1px solid #fff;
            span{
                font-size: 1.1rem;
                opacity: .8;
            }
        }
        ul.ul-errors{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            ul.line{
                margin-left: 2rem;
            }
        }
    }
`;