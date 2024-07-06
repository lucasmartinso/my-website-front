import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import { useContext } from "react";
import construction from "../styles/images/construction.gif";

export default function Blog() { 
    const { toggleLight } = useContext(ToggleContext);

    return(
        <Container toggleLight={toggleLight}>
            <p>Blog</p>
            <Boxes>
                <Box color="#0B66C2">
                    <p>Titulo</p>
                    <span>Description</span>
                </Box>
                <Box color="red"></Box>
            </Boxes>
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
        margin: 30px 0px 50px 0px;
        transition: 1s;
    }

    span { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-size: 30px;
    }

    img#construction { 
        width: 300px; 
        height: 300px;
    }

    @media (max-width: 500px) { 
        img#min { 
            display: none;
        }
    }
`
const Boxes = styled.div`
    width: 100%; 
    height: auto;
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;
`
const Box = styled.div`
    width: 45%; 
    height: 300px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    border-radius: 20px;
    transition: width 0.5s, height 0.5s;

    p { 
        margin: 0;
        font-family: 'Syne', sans-serif;
        font-size: 40px;
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
        color: white;
        font-weight: bold;
        transition: font-size 0.2s;
    }

    span { 
        margin-top: 30px;
        font-size: 18px;
        color: white;
        font-weight: 400;
        opacity: 0.7;
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
        transition: font-size 0.2s;
    }

    &:hover,
    &:focus { 
        cursor: pointer; 
        height: 350px; 
        width: 50%;

        p { 
            font-size: 60px;
        }

        span { 
            font-size: 25px;
            margin-top: 60px;
        }
    }
`   
const Images = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: center;
    align-items: center;

    img {}
`