import { styled } from "styled-components"; 
import History from "../pages/History";
import Toggle from "../pages/Toggle";
import Tittle from "../pages/Tittle";
import EmailPopUp from "../pop-ups/EmailPopUp";
import SkillPopUp from "../pop-ups/SkillsPopUp";
import BaseBoard from "../pages/BaseBoard";
import Portfolio from "../pages/Portfolio";
import ProjectPopUp from "../pop-ups/ProjectPopUp";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ProjectContext from "../contexts/ProjectContext";
import Blog from "../pages/Blog";

export default function MainScreen() { 
    const { projectPopUp } = useContext(ProjectContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    return( 
        <Container>
            <EmailPopUp />
            <SkillPopUp 
                technologies={[]}
                setTechnologies={[]}
                edit={false}
            />
            {projectPopUp ? (
                <ProjectPopUp id={id} route={'hello'}/>
            ) : ("")}
            

            <Tittle />
            <Toggle />
            
            <section id="history">
                <History />
            </section>
            
            <section id="portfolio">
                <Portfolio id={id}/>
            </section>

            <section id="blog" >
                <Blog />
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