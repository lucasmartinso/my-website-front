import { styled } from "styled-components";
import whiteLogo from "../styles/images/logo_white.svg";
import blackLogo from "../styles/images/logo_black.svg";
import ToggleContext from "../contexts/ToggleContext";
import { useContext } from "react";
import EmailContext from "../contexts/EmailContext";
import { useNavigate } from "react-router-dom";

export default function Tittle() { 
    const { toggleLight } = useContext(ToggleContext); 
    const { setEmailPopUp } = useContext(EmailContext);
    const navigate = useNavigate();

    return( 
        <Container toggleLight={toggleLight}>
            <img src={toggleLight ? whiteLogo : blackLogo} alt="logo" onClick={() => navigate("/hello")}/>
            <Guide toggleLight={toggleLight}>
                <a href="#history" onClick={() => navigate("/hello")}>Sobre</a>
                <a href="#portfolio" onClick={() => navigate("/hello")}>Portifólio</a>
                <a id="block">Blog</a>
            </Guide>
            <Tags toggleLight={toggleLight}>
                <div id="zap" onClick={() => window.open('https://wa.me/5532988002451?text=Vim+pelo+seu+site%21+Queria+bater+um+papo+com+voc%C3%AA%21','_blank')}><ion-icon name="logo-whatsapp"></ion-icon></div>
                <div id="email" onClick={() => setEmailPopUp(true)}><ion-icon name="logo-google"></ion-icon></div>
                <div id="linkedin" onClick={() => window.open('https://www.linkedin.com/in/lucas-martins-oliveir/', '_blank')}><ion-icon name="logo-linkedin"></ion-icon></div>
                <div id="github" toggleLight={toggleLight} onClick={() => window.open('https://github.com/lucasmartinso', '_blank')}><ion-icon name="logo-github"></ion-icon></div>
            </Tags>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 80px; 
    background-color: ${props => props.toggleLight ? ("black"): ("#FEF5E3")};
    position: fixed; 
    left: 0; 
    top: 0;
    z-index: 2;
    border-radius: 0px 0px 8px 8px;
    display: flex; 
    justify-content: space-between;
    padding: 0px 20px;
    transition: 1s;
    box-shadow: ${props => props.toggleLight ? 
        ("rgba(191, 191, 191, 0.8) 0px 2px 4px, rgba(191, 191, 191, 0.6) 0px 7px 13px -3px, rgba(191, 191, 191, 0.4) 0px -3px 0px inset"): 
        ("rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")};
    
    img { 
        &:hover { 
            cursor: pointer;
        }
    }

    @media (max-width: 700px) { 
        padding: 0px;
    }
`
const Guide = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;

    a { 
        font-family: "Syne", sans-serif;
        color: ${props => props.toggleLight ? ("white") : ("black")};
        margin-left: 15px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        transition: 2s;
        position: relative;

        &:hover,
        &:focus { 
            cursor: pointer;
        }

        &:hover::after, 
        &:focus::after {  
            transform: scaleX(1); 
            transform-origin: bottom left;
        }

        &::after { 
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background: currentColor;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 2s linear; 
        }
    } 

    a#block { 
        transiton: 1s;

        &:hover, 
        &:focus { 
            opacity: ${props => props.toggleLight ? ("0.3") : ("0.05")};
            cursor:not-allowed;
        }
        
    }

    @media (max-width: 700px) { 
        a { 
            font-size: 19px;
            margin-left: 8px;
        }
    }

    @media (max-width: 500px) { 
        a { 
            font-size: 17px;
        }
    }
`
const Tags = styled.div`
    height: 100%; 
    display: flex; 
    align-items: center;

    div { 
        height: 60%; 
        width: 30px;
        display: flex; 
        align-items: center; 
        justify-content: center;
        transition: transform 2s;
        transform-style: preserve-3d;
        margin-right: 5px;
        border-radius: 4px;
        box-shadow: ${props => props.toggleLight ? 
            ("rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px") : 
            ("rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px")};

        ion-icon { 
            width: 20px; 
            height: 20px;
            color: white;
            transition: 0.3s;
        }

        &:hover, 
        &:focus { 
            cursor: pointer;

            ion-icon { 
                transform: rotateX(360deg);
            }
        }
    }

    div#zap { 
        background-color: #67C260;
    }

    div#email { 
        background-color: #EA4635;
    }

    div#linkedin { 
        background-color: #0B66C2;
    }

    div#github { 
        background-color: #010409;
        //box-shadow: ${props => props.toggleLight ? ("rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px") : ("rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px")};
    } 

    @media (max-width: 500px) { 
        margin-left: 7px;

        div { 
            width: 23px;

            ion-icon { 
                width: 17px; 
                height: 17px;
            }
        }
    }
`