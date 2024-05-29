import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import SkillContext from "../contexts/SkillsContext";
import { Box, Container } from "./EmailPopUp";
import * as techApi from "../requests/techApi";

export default function SkillPopUp() { 
    const { skillPopUp, setSkillPopUp } = useContext(SkillContext);
    const [ search, setSearch ] = useState("");
    const [ techs, setTechs ] = useState([]);

    useEffect(() => { 
        async function skillData() { 
            try {
                const techs = await techApi.getTechs();
                setTechs(techs);
            } catch (error) {
                console.log(error);
            }
        }

        skillData()
    }, [])
  
    return( 
        <>
        {skillPopUp ? (
            <Container>
                <Box>
                    <Tittle>
                        <span>Segue o fio com todas as hard-skills 🧶​:</span>
                        <a onClick={() => setSkillPopUp(false)}>X</a>
                    </Tittle>
                    <Skills> 
                        {techs.map(tech => { 
                            return( 
                                <Skill>
                                    <span>📌​</span>
                                    <a>{tech.name}</a>
                                </Skill>
                            )
                        })}
                    </Skills>
                    <Bottom>
                        <span>Pesquise uma hard-skill também:</span>
                        <input 
                            type="text"
                            placeholder="Digite aqui..." 
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </Bottom>
                </Box>
            </Container>
        ): ("")}
        </>
    )
}

const Tittle = styled.div`
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
        font-size: 15px;

        &:hover { 
            cursor: pointer;
        }
    }
`

const Skills = styled.div`
    width: 100%; 
    height: 80%; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    overflow-y: auto;
    max-height: 80%;
    box-sizing: border-box;
`
const Skill = styled.div`
    width: 90%;
    height: 60px;
    display: flex; 
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
    }
`
const Bottom = styled.div`
    width: 90%; 
    height: 10%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: "Kavoon", serif;
    margin: 10px 0px  10px 10px;

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
`