import { styled } from "styled-components"
import { Box, Circle, Project } from "../pages/Portfolio"
import foto1 from "../styles/images/foto1.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as projectApi from "../requests/projectApi";
import Tittle from "../pages/Tittle";
import Toggle from "../pages/Toggle";
import ToggleContext from "../contexts/ToggleContext";

export default function ProjectScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ projects, setProjects ] = useState([]); 
    const [ categories, setCategories ] = useState([]);
    const { type } = useParams();

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getProjects();
                const types = await projectApi.getTypes();
                setProjects(response);
                setCategories(types);
            } catch (error) {
                console.log(error);
            }
        } 

        projectData();
    }, []);


    return(
        <>
        <Tittle />
        <Toggle />

        <Container>
            <Category toggleLight={toggleLight}>
                {categories.map(categorie => { 
                    return( 
                        <>
                        <span>{categorie.enumlabel}</span>
                        <a>/</a>
                        </>
                    )
                })}
            </Category>

            <Box> 
                {projects.map(project => {
                    return(
                        <Project>
                            <img src={project.image} alt={project.id} />
                            <Circle className="circle">
                                <span>{project.name.toUpperCase()}</span>
                                <a>{project.type.toUpperCase()}</a>
                            </Circle>
                        </Project>
                    )
                })}
            </Box>
        </Container>
        </>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 100%;
    margin-top: 200px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const Category = styled.div`
    width: 80%; 
    margin-bottom: 100px;

    span { 
        margin-right: 5px;
        padding-bottom: 100px;
        font-size: 30px;
        font-family: "Syne", sans-serif;
        font-weight: bold;
        color: ${props => props.toggleLight ? ("#A6ADBC") : ("white")};
        transition: color linear 2s;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: black;
            
            text-decoration: underline;
        }
    }

    a { 
        font-size: 30px;
        color: gray;
    }
`