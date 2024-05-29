import { styled } from "styled-components"; 
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import { useContext } from "react";
import History from "../pages/History";
import Toggle from "../pages/Toggle";
import Tittle from "../pages/Tittle";
import EmailContext from "../contexts/EmailContext";
import EmailPopUp from "../pop-ups/EmailPopUp";
import SkillPopUp from "../pop-ups/SkillsPopUp";
import BaseBoard from "../pages/BaseBoard";

export default function MainScreen() { 
    return( 
        <Container>
            <EmailPopUp />
            <SkillPopUp />

            <Tittle />
            <Toggle />
            
            <History />
            <BaseBoard />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%; 
    height: 100%;  
`