import { styled } from "styled-components";
import ToggleContext from "../contexts/ToggleContext";
import { useContext, useEffect, useState } from "react";
import * as blogApi from "../requests/blogApi";
import { useNavigate } from "react-router-dom";
import construction from "../styles/images/construction.gif";

export default function Blog() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ blogs, setBlogs ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function blogRandomData() { 
            const colors = ['rgba(0, 23, 107)','rgba(0, 2, 35)','#e0f4ea'];
            const response = await blogApi.getRandomBlogs();
            const updateColor = response.map((blog, index) => ({
                ...blog,
                color: colors[index % colors.length]
            }));
            setBlogs(updateColor);
        }

        blogRandomData();
    }, []);
    
    function sendToBlog(id,tittle) { 
        navigate(`/blog/${tittle}`, { state: { id } });
        window.location.reload();
    }

    function redirectToBlogs() { 
        navigate("/blogs"); 
        window.location.reload();
    }

    return(
        <Container toggleLight={toggleLight}>
            <p>Blog</p>
            {blogs.length > 2 ? (
                <>
                <Boxes>
                {blogs.map(blog => { 
                    return(
                        <Box key={blog.id} color={blog.color} onClick={() => sendToBlog(blog.id, blog.tittle)}>
                            <p>{blog.tittle}</p>
                            <span>{blog.description}</span>
                        </Box>
                    )
                })}
                </Boxes>
                <h onClick={redirectToBlogs}>Ver mais blogs <ion-icon name="add"></ion-icon></h>
                </>
            ) : (
                <>
                <Images>
                    <img id="construction" src={construction} alt="construction" />
                </Images>
                <span>Em breve...</span>
                </>
            )}
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    p { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 30px 0px 90px 0px;
        transition: 1s;
    }

    span { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-size: 30px;
    }

    img#construction { 
        width: 300px; 
        height: 300px;
    }

    h { 
        color: #CCCCCC;
        opacity: ${props => props.toggleLight ? 1 : 0.4};
        transition: 0.5s;
        display: flex; 
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-family: "Kavoon", serif;
        margin-top: 80px;

        ion-icon { 
            margin-left: 5px;
        }

        &:hover, 
        &:focus { 
            cursor: pointer;
            color: ${props => props.toggleLight ? ("black") : ("white")};
            opacity: 1;
        }
    }

    @media (max-width: 600px) { 
        p { 
            margin: 30px 0px 70px 0px;
        }

        h { 
            margin-top: 40px;
        }
    }
`
const Boxes = styled.div`
    width: 100%; 
    height: auto;
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;
`
const Box = styled.div`
    width: ${props => props.color === '#e0f4ea' ? ('60%') : ('40%')}; 
    min-height: 300px;
    height: auto;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    border-radius: 20px;
    transition: width 0.5s, height 0.5s;
    margin-bottom: 20px;
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
        font-size: 40px;
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
        width: ${props => props.color === '#e0f4ea' ? ('75%') : ('50%')};

        p { 
            font-size: 60px;
        }

        span { 
            font-size: 25px;
            margin-top: 60px;
        }
    }

    @media (max-width: 1200px) { 
        width: ${props => props.color === '#e0f4ea' ? ('80%') : ('45%')}; 

        &:hover,
        &:focus { 
            width: ${props => props.color === '#e0f4ea' ? ('90%') : ('50%')};
        }
    }
    

    @media (max-width: 600px) { 
        width: ${props => props.color === '#e0f4ea' ? ('100%') : ('45%')}; 

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
const Images = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: center;
    align-items: center;

    img {}
`