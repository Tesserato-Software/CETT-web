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
        margin-bottom: 20px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 20px;
        aside{
            display: flex;
            gap: 10px;
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
        }
        div.grid {
            display: grid;
            grid-template-columns: ${({ customGrid, columnsQtd }) => {
                if (customGrid) {
                    return customGrid.map((col) => `${col}fr`).join(' ');
                }
                return `.3fr ${Array.from({length: columnsQtd - 1}, _ => '1fr').join(' ')}`;
            }};
        }
    }
`;