import { styled } from "styled-components";
import { Container } from "./EditProject";
import { useEffect, useState } from "react";
import * as techsApi from "../requests/techApi"; 
import * as typesApi from "../requests/typeApi";

export default function EditTechType({id,type,setEditTechType,toggleLight}) { 
    const [ name, setName ] = useState("");
    const [ error, setError ] = useState(false);

    useEffect(() => { 
        async function fecthData() { 
            try {
                if(id) { 
                    if(type === "Techs") { 
                        const response = await techsApi.getTechs();
                        setName(response[id].name);
                    } else if(type === "Tipos") { 
                        const response = await typesApi.getTypes();
                        setName(response[id].name);
                    }
                }
            } catch (error) {
                console.log(error);
                setError(error.response.data);
            }
        }

        fecthData();
    },[])

    async function sendInfo(event) {
        event.preventDefault();
        
        try {
            // if(type === "Techs") { 
            //     const response = await techsApi.getTechs();
            //     setTechs(response);
            // } else if(type === "Tipos") { 
            //     const response = await typesApi.getTypes();
            //     setTypes(response);
            // }
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <Container>
            {id != null ? (
                <ion-icon name="arrow-back-outline" onClick={() => setEditTechType(false)}></ion-icon>
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

            <button>Enviar</button>
            </form>
        </Container>
    )
}