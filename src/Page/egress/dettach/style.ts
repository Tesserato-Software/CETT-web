import styled from "styled-components";


export const DetachArchiveDiv = styled.div`
    .container {
        jusify-content: center;
        align-items: center;
        margin-top: 15%;
    }
    .cotainer-egress {
        display: flex;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        background: radial-gradient(
                97.66% 97.66% at 50% -42.18%,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 100%
            ),
            radial-gradient(
                    97.57% 210.75% at 0.9% -41.54%,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0) 100%
                )
                /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(21px);
        border-radius: 25px;
        width: 180vh;
        height: 20vh;

        .head-grid {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 5%;
            gap: 180%;
            position: absolute;
            margin-top: 3%;

			span{
				font-size: 1.5rem;
				color:#fff
				
			}
			.CGM{
				margin-left: 18%;
			}

        }
        .data-grid {
            margin-top: 6%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 21%;
            position: absolute;
			background: #e7e7e7;
            border-radius: 8px;
			height: 25%;
			width: 95%;
			padding: 1%;
			
			span{
				
				font-size: 1.1rem;
				font-weight: 500;
				
			}
			.CGM2{
				margin-right: 130px;
			}
        }

		
    }
	.div-button{
            display: flex;
            justify-content: center;
            margin-top: 10rem;

            
            
           button{
                width: 13%;
                height:60px;
                background-color:#E13763;
                font-weight: normal;
                color:#fff; 
                font-size: 20px;
                border: solid 1px #E13763;
                border-radius: 8px;
           }
        }
`;
