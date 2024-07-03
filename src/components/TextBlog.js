import styled from "styled-components";

export default function TextBlogScreen() { 
    return(
        <Tittle>
            <p>Titulo</p>
            <img src="" alt="books"/>
            <span>Description</span>
        </Tittle>
    )
}

const Tittle = styled.div`
    width: 100%; 
    height: 200px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: wine;
`