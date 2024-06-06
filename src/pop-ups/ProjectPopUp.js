import { styled } from "styled-components";
import projectContext from "../contexts/ProjectContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "./EmailPopUp";
import foto1 from "../styles/images/foto1.png";
import ninja from "../styles/images/ninja.svg"; 
import gold from "../styles/images/gold.svg";
//import bok from "../styles/images/bookk.svg";
import web from "../styles/images/screen.svg";

export default function ProjectPopUp() { 
    const { projectPopUp, setProjectPopUp } = useContext(projectContext);
    const [ project, setProject ] = useState([]);
    const techs = ['javascript', 'nodejs','react','chatgpt','javascript', 'nodejs','react','chatgpt', 'javascript', 'nodejs','react','chatgpt', 'javascript', 'nodejs','react','chatgpt', 'javascript', 'nodejs','react','chatgpt'];

    useEffect(() => { 
        //await
    },[]);
    
    return(
        <>
        {projectPopUp ? (
        <Container>
            <Box>
                <Tittle> 
                    <span>Titulo</span>
                    <Separator></Separator>
                </Tittle>
                <MainInfo>
                    <img src={foto1} alt="1" />
                    <Description>
                        <p>Descrição</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis i</span>
                    </Description>
                </MainInfo>
                <Techs>
                    <h6>Tecnologias usadas: </h6>
                    {techs.map(tech => { 
                        return(
                            <span>{tech},</span>
                        )
                    })} 
                </Techs>
                <Options>
                    <Tag>
                        <img src={ninja} alt="ninja image" />
                    </Tag>
                </Options>
            </Box>
        </Container>
        ) : ("")}
        </>
    )
}

const Box = styled.div`
    width: 90%;
    height: 80%;
    background-color: #FEF5E3;
    border-radius: 20px;
    border: 7px solid black;
    display: flex; 
    align-items: center;
    flex-direction: column; 
    padding: 0px 0px 10px 10px;
`
const Tittle = styled.div`
    width: 100%; 
    height: 10%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    margin-top: 20px;

    span { 
        font-family: "Oi", serif;
        font-size: 50px;
    }
`
const Separator = styled.div`
    width: 90%; 
    height: 2px; 
    background-color: black;
    margin-top: 5px;
`
const MainInfo = styled.div`
    width: 90%; 
    height: 43%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    img { 
        height: 280px; 
        width: 400px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;  
    }
`
const Description = styled.div`
    width: 40%; 
    height: 50%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    p { 
        font-family: "Kavoon", serif;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 25px;
    }

    span { 
        //font-family: "Space Mono", monospace;
        text-overflow: ellipsis;
        hyphens: auto;
        font-size: 17px;
    }
`
const Techs = styled.div`
    width: 95%; 
    height: 7%; 
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    word-break: break-all; 
    hyphens: auto;
    margin-bottom: 30px;

    h6 { 
        font-weight: bold;
        margin-right: 5px;
        text-decoration: underline;
    }

    span { 
        margin-right: 5px;
    }
`
const Options = styled.div`
    width: 90%; 
    height: 25%; 
    background-color: white;
    display: flex; 
    justify-content: space-around; 
    align-items: center;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
const Tag = styled.div`
    width: 45%; 
    height: 45%;
    diplay: flex; 
    flex-direction: column; 
    align-items: left: 
    padding-left: 10px;
    background-color: #fafafa;
    border: 4px solid black;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    `