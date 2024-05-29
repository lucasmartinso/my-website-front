import { styled } from "styled-components"
import love from "../styles/images/baseboard.png";
import { useContext } from "react";
import ToggleContext from "../contexts/ToggleContext";

export default function BaseBoard() { 
    const { toggleLight } = useContext(ToggleContext);

    return(
        <Container toggleLight={toggleLight}>
            <Impact>
                <img src={toggleLight ? love : ""} />  
            </Impact>
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: black;
`
const Impact = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex; 
    justify-content: space-around;
`