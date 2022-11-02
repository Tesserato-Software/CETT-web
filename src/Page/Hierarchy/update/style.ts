import styled from "styled-components"

export const CreateHierarchyContainer = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 20px;
        gap: 30px;
        aside{
            display: flex;
            gap: 10px;
        }   
        
        margin-left: 200px;
        margin-right: 200px;
        font-size: 18px
    }

    #checkBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }
    
    span {
        color: white;
    }

    #UInput {
        padding: 6px 200px 10px 10px;
    }

    .checks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .8rem; 
    }


    h1 {
        color: white;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 50px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        font-size: 25px;
        margin-top: 2rem;
        text-decoration: none;
        border-radius: 5px;
        border: none;
        padding: 5px;
        margin: 0 auto;

    }


    button:hover {
        cursor: pointer;
     
    }
    
    #inPut {
        width: 20px;
    }



`;
