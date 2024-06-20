import { styled } from "styled-components";
import { Box, Circle, Project } from "../pages/Portfolio";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as projectApi from "../requests/projectApi";
import * as typeApi from "../requests/typeApi";
import Tittle from "../pages/Tittle";
import Toggle from "../pages/Toggle";
import ToggleContext from "../contexts/ToggleContext";
import bomb from "../styles/images/bomb.gif";
import BaseBoard from "../pages/BaseBoard";
import ProjectContext from "../contexts/ProjectContext";
import EmailPopUp from "../pop-ups/EmailPopUp";
import ProjectPopUp from "../pop-ups/ProjectPopUp";

export default function ProjectScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const { projectPopUp, setProjectPopUp } = useContext(ProjectContext);    const [ projects, setProjects ] = useState([]); 
    const [ categories, setCategories ] = useState([{id:-1,name:"all"}]);
    const { type } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
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
                const types = await typeApi.getTypes();
                console.log(types);
                setCategories(prevCategories => [...prevCategories, ...types]);
            } catch (error) {
                console.log(error);
            }
        } 

        projectData();
    }, []);

    function reloadProjects(cat) { 
        navigate(`/projects/${cat}`);
        window.location.reload();
    } 

    function redirect(id) { 
        setProjectPopUp(true);
        navigate(`/projects/${type}?id=${id}`); 
    }

    return(
        <>
        <EmailPopUp />
        {projectPopUp ? (
            <ProjectPopUp id={id} route={`projects/${type}`}/>
        ) : ("")}
        

        <Tittle />
        <Toggle />

        <Container>
            <Category toggleLight={toggleLight} type={type}>
                {categories.map(categorie => { 
                    if(categorie.name === type) { 
                        return( 
                            <>
                            <span id="selected">{categorie.name}</span>
                            <a>/</a>
                            </>
                        ) 
                    } else {
                        return( 
                            <>
                            <span onClick={() => reloadProjects(categorie.name)}>{categorie.name}</span>
                            <a>/</a>
                            </>
                        ) 
                    }
                })}
            </Category>

            <Box> 
                {projects.length ? (
                     projects.map(project => {
                        return(
                            <Project key={project.id} toggleLight={toggleLight} onClick={() => redirect(project.id)}>
                                <img src={project.image} alt={project.id} />
                                <Circle className="circle">
                                    <span>{project.name.toUpperCase()}</span>
                                    <a>{project.type.toUpperCase()}</a>
                                </Circle>
                            </Project>
                        )
                    })
                ) : (
                    <>
                        <NotRegister toggleLight={toggleLight}>
                            <img src={bomb} alt="not found" />
                            <span><ion-icon name="close-circle"></ion-icon> Ainda não foram cadastrados projetos com esse tipo!!</span>
                        </NotRegister>
                    </>
                )}
                   
            </Box>
        </Container>

        <BaseBoard />
        </>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 100%;
    margin: 200px 0px; 
    display: flex; 
    flex-direction: column;
    align-items: center;

    @media (max-width: 700px) { 
       margin: 230px 0px 150px 0px;
    }
`
const Category = styled.div`
    width: 80%; 
    margin-bottom: 50px;

    span { 
        margin: 0px 10px;
        padding-bottom: 100px;
        font-size: 40px;
        font-family: "Kavoon", serif;
        font-weight: bold;
        color: ${props => props.toggleLight ? ("#A6ADBC") : ("rgba(255, 255, 255, 0.5)")};
        transition: color linear 1s;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: ${props => props.toggleLight ? ("black") : ("white")};
            text-decoration: underline;
            opacity: ${props => props.toggleLight ? ("0.5") : ("0.8")};
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

    @media (max-width: 700px) { 
        width: 90%;
    }

    @media (max-width: 500px) { 
        width: 100%;

        span, a { 
            font-size: 30px;
        } 

        span { 
            margin: 0px 5px;
        }
    }
`
const NotRegister = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    margin-top: 70px;

    img { 
        width: 500px; 
        height: 250px;
    }

    span { 
        display: flex; 
        align-items: center;
        font-size: 25px;
        color: ${props => props.toggleLight ? ("black") : ("white")};
        text-align: center;

        ion-icon { 
            width: 40px; 
            height: 40px;
            margin-right: 10px;
            color: red;
        }
    }

    @media (max-width: 700px) { 
        span { 
            ion-icon { 
                width: 50px; 
                height: 50px;
            }
        }
    }
`