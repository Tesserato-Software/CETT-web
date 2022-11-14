import styled from "styled-components";

export const Container = styled.div`
    .container-all {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        max-width: 960px;
        padding: 0 15px;
    }
    

    .div-container-egress {

        margin-top: 5rem;

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
        
            margin-left: 1rem;
            font-size: 1.5rem;
            color : #fff;
            width: 100%;
            height: 10vh;


            .CGM {
                magin : 0;
                margin-top: 3rem;
                margin-left: 30vh;
                max-width: 20rem;
            }
            .NOME{
                margin-top: 3rem;
                max-width: 20rem;

            }
            .ID{
                margin-top: 3rem;
                max-width: 20rem;
            }
            
        }

        .view-egress {
            display: flex;
            background-color: #e7e7e7;
            border-radius: 8px;
            padding: 2rem;
            width: 100%;
            height: 40px;
            align-items: center;
            max-width: 960px;
            margin-top: 3%;

            .cgm-egress {
                margin : 0 auto;
                position: absolute;
                margin-left: 72vh;
                max-width: 20rem;
                
                
            }
            .id-egress {
                position: absolute;
                max-width: 20rem;
            }
            .name-egress {
                margin-left: 8rem;
                position: absolute;
                max-width: 20rem;
            }
        }
    }
    .archive {
        margin-top: 3rem;
        box-sizing: border-box;
        border-radius: 15px;
        background-color: #00476f;
        width: 70vh;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        height: 45vh;
        //scrol bar style
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #00476f;
            border-radius: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background:#fff;
            border-radius: 30px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #fff;
        }

        strong {
            font-size: 25px;
            color: #fff;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .archive-option {
            display: flex;
            magrgin: 0 auto;
            gap: 20rem;
            border-bottom: solid 1px #fff;
        }
        span {
            font-size: 23px;
            

        }
        
        .span-archive {
            color: #fff;
            margin-bottom: 1rem;
        }
    }

    .container-button {
        display: flex;
        justify-content: center;
        margin-top: 10rem;
        margin-bottom: 5rem;
        

        button {
            width: 10%;
            height: 60px;
            background-color: #e13763;
            font-weight: normal;
            color: #fff;
            font-size: 20px;
            border: solid 1px #e13763;
            border-radius: 8px;
            cursor: pointer;
            max-width: 100%;

            &:hover {
                color: #fff;
                background-color: #e137;
                border: solid 1px #e13763;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
            }
        }
    }
`;
