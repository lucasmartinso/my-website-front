import { styled } from "styled-components";
import Tittle from "../pages/Tittle";
import { useContext, useState } from "react";
import ToggleContext from "../contexts/ToggleContext";
import Toggle from "../pages/Toggle";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateScreen(){
    const types = ['Projetos','Blog','Techs','Tipos'];
    const { type } = useParams();
    const [ selected, setSelected ] = useState(type);
    const { toggleLight } = useContext(ToggleContext);
    const navigate = useNavigate();

    function redirect(type) { 
        setSelected(type);
        navigate(`/auth/crud/${type}`);
    }

    return(
        <>
        <Tittle /> 
        <Toggle />

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
            <Header>
                <p>{selected.toLocaleUpperCase()}</p>
            </Header>
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

    p { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-bottom: 50px;
    } 
`