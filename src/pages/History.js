import { styled } from "styled-components"
import foto1 from "../styles/images/foto1.png";
import foto2 from "../styles/images/foto2.jpeg";
import ToggleContext from "../contexts/ToggleContext";
import { useState, useEffect, useContext } from "react";

export default function History() { 
    const {toggleLight, setToggleLight} = useContext(ToggleContext);
    const texts = [
        "Sou Lucas...",
        "Desenvolvedor Full Stack, com experiência em desenvolvimento de aplicações web front-end e back-end.",
        "Atualmente estudante da UFJF no curso de Ciência da Computação.",
        "Apaixonado pelos estudos e pela resolução de problemas por meio da tecnologia, que tenham impacto efetivo na vida real."
    ];
    const [ textArray, setTextArray ] = useState([]);
    const [ slowText, setSlowText ] = useState([]);

    useEffect(() => {
        texts.forEach((element, index) => {
            textArray[index] = element.split([]);
        });
        
        textArray.forEach((textItem, textIndex) => {
            textItem.forEach((letter, letterIndex) => {
                setTimeout(() => {
                    setSlowText(prev => {
                        const newSlowText = [...prev];
                        if (!newSlowText[textIndex]) {
                            newSlowText[textIndex] = '';
                        }
                        newSlowText[textIndex] += letter;
                        return newSlowText;
                    });
                }, 75 * (letterIndex + textIndex/2 * textItem.length));
            });
        });
    }, []);

    return( 
        <Resume>
            <Abstract toggleLight={toggleLight}>
                {slowText.map((text, index) => (
                    <span key={index}>{text}</span>
                ))}
            </Abstract>

            <ImageBox toggleLight={toggleLight}>
                <img src={foto2} alt="foto1" id="sunny"/>
                <img src={foto1} alt="foto2" id="moon"/>
            </ImageBox>
        </Resume>
    )
}

const Resume = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 180px; 
`
const Abstract = styled.div`
    width: 60%; 
    height: 100%;
    display: flex; 
    justify-content: center;
    flex-direction: column;

    span { 
        width: 85%;
        margin-top: 15px;
        font-size: 20px;
        //font-family: "Kavoon", serif;
        font-family: "Space Mono", monospace;
        font-weight: 700;
        text-align: left;
        text-overflow: ellipsis;
        border-right: 0.15em solid gray;
        transition: 3s;
        color: ${props => props.toggleLight ? ("black") : ("white")}
    } 

    span:after { 
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: blink .7s infinite;
    } 

    @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
    }
`
const ImageBox = styled.div`
    width: 40%; 
    height: 50%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    transform: ${props => props.toggleLight ? ("rotateY(0deg)") : ("rotateY(360deg)")};
    transition: 3s; 

    img { 
        width: 300px; 
        height: 400px;
        object-fit: cover;
        //transition: 3s;
        backface-visibility: hidden; 
        transform-style: preserve-3d;
        background-repeat: no-repeat;
    } 

    img#sunny { 
        visibility: ${props => props.toggleLight ? ("visible") : ("hidden")};
    }

    img#moon { 
        visibility: ${props => props.toggleLight ? ("hidden") : ("visible")};
    }
`