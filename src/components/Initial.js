import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import bottom from "../styles/images/init_bottom.gif";
import top from "../styles/images/init_top.gif";
import assignature from "../styles/images/assignature.svg";
import { RotatingSquare } from "react-loader-spinner"


export default function InitialScreen() {
    const [ renderTop, setRenderTop ] = useState(false); 
    const [ transition, setTransition ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { 
        setTimeout(() => {
            setRenderTop(true);
        }, 4000);

        // setTimeout(() => {
        //     setTransition(true);
        // }, 6000);

        // setTimeout(() => {
        //     navigate("/hello");
        // }, 8000);
    })

    return( 
        <Container transition={transition}> 
            <Gifs renderTop={renderTop}>
                <img src={top} alt="top" id="top"/>
            </Gifs>
            <Central>
                <RotatingSquare
                    visible={true}
                    height="100"
                    width="100"
                    color="white"
                    ariaLabel="rotating-square-loading"
                    wrapperStyle={{
                        transform: 'rotate(180deg)'
                    }}
                    wrapperClass=""
                />
                <img src={assignature} alt="assignature" />
            </Central>
            <Gifs renderTop={renderTop}> 
                <img src={bottom} alt="bottom" id="bottom"/>
            </Gifs>
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    position: fixed; 
    left: 0; 
    top: 0;
    background-color: ${props => props.transition ? ("#FEF5E3") : ("#302F2F")}; 
    transition: 5s;
`
const Gifs = styled.div`
    width: 100%; 
    height: 40%; 
    display: flex; 
    justify-content: center;
    margin-top: 10px;

    img { 
        width: 50%;
    }

    img#top { 
        visibility: ${props => props.renderTop ? ("visibility"): ("hidden")};
    }

    img#bottom { 
        visibility: ${props => props.renderTop ? ("hidden"): ("visibility")};
    }

    @media (max-width: 1200px) {
        img { 
            width: 70%;
        }
    }
`
const Central = styled.div`
    width: 100%; 
    height: 15%; 
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative;

    img { 
        width: 220px;
        height: 220px;
        position: relative;
        bottom: 0;
    }
`