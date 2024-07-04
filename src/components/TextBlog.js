import styled from "styled-components";
import books from "../styles/images/books.gif";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BaseBoard from "../pages/BaseBoard";
import ToggleContext from "../contexts/ToggleContext";
import * as blogApi from "../requests/blogApi";

export default function TextBlogScreen({id}) { 
    const { toggleLight } = useContext(ToggleContext);
    const [ blog, setBlog ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        async function fecthBlogData() { 
            const response = await blogApi.getCompleteBlog(14); 
            setBlog(response);
        } 

        fecthBlogData();
    },[])

    return(
        <Container>
            <Tittle toggleLight={toggleLight}>
                <p>{blog[0].tittle}</p>
                <img src={books} alt="books"/>
                <span>{blog[0].description}</span>
                <ion-icon name="arrow-back" onClick={() => navigate("/hello")}></ion-icon>
            </Tittle>

            <Content toggleLight={toggleLight} dangerouslySetInnerHTML={{ __html: blog[0].text }}></Content>
        
            <BaseBoard />
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const Tittle = styled.div`
    margin-left: -30px;
    margin-right: -30px;
    width: calc(100% + 60px);
    min-height: 300px;
    height: auto;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    background-color: blue;
    border-radius: 0px 0px 20px 20px;
    box-shadow: ${props => props.toggleLight ? 
        ("30px 0px 0px 20px black") : 
        ("30px 0px 0px 20px rgba(255, 255, 255, 0.9)")};
    position: relative;
    margin-bottom: 80px;

    p { 
        width: 50%;
        text-align: center;
        font-size: 45px; 
        font-weight: 700;
        color: white;
        margin-top: 50px;
    }

    span { 
        width: 60%;
        font-size: 20px;
        color: white;
        opacity: 0.8;
        font-weight: 400;
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
        margin-bottom: 50px;
    }

    img { 
        object-fit: cover;
        width: 150px; 
        height: 150px;
        margin: 15px 0px;
    }

    ion-icon { 
        position: absolute;
        width: 40px; 
        height: 40px;
        left: 40px; 
        top: 30px;

        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: white;
        }
    }
    
    @media (max-width: 1200px) { 
        p { 
            width: 70%;
        }

        span { 
            font-size: 18px;
            width: 80%;
        }

        img { 
            width: 120px; 
            height: 120px;
        }

        ion-icon { 
            left: 20px; 
            top: 20px;
        }   

        margin-bottom: 50px;
    }

    @media (max-width: 500px) { 
        p { 
            font-size: 40px;
            width: 80%;
        }

        span { 
            font-size: 17px;
            width: 85%;
        }

        img { 
            width: 100px; 
            height: 100px;
        }

        ion-icon { 
            width: 35px; 
            height: 35px;
            left: 10px; 
            top: 20px;
        }
    }
`
const Content = styled.div`
    width: 60%; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin-bottom: 80px;

    p { 
        font-size: 22px;
        text-align: left;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
        margin-top: 20px;
        transition: 1s;
        font-weight: 400;
        color: ${props => props.toggleLight ? ("black") : ("rgba(255,255,255,0.9)")};
    }

    span { 
        font-size: 30px;
        font-weight: bold;
        align-self: flex-start;
        text-decoration: underline;
        text-decoration-style: wavy;
        margin: 40px 0px 20px 0px;
    }

    img { 
        max-width: 600px;
        height: auto;
        margin: 40px 0px 20px 0px;
    }

    @media (max-width: 1200px) { 
        width: 80%;
        
        p { 
            font-size: 20px;
        }
    }

    @media (max-width: 600px) { 
        width: 100%;
        
        img { 
            margin-left: -15px;
            margin-right: -15px;
            width: calc(100% + 30px);
        }
    }
`