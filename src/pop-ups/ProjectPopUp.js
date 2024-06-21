import { styled } from "styled-components";
import projectContext from "../contexts/ProjectContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "./EmailPopUp";
import ninja from "../styles/images/ninja.svg"; 
import gold from "../styles/images/gold.svg";
import web from "../styles/images/screen.svg";
import book from "../styles/images/book.svg";
import * as projectApi from "../requests/projectApi";
import { useNavigate } from "react-router-dom";

export default function ProjectPopUp({ id, route }) { 
    const { setProjectPopUp } = useContext(projectContext);
    const [ project, setProject ] = useState([]);
    const [ techs, setTechs ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getProjectComplete(id);
                setTechs(response.technologies);
                setProject(response);
            } catch (error) {
                console.log(error);
            }
        }
        
        projectData();
    },[]);

    function close() { 
        setProjectPopUp(false);
        navigate(`/${route}`);
    }
    
    return(
        <>
        <Container>
            <Box>
                <Tittle> 
                    <p onClick={close}>x</p>
                    <span>{project.name}</span>
                    <Separator></Separator>
                </Tittle>
                <MainInfo>
                    <img src={project.image} alt={project.id} />
                    <Description>
                        <p>Descrição</p>
                        <span>{project.description}</span>
                    </Description>
                </MainInfo>
                <Techs>
                    <h6>Tecnologias usadas: </h6>
                    {techs.length ? (
                        techs.map(tech => { 
                            return(
                                <span>{tech},</span>
                            )
                        })
                    ) : ("")}
                </Techs>
                <Options>
                    <Tag className={!project.url ? ("block") : ("")} onClick={() => window.open(`${project.url}`,'_blank')}>
                        <img src={web} alt={web} />
                        <Content>
                            <p>Web <ion-icon name="arrow-forward-outline"></ion-icon></p>
                            <span>Hospedagem da aplicação</span>
                        </Content>
                    </Tag>
                    <Tag className={!project.documentation ? ("block") : ("")} onClick={() => window.open(`${project.documentation}`,'_blank')}>
                        <img src={book} alt={book} />
                        <Content>
                            <p>Documentação <ion-icon name="arrow-forward-outline"></ion-icon></p>
                            <span>Documentação da aplicação</span>
                        </Content>
                    </Tag>
                    <Tag className={!project.front ? ("block") : ("")} onClick={() => window.open(`${project.front}`,'_blank')}>
                        <img src={ninja} alt={ninja} />
                        <Content>
                            <p>Front-end <ion-icon name="arrow-forward-outline"></ion-icon></p>
                            <span>Código do front-end</span>
                        </Content>
                    </Tag>
                    <Tag className={!project.back ? ("block") : ("")} onClick={() => window.open(`${project.back}`,'_blank')}>
                        <img src={gold} alt={gold} />
                        <Content>
                            <p>Back-end <ion-icon name="arrow-forward-outline"></ion-icon></p>
                            <span>Código/documentação do back-end</span>
                        </Content>
                    </Tag>
                </Options>
            </Box>
        </Container>
        </>
    )
}

const Box = styled.div`
    width: 60%;
    height: 85%;
    background-color: #FEF5E3;
    border-radius: 20px;
    border: 7px solid black;
    display: flex; 
    align-items: center;
    flex-direction: column; 
    padding: 0px 0px 10px 10px;

    @media (max-width: 1600px) { 
        width: 75%;
    }

    @media (max-width: 1200px) { 
        width: 90%;
    }

    @media (max-width: 1600px) { 
        width: 95%; 
    }
`
const Tittle = styled.div`
    width: 100%; 
    height: 10%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    margin-top: 20px;
    position: relative;

    span { 
        font-family: "Oi", serif;
        font-size: 50px;
    }

    p { 
        position: absolute;
        top: 10px; 
        right: 20px;
        font-size: 30px;

        &:hover { 
            cursor: pointer;
        }
    }

    @media (max-width: 700px) { 
        span { 
            font-size: 30px;
        } 

        p { 
            top: 0px;
            font-size: 18px;
        }
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
    height: 42%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    img { 
        height: 280px; 
        width: 50%;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;  
    }
`
const Description = styled.div`
    width: 40%; 
    height: auto; 
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
        overflow: hidden;
    }

    @media (max-width: 500px){ 
        span { 
            font-size: 15px;
        }
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
    margin: 15px 0px 20px 0px;

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
    width: 80%; 
    height: 30%; 
    //background-color: white;
    display: flex; 
    justify-content: space-around; 
    align-items: center;
    border-radius: 12px;
    //box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    flex-wrap: wrap;

    @media (max-width: 1600px) { 
        width: 90%;
    } 
`
const Tag = styled.div`
    width: 45%; 
    height: 40%;
    display: flex;  
    align-items: center; 
    justify-content: left;
    padding-left: 10px;
    background-color: #FAFAFA;
    border: 4px solid black;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: color linear 0.3s;

    img { 
        width: 90px; 
        height: 70px;
    }

    &:hover, 
    &:focus { 
        cursor: pointer;
        background-color: black; 
        color: white;
    }

    &.block { 
        background-color: #CCCCCC;

        &:hover { 
            color: black;
            cursor: not-allowed;
        }
    }

    @media (max-width: 1600px) { 
        width: 45%; 
        height: 40%;
    }

    @media (max-width: 800px) { 
        padding-left: 0px;

        img { 
            width: 70px; 
            height: 50px;
        }
    }

    @media (max-width: 500px) { 
        word-break: break-all;
    }
`
const Content = styled.div`
    width: 80%;

    p { 
        display: flex; 
        align-items: center; 
        font-weight: bold;
        margin-bottom: 5px;

        ion-icon { 
            margin-left: 5px;
        }
    }

    span { 
        color: #aaa9a9;
    }

    @media (max-width: 800px) { 
        p { 
            font-size: 15px;
            margin-bottom: 1px;

            ion-icon { 
                margin-left: 1px;
            }
        }

        span { 
            font-size: 14px;
        }
    }

    @media (max-width: 500px) { 
        p { 
            font-size: 11px;
            margin-bottom: 1px;

            ion-icon { 
                margin-left: 1px;
            }
        }

        span { 
            font-size: 11px;
        }
    }
`