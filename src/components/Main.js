import { styled } from "styled-components"; 
import ToggleContext from "../contexts/ToggleContext";
import { useContext, useState } from "react";

export default function MainScreen() { 
    const {toggleLight, setToggleLight} = useContext(ToggleContext);
    const [ change, setChange ] = useState(false);
    console.log(change);

    return( 
        <Container>
            <ToggleBox>
                <LightDark onClick={() => setChange(!change)}>
                    <ion-icon name="sunny" id="sunny"></ion-icon>
                    <ion-icon name="moon" id="moon"></ion-icon>
                    <BallSlider change={change}></BallSlider>
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
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;

    ion-icon { 
        color: #ffd700;
        width: 20px; 
        height: 20px;
    }

    // ion-icon#sunny { 
    //     color: #ffd700;
    //     width: 20px; 
    //     height: 20px;
    // }
    
    // ion-icon#moon { 
    //     color: white;
    //     width: 20px; 
    //     height: 20px;
    // }

    &:hover { 
        cursor: pointer;
    }
`
const BallSlider = styled.div`
    position: absolute;
    z-index: 1;
    left: ${props => props.change ? ("6px") : ("50px")};
    width: 33px; 
    height: 33px;
    background-color: white;
    border-radius: 50%;
    transition: 2s;
`