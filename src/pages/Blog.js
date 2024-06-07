import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import { useContext } from "react";
import construction from "../styles/images/construction.gif";
import maintance from "../styles/images/maintance.svg";

export default function Blog() { 
    const { toggleLight } = useContext(ToggleContext);

    return(
        <Container toggleLight={toggleLight}>
            <p>Blog</p>
            <Images>
                <img src={maintance} alt="maintance" />
                <img id="construction" src={construction} alt="construction" />
            </Images>
            <span>Em breve...</span>
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
        margin: 30px 0px 0px 0px;
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
`
const Images = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: center;
    align-items: center;
`