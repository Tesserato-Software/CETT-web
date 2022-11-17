import styled, { css } from "styled-components";

export const Box = styled.div`
	padding: 1rem;
	background-color: rgba(225, 225, 225, 0.1);
	border-radius: 15px;
	border: 2px solid rgba(225, 225, 225, 0.8);
	color: #fff;
	width: 100%;
	label.the-label {
		font-size: 1.4rem;
		flex: 0 0 100%;
		max-width: 100%;
		padding-left: 10px;
		padding-bottom: 5px;

		& span.optional {
			font-size: 1.1rem;
			font-style: italic;
			padding-left: 10px;
		}
	}

	div.container-error {
		display: flex;
		align-items: center;
		padding-top: 0.8rem;
		padding-left: 0.8rem;

		span.error-msg {
			font-style: italic;
			font-size: 1.2rem;
			margin-left: 0.4rem;
		}

		i {
			font-size: 1.1rem;
		}
	}
`;

export const FileContainer = styled.div`
	min-height: 17rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 1rem;
	input.the-input {
		position: absolute;
		left: 0;
		right: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	/* INPUT PADRÃO ANTES DE QUALQUER AÇÃO */
	div.basic_input {
		display: flex;
		align-items: center;
		flex-direction: column;

		gap: 8px;
		i {
			font-size: 5.2rem;
			padding: 0px 20px 0px 0px;
		}
		div.text_box {
			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 1rem;

			h1.title {
				font-size: 2rem;
			}
		}
		span {
			text-align: center;
			max-width: 85%;
			text-align: center;
			font-size: 1.4rem;
			line-height: 1.8rem;
		}
	}
	/* CARD DO FILE UPLOADED */
	div.uploaded_card {
		display: grid;
		grid-template-columns: 1fr 3.3rem 3.3rem;
		gap: 1rem;
		width: 100%;
		min-width: 100%;
		place-items: center;
		section {
			display: flex;
			align-items: center;
			margin: 0;
			min-width: 100%;
			span {
				font-family: "Helvetica";
				font-size: 1.5rem;
			}
		}
		i.icon-file {
			font-size: 1.9rem;
		}
		h5.file_name {
			font-size: 1.5rem;
			line-height: 2rem;
			cursor: pointer;
			margin-left: 1rem;
			width: 100%;
			word-break: break-all;
		}

        button{
            border: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            border-radius: 8px;
            &:hover{
                transform: scale(1.05);
            }
        }

		button.btn-download {
			height: 3.3rem;
			width: 3.3rem;
			display: grid;
			place-items: center;
			font-size: 1.4rem;
            background-color: #0062d9;
			&:hover {
				filter: brightness(0.9);
			}
		}

		button.btn-delete {
			height: 3.3rem;
			width: 3.3rem;
			display: grid;
			place-items: center;
			font-size: 1.4rem;
            background-color: #E13763;

			&:hover {
				filter: brightness(0.9);
			}
		}

		svg {
			color: #ffffff;
			font-size: 1.4rem;
		}
	}
	/* ERROR ALERT */
	div.error_modal {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		place-items: center;
		div.error_modal_content {
			display: flex;
			flex-direction: row;
			place-items: center;
			justify-content: center;
			margin-bottom: 10px;
			i {
				font-size: 4rem;
				padding: 0px 20px 0px 0px;
			}
			div.error_modal_texts {
				display: flex;
				flex-direction: column !important;
				place-items: center;
				text-align: left;
				width: 50%;
				h1.title {
					width: 100%;
					font-size: 1.6rem;
					line-height: 2.5rem;
				}
				p.subtitle {
					font-size: 1.2rem;
				}
			}
		}
		button {
			padding: 0.6rem 2rem;
			width: 80%;
			border-radius: 10px;
			transition: all 0.3s ease-in-out;
			&:hover {
			}
		}
	}
`;
