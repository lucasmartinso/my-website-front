import { styled } from "styled-components"; 
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import { useContext } from "react";
import History from "../pages/History";
import Toggle from "../pages/Toggle";
import Tittle from "../pages/Tittle";
import EmailContext from "../contexts/EmailContext";
import EmailPopUp from "../pop-ups/EmailPopUp";

export default function MainScreen() { 
    return( 
        <Container>
            <EmailPopUp />
            <Tittle />
            <Toggle />
            
            <History />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%; 
    height: 100%;  
`