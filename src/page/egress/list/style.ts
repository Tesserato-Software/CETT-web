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
        header {
            width: 100%;
            display: grid;
            grid-template-columns: 70px 1rem 120px 40px .2fr 1fr;
        }
    }
`;