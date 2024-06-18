import { useEffect, useState } from "react";
import { styled } from "styled-components";
import * as projectApi from "../requests/projectApi";

export default function EditProject({id, setWriting, toggleLight}) { 
    const [ project, setProject ] = useState([]);
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
                    console.log("AQUI");
                    setName(""); 
                    setDescription("");
                    setImage(""); 
                    setWeb("");
                    setDoc("");
                    setFront(""); 
                    setBack("");
                    setPinned(false);
                    setTechs([]);
                    setType("");
                }
            } catch (error) {
                console.log(error);
            }
        } 

        fecthData();
    },[])

    return(
        <>
        <Container>
            {id != null ? (
                <ion-icon name="arrow-back-outline" onClick={() => setWriting(false)}></ion-icon>
            ) : ("")}
            <input 
                type="text"
                placeholder="Nome"
                minLength={2}
                maxLength={30}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            {/* tem que ser um seletor para o tipo */}
            {/* <input 
                type="password"
                placeholder="Senha"
                minLength={8}
                maxLength={200}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            /> */}
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
                required
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
                required
            />
            <input 
                type="url"
                placeholder="Url do back-end"
                value={back}
                onChange={(event) => setBack(event.target.value)}
                required
            />
            {/* criar caixa de seleção para as tecnologias */}
            {/* <input 
                type="password"
                placeholder=""
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            /> */}
            <PinnedBox toggleLight={toggleLight}> 
                <span>Pinned:</span>
                <ToggleBox>
                    <LightDark onClick={() => setPinned(!pinned)} toggleLight={toggleLight}>
                        <ion-icon name="power" id="on"></ion-icon>
                        <ion-icon name="close" id="off"></ion-icon>
                        <BallSlider pinned={pinned} toggleLight={toggleLight}></BallSlider>
                    </LightDark>
                </ToggleBox>
            </PinnedBox>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column;

    input, textarea { 
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

    ion-icon { 
        width: 40px; 
        height: 40px; 
        margin-bottom: 20px;

        &:hover { 
            cursor: pointer;
        }
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