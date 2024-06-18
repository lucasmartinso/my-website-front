import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Tittle from "../pages/Tittle";
import Toggle from "../pages/Toggle";
import ToggleContext from "../contexts/ToggleContext";
import TokenContext from "../contexts/TokenContext";
import { Box, Circle, Project } from "../pages/Portfolio";
import * as projectApi from "../requests/projectApi";
import * as techsApi from "../requests/techApi"; 
import * as typesApi from "../requests/typeApi";
import DeletePopUp from "../pop-ups/DeletePopUp";
import { configVar } from "../requests/personalApi";
import EditProject from "../pages/EditProject";
import EditTechType from "../pages/EditTechType";
import { Skill } from "../pop-ups/SkillsPopUp";

export default function CreateScreen(){
    const types = ['Projetos','Blog','Techs','Tipos'];
    const cruds = ['Criar 🆕','Editar ✏️​', 'Excluir 🗑️']
    const { toggleLight } = useContext(ToggleContext);
    const { token } = useContext(TokenContext);
    const { type } = useParams();
    const [ selected, setSelected ] = useState(type);
    const [ action, setAction ] = useState(null);
    const [ projects, setProjects ] = useState([]);
    const [ techs, setTechs ] = useState([]);
    const [ deletePopUp, setDeletePopUp ] = useState(false);
    const [ writing, setWriting ] = useState(false);
    const [ editTechType, setEditTechType ] = useState(false);
    const [ editing, setEditing ] = useState({id:null,name:null});
    const navigate = useNavigate();
    //CRIAR UMA PAGINA PARA CADA

    useEffect(() => { 
        async function fetchData() { 
            const response = await projectApi.getProjects(); 
            setProjects(response);
            if(type === "Techs") { 
                const response = await techsApi.getTechs();
                console.log(response);
                setTechs(response);
            }
        } 
        
        fetchData();
    },[])

    function redirect(type) { 
        setSelected(type);
        navigate(`/auth/crud/${type}`);
        setAction(null);
        setWriting(false);
        setEditTechType(false);
    }

    function changeAction(action) { 
        setWriting(false);
        setEditTechType(false);
        setAction(action);
        navigate(`/auth/crud/${type}?action=${action}`);
        if(type === "Projetos" && action === "Criar 🆕") { 
            setEditing({id:null, name:null});
            setWriting(true);
        } else if((type === "Techs" || type === "Tipos") && action === "Criar 🆕") { 
            setEditing({id:null, name:null});
            setEditTechType(true);
        }
    }

    async function selecting(id,name) { 
        setEditing({id, name});
        if(action === "Excluir 🗑️") {
            setDeletePopUp(true);
        } else if(type === "Projetos") { 
            setWriting(true);
        } else if(type === "Tipos" || type === "Techs") { 
            setEditTechType(true);
        }
    }

    return(
        <>
        <Tittle /> 
        <Toggle />

        {deletePopUp ? (
            <DeletePopUp 
                id={editing.id}
                name={editing.name}
                type={type}
                config={configVar(token)}
                setDeletePopUp={setDeletePopUp}
            />
        ) : ("")}

        <Container>
            <Options toggleLight={toggleLight} selected={selected}>
                {types.map(type => { 
                    return(
                        <>
                        <span id={type===selected ? ("selected") : ("")} onClick={() => redirect(type)}>{type}</span>
                        <a>/</a>
                        </>
                    )
                    
                })}
            </Options>

            <Header toggleLight={toggleLight}>
                <p>{selected}</p>
            </Header>

            <NewBox toggleLight={toggleLight}>
                {cruds.map(crud => { 
                    return(
                        <span id={action === crud ? ("selected") : ("")} onClick={() => changeAction(crud)}>{crud}</span>
                    )
                })} 
            </NewBox>
            
            {writing ? (
                <EditProject 
                    id={editing.id}
                    setWriting={setWriting}
                    toggleLight={toggleLight}
                />
            ) : ("")}

            {editTechType ? (
                <EditTechType 
                    id={editing.id}
                    type={type}
                    setEditTechType={setEditTechType}
                    toggleLight={toggleLight}
                />
            ) : ("")}
            
            {action !== "Criar 🆕" && action && type === "Projetos" && !writing ? (
                <Box> 
                    {projects.map(project => {
                        return(
                            <Project key={project.id} toggleLight={toggleLight} onClick={() => selecting(project.id,project.name)}>
                                <img src={project.image} alt={project.id} />
                                <Circle className="circle">
                                    <span>{project.name.toUpperCase()}</span>
                                    <a>{project.type.toUpperCase()}</a>
                                </Circle>
                            </Project>
                        )
                    })}
                    </Box>
            ) : ("")}

        {action !== "Criar 🆕" && action && (type === "Techs" || type === "Tipos") && !editTechType ? (
            <SelectionBox>
                {type === "Techs" ? (
                    techs.map(tech => { 
                        return(
                            <Skill onClick={() => selecting(tech.id,tech.name)}>
                                <span>📌​</span>
                                <a>{tech.name}</a>
                            </Skill>
                        )
                    })
                ) : (
                    types.map(tipo => { 
                        return(
                            <Skill onClick={() => selecting(tipo.id,tipo.name)}>
                                <span>📌​</span>
                                <a>{tipo.name}</a>
                            </Skill>
                        )
                    })
                )}
                      
            </SelectionBox>
        ) : ("")}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
`
const Options = styled.div`
    width: 100%; 
    height: 100%;
    margin: 220px 0px 100px 0px;

    span { 
        margin: 0px 10px;
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
`
const Header = styled.div`
    width: 100%; 
    height: auto;
    display: flex; 
    justify-content: center;
    color: ${props => props.toggleLight ? ("black") : ("white")};
    transition: 1s;

    p { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-bottom: 50px;
    } 
`
const NewBox = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: left;
    margin-bottom: 50px;
    color: ${props => props.toggleLight ? ("black") : ("white")};

    span { 
       font-size: 20px;
       margin-right: 20px;
       transition: 0.3s;
       //text-decoration: underline;

       &:hover, 
       &:focus { 
        cursor: pointer; 
        font-size: 30px;
       }
    }

    span#selected { 
        font-size: 30px;
    }
`
const SelectionBox = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`