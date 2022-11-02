import styled from 'styled-components';



export const ArchiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: 1.5rem;
        font-weight: 500;
        color: #FFFF;
        margin-top: 3rem;
        justify-content: center;
        display: flex;
    }


    .container{
        display: flex;
        justify-content: space-around;
        margin-top: 6rem;
    }
    .lista-aluno{	
        width: 30rem;
        height: 30rem;
        display: flex;
        justify-content: space-around;
        background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(21px);
        border-radius: 20px;
    }
    table{
        width: 100%;
    }
  
    .cabeca-aluno{	
     display: flex;

    }

    tr{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 3rem;
     
    }
    
    .aluno {
        margin-right: 3rem;
        
    }
        
    .list-archive{
        width: 30rem;
        height: 30rem;
        background-color: #00476F;
        display: flex;
        justify-content: space-around;
        border-radius: 20px;


    }
    button{
        width: 10.5rem;
        height: 2.6rem;
        border-radius: 8px;
        background-color: #E13763;
        color: #FFFF;
        font-weight: 500;
        font-size: 1rem;
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    } 
`;
