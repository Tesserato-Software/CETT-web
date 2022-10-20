import styled from 'styled-components';

export const CustomDiv = styled.div`
    width: 100vw;
    height: 80px;
    padding: .3rem .2rem;
    background-color: #00408E;
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    place-items: center;
    color: #fff;
    img{
        width: 50px;
        object-fit: contain;
    }
    h1{
        color: #fff;
    }
    svg{
        transform: scale(2);
    }
`;