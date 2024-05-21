import { styled } from "styled-components"
import foto1 from "../styles/images/foto1.png";
import { useState, useEffect } from "react";

export default function History() { 
    const texts = [
        "Sou Lucas...",
        "Desenvolvedor Full Stack, com experiência em desenvolvimento de aplicações web front-end e back-end.",
        "Atualmente estudante da UFJF no curso de Ciência da Computação.",
        "Apaixonado pelos estudos e pela resolução de problemas por meio da tecnologia, que tenham impacto efetivo na vida real."
    ];
    
    const [ textArray, setTextArray ] = useState([]);
    const [ slowText, setSlowText ] = useState('');

    useEffect(() => {
        texts.forEach((element, index) => {
            textArray[index] = element.split('');
        });
        
        //console.log(textArray[0]);
        textArray[0].forEach((letter, index) => { 
            setTimeout(() => {
                setSlowText(prev => prev + letter); 
            }, 75*index);
        }) 
        console.log(slowText);
    }, []);

    return( 
        <Resume>
            <Abstract>
                <span>{slowText}</span>
                <span></span>
                <span></span>
                <span></span>
            </Abstract>

            <ImageBox>
                {/* <Separator></Separator> */}
                <img src={foto1} alt="foto1"/>
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
    padding-top: 130px; 
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
        transition: 4s;
    }
`
const ImageBox = styled.div`
    width: 40%; 
    height: 50%;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    img { 
        width: 300px; 
        height: 400px;
        object-fit: cover;
    }
`
const Separator = styled.div`
    height: 450px; 
    width: 1px; 
    background-color: gray;
    margin: 0px 20px 0px 0px;
`