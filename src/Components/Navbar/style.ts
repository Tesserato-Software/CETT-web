import styled from 'styled-components';

export const CustomDiv = styled.div`
    height: 80px;
    padding: .3rem .2rem;
    background-color: #0062D9;
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    place-items: center;
    color: #fff;
    img{
        width: 50px;
        object-fit: contain;
        transition: all .2s ease-in-out;
    }
    img:hover{
        transform: scale(1.04);
    }
    h1{
        color: #fff;
    }
    svg{
        cursor: pointer;
        transform: scale(2);
    }
`;