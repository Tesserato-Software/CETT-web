import styled from 'styled-components';

export const ListContainer = styled.section`
    padding: 4rem;
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
    section.egress-grid{
        width: 100%;
        color: #fff;
        header {
            width: 100%;
            display: grid;
            grid-template-columns: .2fr 1fr .2fr .2fr .4fr .7fr;
            gap: 5px;
            margin-bottom: 20px;
            font-weight: bolder;
            font-size: 1.6rem;
            span{
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        div.grid{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            div.row{
                display: grid;
                grid-template-columns: .2fr 1fr .2fr .2fr .4fr .7fr;
                span{
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
`;