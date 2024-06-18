import { styled } from "styled-components";
import { Container } from "./EditProject";
import { useState } from "react";

export default function EditTechType({id,setEditTechType,toggleLight}) { 
    const [ name, setName ] = useState("");

    async function sendInfo() { 
        try {
            
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
            </form>
        </Container>
    )
}