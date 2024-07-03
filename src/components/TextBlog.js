import styled from "styled-components";
import books from "../styles/images/books.gif";
import { useNavigate } from "react-router-dom";

export default function TextBlogScreen() { 
    const navigate = useNavigate();
    
    return(
        <Tittle>
            <p>Lorem Ipsum njjcjdcnjsdn JKAHAHAHA</p>
            <img src={books} alt="books"/>
            <span>Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA</span>
            <ion-icon name="arrow-back" onClick={() => navigate("/hello")}></ion-icon>
        </Tittle>
    )
}

const Tittle = styled.div`
    margin-left: -30px;
    margin-right: -30px;
    width: calc(100% + 60px);
    height: 300px;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    background-color: blue;
    border-radius: 0px 0px 20px 20px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px, rgba(0, 0, 0, 0.09) 0px 64px 32px;
    position: relative;

    p { 
        width: 50%;
        text-align: center;
        font-size: 30px; 
        font-weight: bold;
    }

    span { 
        width: 70%;
        font-weight: light;
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
    }

    img { 
        object-fit: cover;
        width: 100px; 
        height: 100px;
    }

    ion-icon { 
        position: absolute;
        width: 40px; 
        height: 40px;
        left: 20px; 
        top: 20px;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: white;
        }
    }
`