import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import { useContext } from "react";

export default function Blog() { 
    const { toggleLight } = useContext(ToggleContext);

    return(
        <Container toggleLight={toggleLight}>
            <p>Blog</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    p { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 20px 0px 50px 0px;
        transition: 1s;
    }
`