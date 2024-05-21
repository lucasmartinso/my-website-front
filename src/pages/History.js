import { styled } from "styled-components"
import foto1 from "../styles/images/foto1.svg";
import foto2 from "../styles/images/foto2.jpeg";
import tvColor from "../styles/images/chuvisco-color.gif";
import tvBlack from "../styles/images/chuvisco branco e preto.gif";
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import { useState, useEffect, useContext } from "react";

export default function History() { 
    const { toggleLight } = useContext(ToggleContext);
    const { transitionPhoto } = useContext(TransitionContext);
    const description = [
        "Sou Lucas...",
        "Desenvolvedor Full Stack, com experiência em desenvolvimento de aplicações web front-end e back-end.",
        "Atualmente estudante da UFJF no curso de Ciência da Computação.",
        "Apaixonado pelos estudos e pela resolução de problemas por meio da tecnologia, que tenham impacto efetivo na vida real."
    ];
    const allMe = [ 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque.", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."
    ];
    const [ textArray, setTextArray ] = useState([]);
    const [ slowText, setSlowText ] = useState([]);
    

    useEffect(() => {
        description.forEach((element, index) => {
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
        <>
        <Resume>
            <Abstract toggleLight={toggleLight}>
                {slowText.map((text, index) => (
                    <span key={index}>{text}</span>
                ))}
            </Abstract>

            <ImageBox toggleLight={toggleLight}>
                {!transitionPhoto ? ( 
                    <img src={toggleLight ? foto2 : foto1} alt="profile_photo"/>
                ): ( 
                    <img src={toggleLight ? tvBlack : tvColor} alt="transition_picute"/>
                )
                }
            </ImageBox>
        </Resume>

        <About toggleLight={toggleLight}> 
            <p>HISTÓRIA</p>
            {allMe.map(paragraph => { 
                return <span>{paragraph}</span>
            })}
        </About>
        </>
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
    transition: 3s; 

    img { 
        width: 300px; 
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
    } 
`
const About = styled.div`
    width: 100%; 
    height: 100%;
    margin-top: 100px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    color: ${props => props.toggleLight ? ("black") : ("white")}; 

    p { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-bottom: 50px;
    } 

    span { 
        width: 70%;
        margin-bottom: 15px;
        font-family: "Syne", sans-serif;
        font-weight: 400;
        font-size: 17px;
    }
`