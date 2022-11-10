import styled from "styled-components";

export const AttachDiv = styled.div`
    display: flex;
    flex-direction: center;
    gap: 20%;
    justify-content: space-between;;
    margin: 0 auto;
    padding-top: 15%;
   

    .div-container-egress {

        .container{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            padding-top: 5%;
            width: 100%;
        }

        display: flex;
        flex-direction: column;
        background: radial-gradient(
                97.66% 97.66% at 50% -42.18%,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 100%
            ),
            radial-gradient(
                97.57% 210.75% at 0.9% -41.54%,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0) 100%
            );

            box-sizing: border-box;
            border-radius: 25px;
            padding: 2rem;
            width: 110vh;
            margin-left: 3%;
            height: 30vh;
            
            

        .div-head {
            flex-direction: row;
            display: flex;
            alignitems: center;
            gap: 10rem;
            margin-bottom: 1rem;
            margin-left: 1rem;

            span {
                display: flex;
                flex-direction: row;
                font-size: 25px;
                color: #fff;
                justify-content: space-around;
                
                
            }
            .CGM {
                margin-left: 42vh;
            }
               
        }

        .view-egress {
            display: flex;
            background-color: #e7e7e7;
            border-radius: 8px;
            padding: 1rem;
            gap: 7rem;
            margin: 0 auto;
            align-items: center;
            max-width: 100%;

            span{
                font-size: 18px;

            }
            .CGM{
                margin-left: 28vh;
            }
            
        }

    }
    .archive{
        box-sizing: border-box;
        border-radius: 15px;
        background-color: #00476F;
        margin-right: 3%;
        width: 55vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        
        strong{
            font-size: 25px;
            color: #fff;
            margin-top: 1rem;
            margin-bottom: 1rem;
           
            
        }
        .archive-option{
            display: flex;
            magrgin: 0 auto;
            gap: 15rem;
            border-bottom: solid 1px #fff;
            

        }
        span{
            font-size: 23px;
            color: #fff;
        }
        .data-archive{
            margin-top: 1rem;
            display: flex;
            background-color: #fff;
            border-radius: 8px;
            padding: 0.3rem;
            gap: 24rem;
            justify-content: space-around;
            span{
                color: #000;
                margin-left: 1rem;
            }
            input{
                margin-right: 1rem;
            }
            

        }
    }

    
`;
