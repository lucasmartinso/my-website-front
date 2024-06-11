import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function EditProject() { 
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ image, setImage ] = useState("");
    const [ techs, setTechs ] = useState([]);
    const [ web, setWeb ] = useState("");
    const [ doc, setDoc ] = useState("");
    const [ front, setFront ] = useState("");
    const [ back, setBack ] = useState("");
    
    useEffect(() => { 
        async function fectData() { 
            try {
                console.log("OII");
            } catch (error) {
                console.log(error);
            }
        } 
    },[])

    return(
        <>
        <Container>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%;
`