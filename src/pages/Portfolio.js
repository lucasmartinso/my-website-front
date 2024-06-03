import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import * as projectApi from "../requests/projectApi";
import foto1 from "../styles/images/foto1.png";

export default function Portfolio() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ projects, setProjects ] = useState([]);

    useEffect(() => { 
        async function projectData() { 
            try {
                const response = await projectApi.getProjects(); 
                setProjects(projects);
            } catch (error) {
                console.log(error); 
            }
        }

        projectData();
    },[]);

    return( 
        <Container toggleLight={toggleLight}>
            <p>Portifólio</p>
            <Box>
                <Project>
                    <img src={foto1} alt="id" />
                    <Circle>
                        <span>Lucao</span>
                        <Separator></Separator>
                        <a>Web</a>
                    </Circle>
                </Project>
            </Box>
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
const Box = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`
const Project = styled.div`
    width: 150px; 
    height: 200px; 
    margin: 0px 10px 30px 20px;

    img { 
        width: 150px; 
        height: 200px; 
        border-radius: 12px;
        position: absolute;
    }

    &:hover, 
    &:focus {
        cursor: pointer;
    }
`
const Circle = styled.div`
    width: 90px;
    height: 90px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    border-radius: 50%; 
    background-color: red;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    span { 
        margin-bottom: 5px;
    }
`
const Separator = styled.div`
    width: 90%; 
    height: 1px;
    border: 1px solid gray;
    margin-bottom: 5px;
`