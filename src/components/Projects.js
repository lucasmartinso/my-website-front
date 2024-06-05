import { styled } from "styled-components"
import { Box, Circle, Project } from "../pages/Portfolio"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as projectApi from "../requests/projectApi";
import Tittle from "../pages/Tittle";
import Toggle from "../pages/Toggle";
import ToggleContext from "../contexts/ToggleContext";

export default function ProjectScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ projects, setProjects ] = useState([]); 
    const [ categories, setCategories ] = useState([{enumlabel: "all"}]);
    const { type } = useParams();
    const navigate = useNavigate();

    useEffect(() => { 
        async function projectData() { 
            try {
                if(type === "all") { 
                    const response = await projectApi.getProjects();
                    setProjects(response);
                } else { 
                    const response = await projectApi.getProjectsPerType(type);
                    setProjects(response);
                }                
                const types = await projectApi.getTypes();
                
                setCategories(prevCategories => [...prevCategories, ...types]);
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
            <Category toggleLight={toggleLight} type={type}>
                {categories.map(categorie => { 
                    if(categorie.enumlabel === type) { 
                        return( 
                            <>
                            <span id="selected">{categorie.enumlabel}</span>
                            <a>/</a>
                            </>
                        ) 
                    } else {
                        return( 
                            <>
                            <span onClick={() => navigate(`/projects/${categorie.enumlabel}`)}>{categorie.enumlabel}</span>
                            <a>/</a>
                            </>
                        ) 
                    }
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
    margin-bottom: 50px;

    span { 
        margin-right: 10px;
        padding-bottom: 100px;
        font-size: 40px;
        font-family: "Kavoon", serif;
        font-weight: bold;
        color: ${props => props.toggleLight ? ("#A6ADBC") : ("blue")};
        transition: color linear 1s;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: black;
            text-decoration: underline;
            opacity: 0.5;
        }
    } 

    span#selected { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        text-decoration: underline;
    }

    a { 
        font-size: 40px;
        color: #e2e0e0;
        font-weight: bold;
    }
`