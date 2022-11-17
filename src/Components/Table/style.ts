import styled from "styled-components";

export const TableContainer = styled.section<{
    customGrid?: number[]
    columnsQtd: number
}>`
    width: 100%;
    height: 100%;
    color: #fff;
    header.root-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;
        aside{
            display: flex;
            gap: 1.2rem;
            div{
                display: flex;
                flex-direction: column;
                gap: 3px;
                label {
                    opacity: .8;
                    font-size: .9rem;
                    font-weight: bolder;
                }
                input, select{
                    width: 200px;
                    outline: none;
                    border: 2px solid rgba(0, 0, 0, .2);
                    border-radius: 5px;
                    padding: 5px;
                }
            }
        }
    }
    section.table-grid{
        header.grid-header {
            display: grid;
            grid-template-columns: 1fr auto;
            width: 100%;
            border-bottom: 3px solid rgba(225, 225, 225, 1);
            margin-bottom: 1rem;
            aside.columns{
                display: grid;
                grid-template-columns: ${({ customGrid, columnsQtd }) => {
                    if (customGrid) {
                        return customGrid.map((col) => `${col}fr`).join(' ');
                    }
                    return `.3fr ${Array.from({length: columnsQtd - 1}, _ => '1fr').join(' ')}`;
                }};
                font-weight: bolder;
                font-size: 1.5rem;
                span {
                    padding: 0 .5rem;
                }
            }
            aside.actions{
                font-weight: bolder;
                font-size: 1.5rem;
                span {
                    padding: 0 .5rem;
                }
            }
        }
        div.grid {
            div.pre-row{
                display: grid;
                grid-template-columns: 1fr auto;
                width: 100%;
                border-bottom: 1px solid rgba(225, 225, 225, .2);
            }
            div.row {
                width: 100%;
                display: grid;
                grid-template-columns: ${({ customGrid, columnsQtd }) => {
                    if (customGrid) {
                        return customGrid.map((col) => `${col}fr`).join(' ');
                    }
                    return `.3fr ${Array.from({length: columnsQtd - 1}, _ => '1fr').join(' ')}`;
                }};
                span {
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all .2s ease-in-out;
                    padding: 7px .5rem;
                    &:hover {
                        background-color: rgba(225, 225, 225, .2);
                    }
                }
            }
            div.actions {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 1rem;
                margin-left: 1rem;
                button {
                    background-color: #E13763;
                    border: none;
                    border-radius: 5px;
                    height: 30px;
                    width: 30px;
                    color: #fff;
                    font-weight: bolder;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    display: grid;
                    place-items: center;
                    svg{
                        font-size: 1rem;
                    }
                    &:hover {
                        opacity: .8;
                        transform: scale(1.05);
                    }
                }
            }
        }
    }
`;