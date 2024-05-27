import { useContext } from "react";
import { styled } from "styled-components";
import EmailContext from "../contexts/EmailContext";

export default function EmailPopUp() { 
    const { emailPopUp, setEmailPopUp } = useContext(EmailContext);
    
    return( 
        <>
        {emailPopUp ? (
            <Container onClick={() => setEmailPopUp(false)}>
                <Box>
                    <Tittle>
                        <span>Qualquer dúvida, me envie um email por aqui!</span>
                        <a onClick={() => setEmailPopUp(false)}>X</a>
                    </Tittle>
                    
                    <Data>
                        <Info> 

                        </Info>
                        <Creative> 

                        </Creative>
                    </Data>
                </Box>
            </Container>
        ) : ("")}
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%;
    position: fixed; 
    top: 0; 
    left: 0; 
    background-color: rgba(0,0,0,0.5); 
    z-index: 3;
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 80%;
    height: 60%;
    background-color: #FEF5E3;
    border-radius: 20px;
    border: 7px solid black;
    display: flex; 
    align-items: center;
    flex-direction: column; 
    padding: 0px 10px;
`
const Tittle = styled.div`
    width: 95%; 
    display: flex; 
    justify-content: space-between;
    font-family: "Kavoon", serif;

    span { 
        margin: 30px 0px 0px 10px;
        font-size: 22px;
    }

    a { 
        margin-top: 15px; 

        &:hover { 
            cursor: pointer;
        }
    }
    
`
const Data = styled.div`
    width: 90%; 
    height: 100%; 

`
const Info = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`
const Creative = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
` 