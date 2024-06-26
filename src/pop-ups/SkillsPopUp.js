import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import SkillContext from "../contexts/SkillsContext";
import { Box, Container } from "./EmailPopUp";
import * as techApi from "../requests/techApi";
import { DebounceInput } from "react-debounce-input";
import { MagnifyingGlass } from "react-loader-spinner";
import bomb from "../styles/images/bomb.gif";
import ToggleContext from "../contexts/ToggleContext";

export default function SkillPopUp({technologies, setTechnologies,edit}) { 
    const { toggleLight } = useContext(ToggleContext)
    const { skillPopUp, setSkillPopUp } = useContext(SkillContext);
    const [ techs, setTechs ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => { 
        async function skillData() { 
            try {
                const techx = await techApi.getTechs();
                setTechs(techx);
            } catch (error) {
                console.log(error);
            }
        }

        skillData()
    }, []); 

    async function searchTech(event) { 
        setLoading(true);
        const tech = { name: event }; 

        try {
            const techx = await techApi.searchTechs(tech); 
            setTechs(techx);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    } 

    function updateTechs(name) { 
        if(edit) { 
            if(technologies.includes(name)) { 
                setTechnologies(prevTech => prevTech.filter(element => element !== name));
            } else { 
                setTechnologies(prevTech => [...prevTech, name]);
            }
        }
    } 
  
    return( 
        <>
        {skillPopUp ? (
            <Container>
                <Box toggleLight={toggleLight}>
                    <Tittle>
                        <span>Segue o fio com todas as hard-skills 🧶​:</span>
                        <a onClick={() => setSkillPopUp(false)}>X</a>
                    </Tittle>
                    <Skills loading={loading}> 
                        {techs.length ? (
                            techs.map(tech => { 
                                return( 
                                    <Skill selected={technologies.includes(tech.name)} edit={edit} onClick={() => updateTechs(tech.name)}>
                                        <span>📌​</span>
                                        <a>{tech.name}</a>
                                    </Skill>
                                )
                            })
                        ) : (
                            loading ? (
                                <MagnifyingGlass
                                    visible={true}
                                    height="150"
                                    width="150"
                                    ariaLabel="magnifying-glass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="magnifying-glass-wrapper"
                                    glassColor="#c0efff"
                                    color="#e15b64"
                                />
                            ) : (
                                <>
                                    <img src={bomb} alt="not found" />
                                    <span>Nenhuma tecnologia encontrada com esse nome!</span>
                                </>
                            )
                        )}   
                    </Skills>
                    <Bottom>
                        <span>Pesquise uma hard-skill também:</span>
                        <DebounceInput
                            type="text"
                            placeholder="Digite aqui..."
                            minLength={1}
                            debounceTimeout={400}
                            onChange={(event) => searchTech(event.target.value)} 
                        />
                    </Bottom>
                </Box>
            </Container>
        ): ("")}
        </>
    )
}

export const Tittle = styled.div`
    width: 90%; 
    height: 10%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Kavoon", serif;
    margin: 30px 10px 20px 10px;

    span { 
        font-size: 20px;
    }

    a { 
        font-size: 20px;
        font-family: "Space Mono", monospace;
        font-weight: bold;

        &:hover { 
            cursor: pointer;
        }
    }
`
export const Skills = styled.div`
    width: 100%; 
    max-height: 80%; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    ${props => props.loading ? ("justify-content: center;") : (";")};
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 80%;
    box-sizing: border-box;

    img { 
        width: 500px; 
        height: 250px;
    }

    span { 
        font-size: 25px;
        font-family: "Space Mono", monospace;
        text-align: center;
    }
`
export const Skill = styled.div`
    width: 80%;
    height: 60px;
    display: flex; 
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.selected ? "gray" : "white"};
    font-family: "Syne", sans-serif;
    font-weight: bold;
    border-radius: 12px;
    transition: background-color linear 1s, color linear 0.5s;
    margin-bottom: 10px;
    flex-shrink: 0;

    span { 
        font-size: 30px;
    }

    a{ 
        font-size: 30px;
    }

    &:hover, 
    &:focus { 
        background-color: gray;
        color: white;
        cursor: ${props => props.edit ? ("pointer") : ("default")};
    } 

    .selected { 
        background-color: gray;
    }

    @media (max-width: 1200px) { 
        width: 90%;
    }
`
export const Bottom = styled.div`
    width: 90%; 
    height: 10%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: "Kavoon", serif;
    margin: 10px 0px 10px 10px;

    span { 
        font-size: 22px;
    }

    input { 
        width: 200px;
        border: 2px solid black;
        height: 40px;
        padding-left: 10px;
        margin-left: 20px;
        font-family: "Syne", sans-serif;
        border-radius: 12px;
    }

    @media (max-width: 700px) { 
        span { 
            font-size: 17px;
        }

        input { 
            margin-left: 5px;
        }
    }
`