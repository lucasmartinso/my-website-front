import { styled } from "styled-components"; 
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import { useContext } from "react";
import History from "../pages/History";
import { wait } from "@testing-library/user-event/dist/utils";
import Toggle from "../pages/Toggle";
import Tittle from "../pages/Tittle";

export default function MainScreen() { 
    return( 
        <Container>
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