import { styled } from "styled-components"; 
import History from "../pages/History";
import Toggle from "../pages/Toggle";
import Tittle from "../pages/Tittle";
import EmailPopUp from "../pop-ups/EmailPopUp";
import SkillPopUp from "../pop-ups/SkillsPopUp";
import BaseBoard from "../pages/BaseBoard";
import Portfolio from "../pages/Portfolio";
import ProjectPopUp from "../pop-ups/ProjectPopUp";

export default function MainScreen() { 
    return( 
        <Container>
            <EmailPopUp />
            <SkillPopUp />
            <ProjectPopUp />

            <Tittle />
            <Toggle />
            
            <section id="history">
                <History />
            </section>
            
            <section id="portfolio">
                <Portfolio />
            </section>

            <BaseBoard />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%; 
    height: 100%;  
`