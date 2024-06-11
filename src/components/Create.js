import { styled } from "styled-components";
import Tittle from "../pages/Tittle";

export default function CreateScreen(){
    return(
        <Container>
            <Tittle /> 
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
`