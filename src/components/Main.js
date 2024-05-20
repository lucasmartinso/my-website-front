import { styled } from "styled-components"; 
import ToggleContext from "../contexts/ToggleContext";
import { useContext, useState } from "react";

export default function MainScreen() { 
    const {toggleLight, setToggleLight} = useContext(ToggleContext);

    return( 
        <Container>
            <ToggleBox>
                <LightDark onClick={() => setToggleLight(!toggleLight)} toggleLight={toggleLight}>
                    <ion-icon name="sunny" id="sunny"></ion-icon>
                    <ion-icon name="moon" id="moon"></ion-icon>
                    <BallSlider toggleLight={toggleLight}></BallSlider>
                </LightDark>
            </ToggleBox>
        </Container>
    )
}

export const Container = styled.div`
    position: relative;
    width: 100%; 
    height: 100%;  
`
export const ToggleBox = styled.div`
    position: absolute;
    width: 90px;
    height: 40px; 
    right: 20px;
    top: 50px;
`
export const LightDark = styled.label`
    position: relative;
    width: 100%; 
    height: 100%;
    border-radius: 30px; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.toggleLight ? ("black") : ("#FEF5E3")};

    ion-icon { 
        color: #ffd700;
        width: 20px; 
        height: 20px;
    }

    ion-icon#sunny { 
        color: orange;
        width: 23px; 
        height: 23px;
    }

    &:hover { 
        cursor: pointer;
    }
`
const BallSlider = styled.div`
    position: absolute;
    z-index: 1;
    left: ${props => props.toggleLight ? ("6px") : ("50px")};
    width: 33px; 
    height: 33px;
    background-color: ${props => props.toggleLight ? ("white") : ("black")};
    border-radius: 50%;
    transition: 2s;
`