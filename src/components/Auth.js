import { useState } from "react";
import { styled } from "styled-components";

export default function AuthScreen() { 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    async function sendAuth() { 
        //const token = await sendAuth

    }

    return(
        <Container>
            <Box>
                <Contains>
                    <p>Autorização.</p>
                    <form onSubmit={sendAuth}>
                        <input 
                            type="email"
                            placeholder="Email"
                            maxLength={200}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <input 
                            type="password"
                            placeholder="Senha"
                            maxLength={200}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <button>Entrar</button>
                    </form>
                </Contains>
                
            </Box>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 50%; 
    height: 50%; 
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.9;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
const Contains = styled.div`
    width: 80%; 
    height: 80%; 
    display: flex; 
    flex-direction: column;
    justify-content: space-between;

    form { 
        width: 100%; 
        height: 100%;
        margin-top: 40px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    p { 
        color: white;
        font-family: "Kavoon", serif;
        font-size: 40px;
        text-decoration: underline;
    }

    input { 
        width: 100%;
        height: 60px;
        border-radius: 12px;
        padding-left: 15px;
        transition: 0.2s;
        font-size: 20px;
        
        &:hover,
        &:focus { 
            background-color: #E5E3E3;
            border: 3px solid gray;
        }
    }

    button { 
        width: 200px; 
        height: 70px;
        background-color: #0084F7;
        border-radius: 20px;
        color: white;
        font-size: 22px;
        font-family: "Kavoon", serif;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        transition: 0.3s;

        &:hover { 
            cursor: pointer;
        }

        &:active { 
            width: 180px; 
            height: 60px;
        }
    }
`