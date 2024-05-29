import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import * as projectApi from "../requests/projectApi";


export default function Portfolio() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ projects, setProjects ] = useState([]);

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getProjects(); 
                setProjects(projects);
            } catch (error) {
                console.log(error); 
            }
        }

        projectData();
    },[]);

    return( 
        <Container>
            <p>Portifólio</p>
            <Box>

            </Box>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    p { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-top: 30px;
    }
`
const Box = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex;
`