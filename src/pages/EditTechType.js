import { styled } from "styled-components";
import { Container } from "./EditProject";
import { useContext, useEffect, useState } from "react";
import * as techsApi from "../requests/techApi"; 
import * as typesApi from "../requests/typeApi";
import { configVar } from "../requests/personalApi";
import TokenContext from "../contexts/TokenContext";

export default function EditTechType({id,type,setEditTechType,toggleLight}) { 
    const { token } = useContext(TokenContext);
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
            const data = { 
                name
            };

            if(type === "Techs") { 
                if(id) await techsApi.updateTech(id,data,configVar(token));
                else await techsApi.postTech(data,configVar(token));
            } else if(type === "Tipos") { 
                if(id) await typesApi.updateType(id,data,configVar(token));
                else await typesApi.postType(data,configVar(token));
            }
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