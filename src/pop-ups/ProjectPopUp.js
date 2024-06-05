import { styled } from "styled-components";
import projectContext from "../contexts/ProjectContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "./EmailPopUp";

export default function ProjectPopUp() { 
    const { projectPopUp, setProjectPopUp } = useContext(projectContext);
    const [ project, setProject ] = useState([]);

    useEffect(() => { 

    },[]);
    
    return(
        <>
        {projectPopUp ? (
        <Container>
            <Box>

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