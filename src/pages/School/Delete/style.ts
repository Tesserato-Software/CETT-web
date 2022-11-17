import styled from "styled-components";

export const DeleteSchoolContainer = styled.div`
display:grid;
place-items:center;
padding: 20vh 0;
height: calc(100vh - 90px);

.titulo {
    color: white;
    font-size: 30px;
}

aside{
    margin-top: 2rem;
    width: 40%;
    min-width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .button{
        text-decoration: none;
        text-align: center;
        margin: 0 1rem;
        background-color: #b3b3b3;
        color: #000;
        border: none;
        outline: none;
        padding: .4rem 1rem;
        font-size: 1.5rem;
        width: 100%;
        min-width: 300px;
        border-radius: 8px;
        cursor: pointer;
        &.confirm {
            background-color: #e13763;
            color: #fff;
        }
    }
    
    button{
        margin: 0 1rem;
        background-color: #e13763;
        color: #000;
        border: none;
        outline: none;
        padding: .4rem 1rem;
        font-size: 1.5rem;
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
`