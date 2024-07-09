import { useEffect, useState, useContext } from "react";
import { styled } from "styled-components";
import TokenContext from "../contexts/TokenContext";
import * as blogApi from "../requests/blogApi";
import { configVar } from "../requests/personalApi";
import { Error } from "../components/Auth";

export default function EditBlog({id, setEditBlog, toggleLight}) { 
    const { token } = useContext(TokenContext);
    const [ tittle, setTittle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ text, setText ] = useState("");
    const [ error, setError ] = useState(null);
    
    useEffect(() => { 
        async function fecthData() { 
            try {
                if(id != null) {
                    const response = await blogApi.getCompleteBlog(id);
                    setTittle(response.tittle); 
                    setDescription(response.description);
                    setText(response.text); 
                }
                console.log(id);
            } catch (error) {
                console.log(error);
            }
        } 
        
        fecthData();
    },[]); 

    async function sendInfo(event) { 
        event.preventDefault();

        try {
            const blog = { 
                tittle, 
                description, 
                text
            }

            console.log(blog);
            if(!id) { 
                await blogApi.postBlog(blog,configVar(token));
            } else { 
                await blogApi.updateBlog(id,blog,configVar(token));
            }
             
            window.location.reload();
        } catch (erro) {
            setError(erro.response.data);
            console.log(erro.response.data);
        }
    }

    return(
        <>
        <Container>
            {id != null ? (
                <ion-icon name="arrow-back-outline" onClick={() => setEditBlog(false)}></ion-icon>
            ) : ("")}
            <form onSubmit={sendInfo}>
            <input 
                type="text"
                placeholder="Titulo"
                minLength={2}
                value={tittle}
                onChange={(event) => setTittle(event.target.value)}
                required
            />
            
            <input 
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
            />
            <textarea 
                type="text"
                placeholder="Descrição"
                minLength={50}
                value={text}
                onChange={(event) => setText(event.target.value)}
                required
            />
            
            {error ? (
                <Error error={error}>
                    <span><ion-icon name="close-circle" onClick={() => setError(null)}></ion-icon>{error}</span>
                </Error>
            ) : ("")}

            <button>Enviar</button>
            </form>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column;

    input, textarea, select { 
        width: 100%;
        height: 60px;
        border-radius: 12px;
        padding-left: 15px;
        transition: 0.2s;
        font-size: 20px;
        margin-bottom: 20px;
        border: 3px solid black;
        
        &:hover,
        &:focus { 
            background-color: #E5E3E3;
            border: 3px solid gray;
        }
    }

    textarea { 
        min-height: 250px;
        height: auto;
        padding: 10px 2px 2px 15px;
    }

    select { 
        padding-right: 20px;
    }

    ion-icon { 
        width: 40px; 
        height: 40px; 
        margin-bottom: 20px;

        &:hover { 
            cursor: pointer;
        }
    }

    button { 
        width: 150px; 
        height: 70px;
        background-color: #0084F7;
        border-radius: 20px;
        color: white;
        font-size: 22px;
        font-family: "Kavoon", serif;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        transition: 0.3s;
        margin-bottom: 70px;

        &:hover { 
            cursor: pointer;
        }

        &:active { 
            width: 140px; 
            height: 60px;
        }
    }
`
const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px 5px 0px;
    background-color: white;
    border-radius: 12px;
    padding-left: 15px;
    transition: 0.2s;
    font-size: 20px;
    margin-bottom: 20px;
    border: 3px solid black;
`
