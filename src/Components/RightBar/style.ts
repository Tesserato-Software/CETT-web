import styled from 'styled-components';

export const RightContainer = styled.div<{
    isOpen: boolean;
}>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: all 0.5s cubic-bezier(0.75,-0.21, 0.35, 1.22);
    div.right-bar{
        width: 450px;
        height: 100vh;
        background-color: #0050B3;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        display: grid;
        grid-template-rows: 85px 1fr 65px;
        @media screen and (max-width: 800px){
            width: 100vw;
        }
        div.right-bar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
            border-bottom: 2px solid rgba(225, 225, 225, .7);
            img{ 
                width: 25px;
                object-fit: contain;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        div.right-bar-body {
            height: 100%;
            max-height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-right: .5rem;

            /* SCROLL */
            ::-webkit-scrollbar {
                width: 4px;
            }
            ::-webkit-scrollbar-track {
                background: rgba(225, 225, 225, .1);
                border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb {
                border-radius: 4px;
                background: rgba(225, 225, 225, .7);
            }
            ::-webkit-scrollbar-thumb:hover {
                background: rgba(225, 225, 225, 1);
            }
            div.right-bar-item{
                padding-bottom: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-bottom: 2px solid rgba(225, 225, 225, .1);
                margin-bottom: 1rem;
                div.right-bar-sub-items {
                    border-left: 3px solid rgba(225, 225, 225, .3);
                    padding-left: 1rem;
                    margin: .5rem .5rem .5rem .3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 1rem;
                        padding: .2rem 0;
                        transition: all .2s ease-in-out;
                        &:hover {
                            color: #fff;
                            text-decoration: underline;
                            transform: scale(1.02);
                        }
                    }
                }
            }
        }
        div.right-bar-footer {
            display: grid;
            place-items: center;
            button {
                background-color: #fff;
                color: #0050B3;
                border: none;
                padding: .5rem 1rem;
                border-radius: 4px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all .2s ease-in-out;
                border: 1px solid #ffffff00;
                display: flex;
                align-items: center;
                gap: .7rem;
                svg {
                    font-size: .7rem;
                }
                &:hover {
                    background-color: #0050B3;
                    color: #fff;
                    border: 2px solid #fff;
                    transform: scale(1.05);
                }
            }
        }
    }
`;