import { styled } from "styled-components";
import { Container } from "./EmailPopUp";
import * as projectApi from "../requests/projectApi";
import * as techApi from "../requests/techApi";
import * as typeApi from "../requests/typeApi";
import * as blogApi from "../requests/blogApi";

export default function DeletePopUp({id,name,type,config,setDeletePopUp}) {     
    async function deleting() { 
        try {
            if(type==="Projetos") {
                await projectApi.deleteProject(id,config);
            } else if(type==="Techs") { 
                await techApi.deleteTech(id,config);
            } else if(type==="Tipos") { 
                await typeApi.deleteType(id,config);
            } else if(type==="Blogs") { 
                await blogApi.deleteBlog(id,config);
            }
            window.location.reload();
            setDeletePopUp(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <Container>
            <Box>
                <ion-icon name="close-circle-outline"></ion-icon> 
                <p>Deseja deletar o {type} "{name.toUpperCase()}"?</p>
                <Buttons>
                    <button id="yes" onClick={deleting}>SIM!</button>
                    <button id="cancel" onClick={() => setDeletePopUp(false)}>CANCELAR!</button>
                </Buttons>
            </Box>
        </Container>
    )
}

const Box = styled.div`
    width: 60%; 
    height: auto; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    background-color: white;
    border-radius: 12px;
    
    ion-icon { 
        margin: 20px 0px; 
        width: 70px; 
        height: 70px;
        color: red; 
    }

    p { 
        text-align: center;
        font-size: 26px;
    }
`
const Buttons = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin: 20px 0px;

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
        margin-right: 20px;

        &:hover { 
            cursor: pointer;
        }

        &:active { 
            width: 140px; 
            height: 60px;
        }
    }

    button#cancel { 
        background-color: red;
    }
`