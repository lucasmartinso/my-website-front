import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as blogApi from "../requests/blogApi";
import ToggleContext from "../contexts/ToggleContext";
import { useNavigate } from "react-router-dom";
import BaseBoard from "../pages/BaseBoard";
import Toggle from "../pages/Toggle";

export default function BlogsScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ blogs, setBlogs ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        async function blogsData() { 
            try {
                const colors = ['rgba(0, 23, 107)','rgba(0, 2, 35)','#e0f4ea'];
                const response = await blogApi.getBlogs(); 
                const updateColor = response.map((blog, index) => ({
                    ...blog,
                    color: colors[index % colors.length]
                }));
                setBlogs(updateColor);
            } catch (error) {
                console.log(error);
            }
        }

        blogsData();
    },[]);

    function sendToBlog(id,tittle) { 
        navigate(`/blog/${tittle}`, { state: { id } });
        window.location.reload();
    }
    
    return( 
        <>
        <Toggle />
        <Container toggleLight={toggleLight}>
            <p>Blogs</p>
            <ion-icon name="arrow-back" onClick={() => navigate("/hello#blog")}></ion-icon>

            {blogs.map(blog => { 
                return(
                    <BlogBox key={blog.id} color={blog.color} onClick={() => sendToBlog(blog.id,blog.tittle)}>
                        <p>{blog.tittle}</p>
                        <span>{blog.description}</span>
                    </BlogBox>
                )
            })}
        </Container>

    <BaseBoard />
    </>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    position: relative;
    transition: 0.5s;

    p { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 80px 0px 90px 0px;
        transition: 1s;
    }

    ion-icon { 
        position: absolute;
        width: 40px; 
        height: 40px;
        left: 0px; 
        top: 20px;
        color: ${props => props.toggleLight ? ("black") : ("white")};


        &:hover, 
        &:focus { 
            cursor: pointer; 
            color: gray;
        }
    }
`
export const BlogBox = styled.div`
    width: 70%; 
    min-height: 300px;
    height: auto;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    border-radius: 20px;
    transition: width 0.5s, height 0.5s;
    margin-bottom: 50px;
    padding: 10px;

    p,span { 
        text-align: center;
        word-break: normal;
        white-space: normal;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        hyphens: auto;
    }

    p { 
        margin: 0;
        font-family: 'Syne', sans-serif;
        font-size: 50px;
        color: ${props => props.color === "#e0f4ea" ? ("rgba(0, 2, 35)") : ("white")};
        font-weight: bold;
        transition: font-size 0.2s;
    }

    span { 
        width: 90%;
        margin-top: 30px;
        font-size: 18px;
        color: ${props => props.color === "#e0f4ea" ? ("rgba(0, 2, 35)") : ("white")};
        font-weight: 400;
        opacity: ${props => props.color === "#e0f4ea" ? (0.5) : (0.7)};
        transition: font-size 0.2s;
    }

    &:hover,
    &:focus { 
        cursor: pointer; 
        height: 350px; 
        width: 50%;

        p { 
            font-size: 65px;
        }

        span { 
            font-size: 25px;
            margin-top: 60px;
        }
    }

    @media (max-width: 1200px) { 
        width: 90%; 

        &:hover,
        &:focus { 
            width: 70%;
        
            p { 
            font-size: 50px;
        }

            span { 
                font-size: 22px;
                margin-top: 60px;
            }
        }
    }
    

    @media (max-width: 600px) { 
        width: 100%; 

        p { 
            font-size: 35px;
        }

        &:hover,
        &:focus { 
            p { 
                font-size: 45px;
            }

            span { 
                margin-top: 40px;
            }
        }
    }
`