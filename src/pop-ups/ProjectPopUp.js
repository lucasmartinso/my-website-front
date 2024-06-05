import { styled } from "styled-components";
import projectContext from "../contexts/ProjectContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "./EmailPopUp";

export default function ProjectPopUp() { 
    const { projectPopUp, setProjectPopUp } = useContext(projectContext);
    const [ project, setProject ] = useState([]);

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
            </Box>
        </Container>
        ) : ("")}
        </>
    )
}

const Box = styled.div`
    width: 90%;
    height: 70%;
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