import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function InitialScreen() { 
    const navigate = useNavigate();

    // useEffect(() => { 
    //     setTimeout(() => {
    //         navigate("/hello");
    //     }, 4000);
    // })

    return( 
        <Container> 

        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    position: fixed; 
    left: 0; 
    top: 0;
    background-color: #302F2F;
`