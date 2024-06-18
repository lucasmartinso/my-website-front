import { useEffect, useState } from "react";
import { styled } from "styled-components";
import * as projectApi from "../requests/projectApi";

export default function EditProject({id, setWriting}) { 
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
                    console.log(id);
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
                type="image"
                placeholder="Imagem"
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
            <input 
                type="checkbox"
                placeholder="Pinned"
                value={pinned}
                onChange={(event) => setPinned(event.target.value)}
                required
            />
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