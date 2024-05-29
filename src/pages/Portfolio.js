import { useEffect } from "react"
import { styled } from "styled-components"

export default function Portfolio() { 

    useEffect(() => { 

    },[]);

    return( 
        <Container>
            <p>Portifólio</p>
            <Box>

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
        font-family: "Oi", serif;
        font-size: 50px;
        margin-top: 30px;
    }
`
const Box = styled.div`
    width: 90%; 
    height: 100%; 
    display: flex;
`