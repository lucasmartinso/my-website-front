import { useContext } from "react";
import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import { wait } from "@testing-library/user-event/dist/utils";

export default function Toggle() { 
    const { toggleLight, setToggleLight } = useContext(ToggleContext);
    const { setTransitionPhoto } = useContext(TransitionContext);

    async function change() { 
        localStorage.setItem("LIGHT",!toggleLight);
        setToggleLight(!toggleLight);
        setTransitionPhoto(true); 

        await wait(2000);
        setTransitionPhoto(false);
    }

    return(
        <ToggleBox>
            <LightDark onClick={change} toggleLight={toggleLight}>
                <ion-icon name="sunny" id="sunny"></ion-icon>
                <ion-icon name="moon" id="moon"></ion-icon>
                <BallSlider toggleLight={toggleLight}></BallSlider>
            </LightDark>
        </ToggleBox>
    )
}

const ToggleBox = styled.div`
    position: absolute;
    width: 90px;
    height: 40px; 
    right: 250px;
    top: 120px;
    transition: 2s;

    @media (max-width: 1800px) {
        right: 100px;
    }

    @media (max-width: 1200px) {
        right: 20px;
    }

    @media (max-width: 700px) {
        right: 10px;
        top: 150px;
    }
`
const LightDark = styled.label`
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