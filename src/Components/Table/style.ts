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
            grid-template-columns: ${({ customGrid, columnsQtd }) => {
                if (customGrid) {
                    return customGrid.map((col) => `${col}fr`).join(' ');
                }
                return `.3fr ${Array.from({length: columnsQtd - 1}, _ => '1fr').join(' ')}`;
            }};
            font-weight: bolder;
            font-size: 1.5rem;
            border-bottom: 3px solid rgba(225, 225, 225, 1);
            margin-bottom: 1rem;
            span {
                padding: 0 .5rem;
            }
        }
        div.grid {
            display: grid;
            grid-template-columns: ${({ customGrid, columnsQtd }) => {
                if (customGrid) {
                    return customGrid.map((col) => `${col}fr`).join(' ');
                }
                return `.3fr ${Array.from({length: columnsQtd - 1}, _ => '1fr').join(' ')}`;
            }};
            span {
                transition: all .2s ease-in-out;
                padding: 7px .5rem;
                border-bottom: 1px solid rgba(225, 225, 225, .2);
                &:hover {
                    background-color: rgba(225, 225, 225, .2);
                    border-bottom: 1px solid rgba(225, 225, 225, .3);
                }
            }
        }
    }
`;