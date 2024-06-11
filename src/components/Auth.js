import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import TokenContext from "../contexts/TokenContext";
import * as personalApi from "../requests/personalApi";

export default function AuthScreen() { 
    const { setToken } = useContext(TokenContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(false);
    const navigate = useNavigate();

    async function sendAuth(event) { 
        event.preventDefault();

        try {
            const personalData = { 
                email,
                password
            }
            const { token } = await personalApi.auth(personalData);
            localStorage.setItem("MY_TOKEN",token);
            setToken(token);
            console.log(token);
            navigate("/auth/crud/Projetos");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return(
        <Container>
            <House>
                <ion-icon name="home" onClick={() => navigate("/hello")}></ion-icon>
            </House>
            <Box error={error}>
                <Contains>
                    <p>Autorização<span>.</span></p>
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
                        {error ? (
                            <Error error={error}>
                                <span><ion-icon name="close-circle" onClick={() => setError(false)}></ion-icon>Usuário ou senha incompatíveis</span>
                            </Error>
                        ) : ("")}
                        
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
    flex-direction: column;
`
const House = styled.div`
    width: 75%; 
    height: 5%; 
    display: flex; 
    justify-content: right;

    ion-icon { 
        width: 70px; 
        height: 70px;
        transition: 1s;

        &:hover, 
        &:focus { 
            cursor: pointer;
            color: gray;
        }
    }
`
const Box = styled.div`
    width: 50%; 
    height: ${props => props.error ? ("60%") : ("50%")}; 
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.9;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin-top: 50px;
    transition: 1s;

    @media (max-width: 1200px) { 
        width: 70%;
    }

    @media (max-width: 900px) { 
        width: 80%;
    }
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

        span { 
            font-size: 60px;
        }
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
const Error = styled.div`
    width: ${props => props.error ? ("90%") : ("0%")}; 
    height: ${props => props.error ? ("20%") : ("0%")}; 
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: red;
    border-radius: 12px;
    transition: 10s;

    span { 
        display: flex; 
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 20px;

        ion-icon {  
            width: 26px; 
            height: 26px;
            margin-right: 5px;

            &:hover { 
                cursor: pointer;
            }
        }
    }
`