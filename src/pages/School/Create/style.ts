import styled from "styled-components";

export const CreateSchoolContainer = styled.div`
display:grid;
place-items:center;
padding: 20vh 0;

.titulo {
    color: white;
    font-size: 30px;
}

.texto {
    padding: 10px;
    width: 400px;
    border-radius: 8px;
}

.botoes {
    display: flex;
    padding: 10px;
}

.button {
    text-decoration: none;
    color: #000000;
    margin-top: 10px;
    padding: 7px 60px;
    background: #E13763;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}

button {
    color: #000000;
    margin-top: 10px;
    margin-left: 30px;
    padding: 10px 50px;
    background: #E13763;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}
`