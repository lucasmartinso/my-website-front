import styled from "styled-components";
import books from "../styles/images/books.gif";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import BaseBoard from "../pages/BaseBoard";
import ToggleContext from "../contexts/ToggleContext";

export default function TextBlogScreen() { 
    const { toggleLight } = useContext(ToggleContext);
    const [ blog, setBlog ] = useState([]);
    const navigate = useNavigate();
    const text = `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna a arcu euismod vehicula. Vivamus lacinia leo nec magna pretium, sed euismod ligula ultricies. Ut et semper nisi. In ac malesuada ligula. Maecenas ultricies lacus id diam fermentum, ut cursus est dapibus. Vivamus nec velit vel turpis fermentum aliquet a eu lacus.</p>
        <img src="https://img.elo7.com.br/product/zoom/2FA8C62/adesivo-decorativo-parede-fone-som-e-musica-quarto.jpg" alt="Placeholder Image 1"/>
        <p>Praesent facilisis tortor nec libero ultricies, a ullamcorper nisl faucibus. Nulla facilisi. Phasellus dictum orci ac nisi tempor, at hendrerit lacus dapibus. Integer non turpis urna. Ut eget quam urna. Nulla non magna id libero fermentum suscipit. Donec tincidunt arcu a felis sodales, a hendrerit felis condimentum.</p>
        <p>Mauris efficitur metus vitae nulla vestibulum feugiat. Phasellus nec magna quis libero ultrices vulputate. Vivamus dignissim orci a velit placerat, at egestas erat vehicula. Suspendisse euismod nisl quis magna mollis, eu efficitur risus efficitur. Suspendisse potenti.</p>
        <p>Sed vitae lorem et lorem sodales tempus. Integer convallis nulla ut orci scelerisque, at varius leo dictum. Quisque suscipit metus in sapien volutpat, ut auctor mauris malesuada. Morbi nec urna vitae nunc fermentum placerat. Duis convallis quam vel ante malesuada, at sollicitudin purus sagittis.</p>
        <p>Phasellus feugiat sapien et bibendum tincidunt. Proin sed dui a nisi accumsan tempus. Curabitur efficitur risus vel elit dictum, nec consequat tortor consectetur. Proin pharetra, turpis eget convallis elementum, odio sem ultrices lectus, eget fringilla neque erat sit amet lectus.</p>
        <p>Aliquam erat volutpat. Integer consectetur ipsum sit amet odio elementum cursus. Vestibulum eu turpis nec velit vehicula scelerisque. Duis tempus enim at tincidunt tempus. Nullam dictum libero vitae dui consectetur, at facilisis lorem sodales. Nulla euismod, ex eget mollis faucibus, urna nunc sagittis magna, nec dignissim leo dui in dui.</p>
        <p>Vestibulum quis ligula eros. Aenean ut feugiat arcu. Curabitur sed risus velit. Quisque id sapien sem. Proin quis sapien et urna sollicitudin porttitor sit amet in dui. Proin nec arcu vitae tortor cursus facilisis. Suspendisse potenti. Aliquam erat volutpat. Phasellus blandit lacus sed justo cursus, non malesuada libero pellentesque.</p>
        <p>Donec quis magna ac quam tempus varius. Vivamus ultricies velit id erat interdum, ut vestibulum justo tincidunt. Donec vel nulla bibendum, gravida sapien ut, porttitor neque. Proin rutrum felis orci, at consectetur nisl pellentesque vel. Vivamus scelerisque, augue sed vehicula dapibus, ipsum libero aliquam felis, eget congue sapien felis id sapien.</p>
        <p>Morbi non augue sit amet odio accumsan aliquam. Sed varius arcu nec enim tincidunt convallis. Fusce id fermentum lacus, at scelerisque metus. Duis sollicitudin nisi et lectus facilisis feugiat. Donec blandit felis vitae lectus ultrices gravida. Ut accumsan orci ac augue fermentum, in vulputate magna ullamcorper.</p>
        <img src="https://img.elo7.com.br/product/zoom/2FA8C62/adesivo-decorativo-parede-fone-som-e-musica-quarto.jpg" alt="Placeholder Image 9"/>
        <p>Nam vulputate massa vel venenatis porttitor. Nullam sagittis euismod nisl, sit amet laoreet risus malesuada in. Vivamus gravida ligula sed ligula posuere, in ornare libero vestibulum. Donec consequat lacus id mauris sodales, et malesuada libero pulvinar. Phasellus sed urna eget magna fermentum pretium. In consectetur odio id risus pellentesque, ac tempor lectus pulvinar.</p>
    `

    return(
        <Container>
            <Tittle toggleLight={toggleLight}>
                <p>Lorem Ipsum njjcjdcnjsdn JKAHAHAHA</p>
                <img src={books} alt="books"/>
                <span>Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA Lorem Ipsum njjcjdcnjsdn JKAHAHAHA</span>
                <ion-icon name="arrow-back" onClick={() => navigate("/hello")}></ion-icon>
            </Tittle>

            <Content toggleLight={toggleLight} dangerouslySetInnerHTML={{ __html: text }}></Content>
        
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

    @media (max-width: 500px) { 
        width: 100%;
        
        img { 
            margin-left: -15px;
            margin-right: -15px;
            width: calc(100% + 30px);
        }
    }
`