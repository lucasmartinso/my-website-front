import { styled } from "styled-components";

export default function Tittle() { 
    return( 
        <Container>
            
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: 80px; 
    background-color: black;
    position: fixed; 
    left: 0; 
    top: 0;
    z-index: 2;
    border-radius: 0px 0px 8px 8px;
`
const Guide = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;

    span { 
        margin-left: 5px;
    }
`
const Tags = styled.div`
    height: 100%; 
    display: flex; 
    align-items: center
`
const Tag = styled.div`
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
`