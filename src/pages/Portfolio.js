import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import * as projectApi from "../requests/projectApi";
import foto1 from "../styles/images/foto1.png";
import { useNavigate } from "react-router-dom";

export default function Portfolio() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ projects, setProjects ] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getPinnedProjects(); 
                console.log(response);
                setProjects(response);
            } catch (error) {
                console.log(error); 
            }
        }

        projectData();
    },[]);

    return( 
        <Container toggleLight={toggleLight}>
            <p>Portifólio</p>
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
            <h onClick={() => navigate('/projects/all')}>Ver mais projetos <ion-icon name="add"></ion-icon></h>
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
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 20px 0px 50px 0px;
        transition: 1s;
    }

    h { 
        color:  #CCCCCC;
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
            color: black;
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

    img { 
        width: 150px; 
        height: 200px; 
        border-radius: 12px;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
    } 

    a { 
        color: #CCCCCC;
    }
`