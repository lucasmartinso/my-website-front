import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import * as projectApi from "../requests/projectApi";
import { useNavigate } from "react-router-dom";
import ProjectContext from "../contexts/ProjectContext";

export default function Portfolio({ id }) { 
    const { toggleLight } = useContext(ToggleContext);
    const { setProjectPopUp } = useContext(ProjectContext);
    const [ projects, setProjects ] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getPinnedProjects(); 
                setProjects(response);
            } catch (error) {
                console.log(error); 
            }
        }

        projectData();
    },[]);

    function redirect(id) { 
        setProjectPopUp(true);
        navigate(`/hello?id=${id}`); 
    }

    function loadMoreProjects() { 
        navigate('/projects/all'); 
        window.location.reload();
    }

    return( 
        <Container toggleLight={toggleLight}>
            <p>Portifólio</p>
            <Box>
                {projects.map(project => {
                    return(
                        <Project key={project.id} toggleLight={toggleLight} onClick={() => redirect(project.id)}>
                            <img src={project.image} alt={project.id} />
                            <Circle className="circle">
                                <span>{project.name.toUpperCase()}</span>
                                <a>{project.type.toUpperCase()}</a>
                            </Circle>
                        </Project>
                    )
                })}
            </Box>
            <h onClick={loadMoreProjects}>Ver mais projetos <ion-icon name="add"></ion-icon></h>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    p { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 20px 0px 50px 0px;
        transition: 1s;
    }

    h { 
        color: #CCCCCC;
        opacity: ${props => props.toggleLight ? 1 : 0.4};
        transition: 0.5s;
        display: flex; 
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-family: "Kavoon", serif;

        ion-icon { 
            margin-left: 5px;
        }

        &:hover, 
        &:focus { 
            cursor: pointer;
            color: ${props => props.toggleLight ? ("black") : ("white")};
            opacity: 1;
        }
    }

    @media (max-width: 500px) { 
        p {
            font-size: 40px;
        }
    }
`
export const Box = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
`
export const Project = styled.div`
    width: 150px; 
    height: 200px; 
    margin: 0px 10px 30px 20px;
    box-shadow: ${props => props.toggleLight ? 
        ("rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset") : 
        ("rgba(255, 255, 255, 0.4) 0px 0px 0px 2px, rgba(255, 255, 255, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset")};    
    border-radius: 12px;
    transition: 1s;

    img { 
        width: 150px; 
        height: 200px; 
        border-radius: 12px;
        position: absolute;
        object-fit: cover;
    }

    &:hover, 
    &:focus {
        cursor: pointer;

        .circle { 
            transform: rotateX(180deg);
        }
    }
`
export const Circle = styled.div`
    width: 90px;
    height: 90px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    border-radius: 50%; 
    background-color: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: transform 1s;

    span { 
        font-weight: bold;
        margin-bottom: 5px;
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
    } 

    a { 
        color: #CCCCCC;
    }
`