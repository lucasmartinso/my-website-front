import { styled } from "styled-components"
import { Box, Circle, Project } from "../pages/Portfolio"
import foto1 from "../styles/images/foto1.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as projectApi from "../requests/projectApi";

export default function ProjectScreen() { 
    const [ projects, setProjects ] = useState([]); 
    const [ categories, setCategories ] = useState([]);
    const { type } = useParams();

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projects 
            } catch (error) {
                console.log(error);
            }
        }
    }, []);


    return(
        <Container>

            <Box> 
                <Project>
                    <img src={foto1} alt="id" />
                    <Circle className="circle">
                        <span>{`Lucas`.toUpperCase()}</span>
                        <a>{`Web`.toUpperCase()}</a>
                    </Circle>
                </Project>
            </Box>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 100%;
`