import styled from 'styled-components';

export const DeleteArchiveContainer = styled.div`
    display: grid;
    place-items: center;
    height: calc(100vh - 90px);
    width: 100%;
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        h1{
            text-align: center;
            color: #fff;
            font-size: 2rem;
        }
        aside{
            width: 40%;
            min-width: fit-content;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            aside.Link{
                
            }
            button, a{
                text-align: center;
                text-decoration: none;
                margin: 0 1rem;
                background-color: #b3b3b3;
                color: #000; 
                border: none;
                outline: none;
                padding: .8rem 1rem;
                font-size: 1.7rem;
                width: 100%;
                min-width: 300px;
                border-radius: 8px;
                cursor: pointer;
                &.confirm {
                    background-color: #e13763;
                    color: #fff;
                }
            }
        }   
    }
`;