import styled from "styled-components";

export const ListSchoolContainer = styled.div`
.lista {
    box-sizing: border-box;
    position: absolute;
    width: 1374px;
    height: 550px;
    left: 30px;
    top: 30px;
    background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(21px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 25px;
    margin-top: 150px;
}

.text {
    margin-left: 40px;
    margin-top: 35px;
    border-radius: 10px;
    padding: 5px;
}

.titulo {
    display: inline;
    margin-left: 20%;
    color: white;
    font-size: 20px;
}

.borda_titulo {
    border-bottom: 1px solid #999999;
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;
    padding: 10px;
}

.dados {
    background: lightgray;
    border-radius: 5px;
    margin: 15px;
    padding: 10px;
}

span {
    color: black;
    margin-left: 300px;
    font-size: 15px;
}
`

