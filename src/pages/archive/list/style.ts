import styled from "styled-components";

export const ListArchiveContainer = styled.div`
     * {
      margin: 0;
      padding: 0;
    }
    .conteudo {
        overflow-y: scroll;
        width: 585px;
        height: 619px;
        margin: 100px 620px;
        background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(21px);
        border-radius: 25px;
        color: #FFFFFF;
        border-radius: 10px;
        a {
              color: #fff;
              text-decoration: none;
               display: flex;
               border-bottom: 1px solid #000;
               justify-content: space-between;
               align-items: center;
               margin: .2rem 1.5rem .2rem 1.5rem;
               h2 {
                    width: 65%;
                    margin-top: 2rem;
               }
        }
     }
       
`;