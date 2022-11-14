import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin : 0 auto;
    flex-direction: column;
    


    .div-container-egress {
        margin-top: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        width: 110vh;
        align-items: center;
        possition: absolute;

        .div-head {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            gap: 15rem;
            border-bottom: 3px  solid #d9d9d9 ;
            Color: #fff;
            max-width: 100%;
        }
    }
    .archive {
       
        box-sizing: border-box;
        border-radius: 15px;
        background-color: #00476f;
        width: 33rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        height: 25rem;
        max-height: 100%;
        
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
            background: #fff;
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
        margin-top: 5rem;
        margin-bottom: 5rem;
        gap: 2rem;

            .voltar{
                color: #fff;
                background-color: #344458;
                border: solid 1px black;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                &:hover{
                    background-color: black;
                    border: solid 1px #344458;
                }
                &:active{
                    background-color: black;
                    border: solid 1px #344458;
                }


            }
          

            button {
                width: 250px;
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
