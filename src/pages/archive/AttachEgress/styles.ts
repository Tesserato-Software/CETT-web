import styled from 'styled-components';

export const EgressDiv = styled.div` 
	.container{
		display:flex;
		flex-direction: row;
		justify-content: space-around
		
	}
	th,td{
		padding: 5px 10px;
	}
	td{
		text-align:center;
	}
	span{
		text-align:center;
	}
	button{
		width: 10.5rem;
		height: 2.6rem;
		border-radius: 8px;
		padding:10px;
		background-color: #E13763;
		font-size: 1rem;
		font-weight: 500;
		color: #FFFF;
	}

	.btn{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}
	.list-student{	
		margin 10px 10px;
		width: 80%;
		height: 100%;
		display: flex;
		justify-content:space-around; 
		background: radial-gradient(97.66% 97.66% at 50% 2.34%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
		filter: drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.25));
		backdrop-filter: blur(21px);
		border-radius: 20px;
	}
`;