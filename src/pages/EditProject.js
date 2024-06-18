import { useEffect, useState } from "react";
import { styled } from "styled-components";
import * as projectApi from "../requests/projectApi";
import * as typeApi from "../requests/typeApi";

export default function EditProject({id, setWriting, toggleLight}) { 
    const [ types, setTypes ] = useState([]);
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ image, setImage ] = useState("");
    const [ type, setType ] = useState("");
    const [ techs, setTechs ] = useState([]);
    const [ web, setWeb ] = useState("");
    const [ doc, setDoc ] = useState("");
    const [ front, setFront ] = useState("");
    const [ back, setBack ] = useState("");
    const [ pinned, setPinned ] = useState(false);
    
    useEffect(() => { 
        async function fecthData() { 
            try {
                const response = await typeApi.getTypes();
                setTypes(response);
                setType(response[0].name);

                if(id != null) {
                    const response = await projectApi.getProjectComplete(id);
                    setName(response.name); 
                    setDescription(response.description);
                    setImage(response.image); 
                    setWeb(response.url);
                    setDoc(response.documentation);
                    setFront(response.front); 
                    setBack(response.back);
                    setPinned(response.pinned);
                    setTechs(response.technologies);
                    setType(response.type);
                } else { 
                    setName(""); 
                    setDescription("");
                    setImage(""); 
                    setWeb("");
                    setDoc("");
                    setFront(""); 
                    setBack("");
                    setPinned(false);
                    setTechs([]);
                }
            } catch (error) {
                console.log(error);
            }
        } 

        fecthData();
    },[]); 

    async function sendInfo(event) { 
        event.preventDefault();

        try {
            const project = { 
                name, 
                type, 
                image, 
                description,
                url: web, 
                documentation: doc, 
                front, 
                back, 
                pinned, 
                technologies: techs
            }

            console.log(project);
            //if(id != null)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <Container>
            {id != null ? (
                <ion-icon name="arrow-back-outline" onClick={() => setWriting(false)}></ion-icon>
            ) : ("")}
            <form onSubmit={sendInfo}>
            <input 
                type="text"
                placeholder="Nome"
                minLength={2}
                maxLength={30}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            <select value={type} onChange={(event) => setType(event.target.value)}>
                {types.map(t => { 
                    return(
                        <option key={t.id} value={t.name} onClick={() => setType(t.name)}>{t.name}</option>
                    )
                })}
            </select>
            <input 
                type="url"
                placeholder="Url da imagem"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                required
            />
            <textarea 
                type="text"
                placeholder="Descrição"
                minLength={15}
                maxLength={500}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
            />
            <input 
                type="url"
                placeholder="Url da hospedagem na web"
                value={web}
                onChange={(event) => setWeb(event.target.value)}
            />
            <input 
                type="url"
                placeholder="Url da documentação"
                value={doc}
                onChange={(event) => setDoc(event.target.value)}
                required
            />
            <input 
                type="url"
                placeholder="Url do Front-end"
                value={front}
                onChange={(event) => setFront(event.target.value)}
            />
            <input 
                type="url"
                placeholder="Url do back-end"
                value={back}
                onChange={(event) => setBack(event.target.value)}
            />
            {/* criar caixa de seleção para as tecnologias */}
            <Box> 
                {techs.map(tech => { 
                    return(
                        <TechBox>
                            <span>x</span>
                            <span>{tech}</span>
                        </TechBox>
                    )
                })}
                <Buttonn>Selecionar</Buttonn>
            </Box>
            <PinnedBox toggleLight={toggleLight}> 
                <span>Pinned:</span>
                <ToggleBox>
                    <LightDark onClick={() => setPinned(!pinned)} toggleLight={toggleLight}>
                        <ion-icon name="close" id="off"></ion-icon>
                        <ion-icon name="power" id="on"></ion-icon>
                        <BallSlider pinned={pinned} toggleLight={toggleLight}></BallSlider>
                    </LightDark>
                </ToggleBox>
            </PinnedBox>
            <button>Enviar</button>
            </form>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column;

    input, textarea, select { 
        width: 100%;
        height: 60px;
        border-radius: 12px;
        padding-left: 15px;
        transition: 0.2s;
        font-size: 20px;
        margin-bottom: 20px;
        border: 3px solid black;
        
        &:hover,
        &:focus { 
            background-color: #E5E3E3;
            border: 3px solid gray;
        }
    }

    textarea { 
        height: 100px;
        padding: 10px 2px 2px 15px;
    }

    select { 
        padding-right: 20px;
    }

    ion-icon { 
        width: 40px; 
        height: 40px; 
        margin-bottom: 20px;

        &:hover { 
            cursor: pointer;
        }
    }

    button { 
        width: 150px; 
        height: 70px;
        background-color: #0084F7;
        border-radius: 20px;
        color: white;
        font-size: 22px;
        font-family: "Kavoon", serif;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        transition: 0.3s;
        margin-bottom: 70px;

        &:hover { 
            cursor: pointer;
        }

        &:active { 
            width: 140px; 
            height: 60px;
        }
    }
`
const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px 5px 0px;
    background-color: white;
    border-radius: 12px;
    padding-left: 15px;
    transition: 0.2s;
    font-size: 20px;
    margin-bottom: 20px;
    border: 3px solid black;
`
const Buttonn = styled.div` 
    position: absolute; 
    bottom: 10px; 
    right: 10px;
    width: 100px; 
    height: 35px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    font-size: 15px;
    border-radius: 8px;
    background-color: #0084F7;
    color: white;
    font-family: "Kavoon", serif;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: 0.3s;

    &:hover { 
        cursor: pointer;
    }

    &:active { 
        width: 140px; 
        height: 35px;
    }
`
const TechBox = styled.div`
    width: 90px; 
    height: 25px; 
    display: flex;
    align-items: center; 
    justify-content: space-around;
    background-color: #CCCCCC; 
    color: black; 
    border-radius: 8px;
    margin-left: 10px;

    span { 
        font-size: 18px;
        font-weight: 100;
    }

    &:hover { 
        cursor: pointer;
    }
`
const PinnedBox = styled.div`
    width: 100%; 
    height: auto;
    display: flex; 
    align-items: center;
    justify-content: center; 
    color: ${props => props.toggleLight ? ("black") : ("white")};
    margin-bottom: 30px;

    span { 
        font-size: 30px;
        margin-right: 20px;
    }
`
const ToggleBox = styled.div`
    width: 90px;
    height: 40px; 
    transition: 2s;
`
const LightDark = styled.label`
    position: relative;
    width: 100%; 
    height: 100%;
    border-radius: 30px; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.toggleLight ? ("black") : ("#FEF5E3")};

    ion-icon { 
        position: absolute;
        top: 8px;
        color: red;
        width: 23px; 
        height: 23px;
    }

    ion-icon#on { 
        color: #68c365;
        margin-right: 40px;
    }

    ion-icon#off { 
        width: 25px; 
        height: 25px;
        margin-left: 40px;
    }

    &:hover { 
        cursor: pointer;
    }
`
const BallSlider = styled.div`
    position: absolute;
    z-index: 1;
    left: ${props => props.pinned ? ("6px") : ("50px")};
    width: 33px; 
    height: 33px;
    background-color: ${props => props.toggleLight ? ("white") : ("black")};
    border-radius: 50%;
    transition: 2s;
`