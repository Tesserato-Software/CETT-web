import styled from "styled-components";

export const TableContainer = styled.section<{
    customGrid?: number[]
    columnsQtd: number
}>`
    width: 100%;
    height: 100%;
    header{}
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