import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as blogApi from "../requests/blogApi";
import ToggleContext from "../contexts/ToggleContext";

export default function BlogsScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ blogs, setBlogs ] = useState([]);

    useEffect(() => { 
        async function blogsData() { 
            try {
                const response = await blogApi.getBlogs(); 
                console.log(response);
                setBlogs(response); 
            } catch (error) {
                console.log(error);
            }
        }

        blogsData();
    },[])
    
    return( 
        <Container toggleLight={toggleLight}>
            <p>Blogs</p>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    height: auto; 
    display: flex; 
    justify-content: center;

    p { 
        color: ${props => props.toggleLight ? ("black") : ("white")};
        font-family: "Oi", serif;
        font-size: 50px;
        margin: 30px 0px 90px 0px;
        transition: 1s;
    }
`