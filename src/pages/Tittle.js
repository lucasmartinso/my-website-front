import { styled } from "styled-components";
import whiteLogo from "../styles/images/logo_white.svg";
import blackLogo from "../styles/images/logo_black.svg";
import ToggleContext from "../contexts/ToggleContext";
import { useContext } from "react";

export default function Tittle() { 
    const { toggleLight } = useContext(ToggleContext); 

    return( 
        <Container>
            <img src={toggleLight ? whiteLogo : blackLogo} alt="logo" />
            <Guide toggleLight={toggleLight}>
                <span>Sobre</span>
                <span>Portifólio</span>
                <span id="block">Blog</span>
            </Guide>
            <Tags>
                <Tag><ion-icon name="logo-whatsapp"></ion-icon></Tag>
                <Tag><ion-icon name="logo-google"></ion-icon></Tag>
                <Tag><ion-icon name="logo-linkedin"></ion-icon></Tag>
                <Tag><ion-icon name="logo-github"></ion-icon></Tag>
            </Tags>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 80px; 
    background-color: black;
    position: fixed; 
    left: 0; 
    top: 0;
    z-index: 2;
    border-radius: 0px 0px 8px 8px;
    display: flex; 
    justify-content: space-between;
    padding: 0px 20px;
`
const Guide = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;

    span { 
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
            transform: scaleX(1); /* Mostra o sublinhado ao hover/focus */
            transform-origin: bottom left; /* Define a origem da transformação */
        }

        &::after { 
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px; /* Ajusta a posição do sublinhado */
            width: 100%;
            height: 2px; /* Espessura do sublinhado */
            background: currentColor; /* Usa a cor atual do link */
            transform: scaleX(0); /* Esconde o sublinhado inicialmente */
            transform-origin: bottom right; /* Define a origem da transformação */
            transition: transform 2s linear; /* Aplica a transição */
        }
    } 

    span#block { 
        transiton: 1s;

        &:hover, 
        &:focus { 
            opacity: 0.3;
            cursor:not-allowed;
        }
        
    }
`
const Tags = styled.div`
    height: 100%; 
    display: flex; 
    align-items: center
`
const Tag = styled.div`
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;

    ion-icon { 
        color: white;
        background-color: orange;
    }
`