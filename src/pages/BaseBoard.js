import { styled } from "styled-components"
import loveWhite from "../styles/images/love_black.svg";
import loveBlack from "../styles/images/love_white.svg";
import { useContext } from "react";
import ToggleContext from "../contexts/ToggleContext";
import EmailContext from "../contexts/EmailContext";

export default function BaseBoard() { 
    const { toggleLight } = useContext(ToggleContext);
    const { setEmailPopUp } = useContext(EmailContext);

    return(
        <Container toggleLight={toggleLight}>
            <Impact>
                <img src={toggleLight ? loveWhite : loveBlack} />  
                <Phrases toggleLight={toggleLight}>
                    <span>FAÇA O QUE VOCÊ AMA!!</span>
                    <p>Muito obrigado pela visita :)</p>
                    <p>Qualquer dúvida, suguestão ou proposta, só me mandar em uma das minhas redes sociais que estão nas tags do titulo ou embaixo dessa mensagem</p>
                </Phrases>
            </Impact>
            <Tags toggleLight={toggleLight}> 
                <span onClick={() => window.open('https://wa.me/5532988002451?text=Vim+pelo+seu+site%21+Queria+bater+um+papo+com+voc%C3%AA%21','_blank')}>WhatsApp</span>
                <span onClick={() => setEmailPopUp(true)}>Gmail</span>
                <span onClick={() => window.open('https://www.linkedin.com/in/lucas-martins-oliveir/', '_blank')}>LinkedIn</span>
                <span onClick={() => window.open('https://github.com/lucasmartinso', '_blank')}>GitHub</span>
            </Tags>
            <a>Copyrights © Lucas Martins Oliveira 2024</a>
        </Container>
    )
}

const Container = styled.div`
    margin-left: -30px;
    margin-right: -30px;
    width: calc(100% + 60px);
    height: 500px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.toggleLight ? "black": "#FAF8F1"};
    border-top: 10px solid gray; 
    transition: 1s;

    a { 
        color: ${props => props.toggleLight ? ("white") : ("black")};
        margin-bottom: 10px;
    }
`
const Impact = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex; 
    align-items: center;
    justify-content: space-around;

    img { 
        width: 200px; 
        height: 400px;
    }
`
const Phrases = styled.div`
    width: 50%; 
    color: ${props => props.toggleLight ? ("white") : ("black")};

    span { 
        font-family: "Syne", sans-serif;
        font-weight: bold;
        font-size: 35px;        
    }

    p { 
        margin-top: 20px; 
    }
`
const Tags = styled.div`
    width: 100%; 
    height: 50%; 
    display: flex; 
    justify-content: space-around;
    color: ${props => props.toggleLight ? ("white") : ("black")};
    
    span { 
        opacity: ${props => props.toggleLight ? "0.5" : "0.2"};
        transition: 1s;
        font-size: 17px;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            opacity: 1;
            font-weight: bold;
        }
    }
`