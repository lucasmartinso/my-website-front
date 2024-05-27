import { useContext, useState } from "react";
import { styled } from "styled-components";
import EmailContext from "../contexts/EmailContext";
import video from "../styles/images/paperplane.gif";

export default function EmailPopUp() { 
    const { emailPopUp, setEmailPopUp } = useContext(EmailContext);
    const [ email, setEmail ] = useState(""); 
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ sending, setSending ] = useState(false);
    const [ shared, setShared ] = useState(false);

    async function sendEmail(event) {
        event.preventDefault(); 

        setSending(true);
        console.log("Envia email");
        const emailData = { 
            email, 
            subject, 
            message
        }

        try {
            //await function(emailData);
            setTimeout(() => {
                setSending(false);
                setShared(true);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    return( 
        <>
        {emailPopUp ? (
            <Container>
                <Box>
                    <Tittle>
                        <span>Qualquer dúvida, me envie um email por aqui!</span>
                        <a onClick={() => setEmailPopUp(false)}>X</a>
                    </Tittle>
                    
                    <form onSubmit={sendEmail}>
                    <Data>
                        <Info> 
                            <Field>
                                <span>Seu email</span>
                                <input 
                                    type="email"
                                    minLength={7}
                                    maxLength={300}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </Field>
                            

                            <Field>
                                <span>Assunto</span>
                                <input 
                                    type="text"
                                    maxLength={200}
                                    value={subject}
                                    onChange={(event) => setSubject(event.target.value)}
                                    required
                                />
                            </Field>

                            <Field>
                                <span>Mensagem</span>
                                <textarea 
                                    type="text"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    required
                                />
                            </Field>
                        </Info>
                        <Separator></Separator>
                        <Creative> 
                            <img src={video} alt="email video" />
                            <button>Enviar</button>
                        </Creative>
                    </Data>
                    </form>
                </Box>

                { sending ? (
                    "skmkxm"
                ): ("")}
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
    padding: 0px 0px 10px 10px;
`
const Tittle = styled.div`
    width: 95%; 
    display: flex; 
    justify-content: space-between;
    font-family: "Kavoon", serif;
    margin-bottom: 50px;

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
    display: flex; 
    justify-content: space-between;
`
const Info = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`
const Field = styled.div`
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: left; 
    margin-bottom: 40px;

    span { 
        font-family: "Lexend Exa", sans-serif;
        font-weight: 400;
    }

    input { 
        border: 2px solid black;
        height: 40px;
        padding-left: 10px;
        font-family: "Syne", sans-serif;
    }

    textarea { 
        border: 2px solid black;
        height: 80px;
        padding: 10px;
        font-family: "Syne", sans-serif;
    }
`
const Separator = styled.div`
    width: 1px; 
    height: 80%; 
    border: 1px solid gray;
`
const Creative = styled.div`
    width: 45%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    img { 
        width: 450px;
        height: 300px;
        object-fit: cover;
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