import { styled } from "styled-components"
import { useState, useEffect, useContext } from "react";
import foto1 from "../styles/images/foto1.png";
import foto2 from "../styles/images/foto2.jpeg";
import tvColor from "../styles/images/color.gif";
import tvBlack from "../styles/images/black_white.gif";
import ToggleContext from "../contexts/ToggleContext";
import TransitionContext from "../contexts/TransitionContext";
import SkillContext from "../contexts/SkillsContext";
import * as techApi from "../requests/techApi";

export default function History() { 
    const { toggleLight } = useContext(ToggleContext);
    const { transitionPhoto } = useContext(TransitionContext);
    const { setSkillPopUp } = useContext(SkillContext);
    const description = [
        "Sou Lucas...",
        "Desenvolvedor Full Stack, com experiência em desenvolvimento de aplicações web front-end e back-end.",
        "Atualmente estudante da UFJF no curso de Ciência da Computação.",
        "Apaixonado pelos estudos e pela resolução de problemas por meio da tecnologia, que tenham impacto efetivo na vida real."
    ];
    const allMe = [ 
        "A minha história com a tecnologia começa desde a cedo, mais precisamente na infância, quando aos 9 anos ganhei meu primeiro console, o PS2. A paixão por tecnologia foi instantânea e junto a essa veio a curiosidade de como aquela máquina funcionava.", 
        "Esse fascínio, ao longo da trajetória escolar foi se afinizando pelo meu gosto nas disciplinas de exatas e, o também interesse na resolução de problemas de raciocínio lógico.", 
        "Todavia, confrontou-se diretamente com uma outra afinidade minha, os carros, o que me levou a escolha do curso de engenharia mecânica. Nesse, ao realizar as primeiras disciplinas obrigatórias, me deparei logo com a disciplina de algoritmos, que foi um divisor de águas para que eu, cada vez mais, buscasse sobre tecnologia e computação, fazendo assim com que eu tomasse a decisão vital na minha vida, a de migrar para área tech, já que era aquilo que queria para minha vida, e enfim realizei a troca para curso de ciência da computação, na própria UFJF, que estou finalizando atualmente.", 
        "Nesse meio tempo realizei um bootcamp, que acelerou a obtenção de habilidades na área, tanto da parte técnica, quanto da pessoal.",
        "Além de outras atividades extracurriculares ao longo da graduação, seja assumindo cargos de liderança na Empresa Jr., seja atuando em projetos de Iniciação Científica, como o de 'Modelagem computacional no tratamento de câncer por hipertermia usando nanopartículas.'"
    ];
    const [ slowText, setSlowText ] = useState([]);
    const [ techs, setTechs ] = useState(''); 
    const [ slideEffect, setSlideEffect ] = useState(true);

    useEffect(async () => {
        async function fetchData() {
            try {
                const techx = await techApi.getTechs();
                const techNames = techx.map(tech => tech.name).join('***');
                setTechs(techNames);
    
                const textArrayData = await description.map(element => element.split(''));
    
                await textArrayData.forEach((textItem, textIndex) => {
                    textItem.forEach((letter, letterIndex) => {
                        setTimeout(() => {
                            setSlowText(prev => {
                                const newSlowText = [...prev];
                                if (!newSlowText[textIndex]) {
                                    newSlowText[textIndex] = '';
                                }
                                newSlowText[textIndex] += letter;
                                return newSlowText;
                            });
                        }, 75 * (letterIndex + textIndex / 2 * textItem.length));
                    });
                });
                
                setTimeout(() => {
                    setSlideEffect(false);
                }, 70000);
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchData();
    }, []); 

    return( 
        <>
        <Resume>
            <Abstract toggleLight={toggleLight}>
                {slowText.map((text, index) => (
                    <span key={index}>{text}</span>
                ))}
            </Abstract>

            <ImageBox toggleLight={toggleLight} transitionPhoto={transitionPhoto}>
                {!transitionPhoto ? ( 
                    <img src={toggleLight ? foto2 : foto1} alt="profile_photo"/>
                ): ( 
                    <img src={toggleLight ? tvBlack : tvColor} alt="transition_picute"/>
                )
                }
            </ImageBox>
        </Resume>

        <About toggleLight={toggleLight}> 
            <p>HISTÓRIA</p>
            {allMe.map(paragraph => { 
                return <span>{paragraph}</span>
            })}
        </About> 

        <Skills toggleLight={toggleLight} slideEffect={slideEffect}> 
            <a>HARD-SKILLS <ion-icon name="information-circle" onClick={() => setSkillPopUp(true)}></ion-icon></a>
            <BoxSkills> 
                <Skiil slideEffect={slideEffect}>
                    <p id="right">{techs.toUpperCase()}</p>
                    <p id="left">{techs.toUpperCase()}</p>
                </Skiil>
            </BoxSkills>
        </Skills>
        </>
    )
}

const Resume = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 220px; 
`
const Abstract = styled.div`
    width: 40%; 
    height: 100%;
    display: flex; 
    justify-content: center;
    flex-direction: column;

    span { 
        width: 80%;
        margin-top: 20px;
        font-size: 22px;
        //font-family: "Kavoon", serif;
        font-family: "Space Mono", monospace;
        font-weight: 700;
        text-align: left;
        text-overflow: ellipsis;
        border-right: 0.15em solid gray;
        transition: color linear 3s;
        color: ${props => props.toggleLight ? ("black") : ("white")}
    } 

    span:after { 
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: blink .7s infinite;
    } 

    @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
    }

    @media (max-width: 1200px) {
        width: 60%;
        
        span { 
            width: 80%;
            margin-top: 15px;
            font-size: 20px;
        }
    } 

    @media (max-width: 700px) {
        span { 
            width: 80%;
            margin-top: 15px;
            font-size: 18px;
        }
    }

    @media (max-width: 500px) {
        span { 
            width: 95%;
            margin-top: 15px;
            font-size: 14px;
        }
    }
`
const ImageBox = styled.div`
    width: 40%; 
    height: 50%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    transition: 3s; 

    img { 
        width: 500px; 
        height: 500px;
        object-fit: cover;
        border-radius: 20px;
        transition: 0.5s;
        box-shadow: ${props => {
            if (props.transitionPhoto) {
              if (props.toggleLight) {
                return `
                  rgba(48, 47, 47, 0.8) 5px 5px, 
                  rgba(48, 47, 47, 0.5) 10px 10px, 
                  rgba(48, 47, 47, 0.3) 15px 15px, 
                  rgba(48, 47, 47, 0.2) 20px 20px, 
                  rgba(48, 47, 47, 0.1) 25px 25px
                `;
              } else {
                return `
                  rgba(240, 46, 170, 0.4) 5px 5px, 
                  rgba(240, 46, 170, 0.3) 10px 10px, 
                  rgba(240, 46, 170, 0.2) 15px 15px, 
                  rgba(240, 46, 170, 0.1) 20px 20px, 
                  rgba(240, 46, 170, 0.05) 25px 25px
                `;
              }
            } else {
              if (props.toggleLight) {
                return `
                    rgba(48, 47, 47, 0.8) 5px 5px, 
                    rgba(48, 47, 47, 0.5) 10px 10px, 
                    rgba(48, 47, 47, 0.3) 15px 15px, 
                    rgba(48, 47, 47, 0.2) 20px 20px, 
                    rgba(48, 47, 47, 0.1) 25px 25px
                `;
              } else {
                return `
                  rgba(162, 157, 157, 0.7) 5px 5px, 
                  rgba(162, 157, 157, 0.5) 10px 10px, 
                  rgba(162, 157, 157, 0.3) 15px 15px, 
                  rgba(162, 157, 157, 0.2) 20px 20px, 
                  rgba(162, 157, 157, 0.1) 25px 25px
                `;
              }
            }
          }};
    }

    @media (max-width: 1200px) {
        img { 
            width: 300px; 
            height: 400px;
        }
    }
    
    @media (max-width: 1000px) {
        width: 50%;

        img { 
            width: 90%; 
            height: 400px;
        }
    }

    @media (max-width: 700px) {
        img { 
            width: 95%; 
            height: 320px;
        }
    }

    @media (max-width: 500px) {
        img { 
            width: 100%; 
            height: 320px;
        }
    }
`
const About = styled.div`
    width: 100%; 
    height: 100%;
    margin-top: 100px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    color: ${props => props.toggleLight ? ("black") : ("white")}; 

    p { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-bottom: 50px;
    } 

    span { 
        width: 50%;
        margin-bottom: 15px;
        font-family: "Syne", sans-serif;
        font-weight: 400;
        font-size: 20px;
    }

    @media (max-width: 1200px) {
        span { 
            width: 80%;
            font-size: 18px;
        }
    }

    @media (max-width: 700px) {
        span { 
            width: 80%;
            font-size: 17px;
        }
    }

    @media (max-width: 500px) {
        p { 
            font-size: 45px;
        }
    }

    @media (max-width: 400px) {
        p { 
            font-size: 40px;
        }
    }
`
const Skills = styled.div`
    width: 100%; 
    height: 100%;
    margin-top: 100px;
    padding-bottom: 100px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    color: ${props => props.toggleLight ? ("black") : ("white")}; 

    a { 
        font-family: "Oi", serif;
        font-size: 50px;
        margin-bottom: ${props => props.slideEffect ? ("50px") : ("10px")};
        display: flex; 
        align-items: center;
        transition: margin-bottom 5s;
        text-align: center;

        ion-icon { 
            margin: 0px 0px 7px 10px;
            color: ${props => props.toggleLight ? ("#CCCCCC") : ("rgba(255,255,255,0.5)")};
            transition: 1s;

            &:hover, 
            &:focus { 
                cursor: pointer;
                color: ${props => props.toggleLight ? ("black") : ("white")};
            }
        }
    }

    @media (max-width: 800px) {
        a { 
            font-size: 45px;
        }
    }

    @media (max-width: 700px) {
        a { 
            font-size: 40px;
        }

        ion-icon { 
            margin: 0px 0px 7px 2px;
            width: 50px; 
            height: 50px;
        }
    }

    @media (max-width: 500px) {
        ion-icon { 
            margin: 0px 0px 0px 0px;
            width: 50px; 
            height: 50px;
        }
    }
`
const BoxSkills = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: left;
`
const Skiil = styled.div`
    width: 100%;
    height: 100%; 
    transition: 3s;
    overflow-x: hidden;

    p { 
        width: 100%;
        font-family: "Syne", sans-serif;
        font-weight: bold;
        font-size: 22px; 
        //animation-iteration-count: infinite;
        overflow: hidden;
        margin-bottom: ${props => props.slideEffect ? ("15px") : ("0px")};        
    }

    p#right { 
        animation-name: slidein-right;
        animation-duration: 70s;
        visibility: ${props => props.slideEffect ? ("visible") : ("hidden")};
        white-space: nowrap;
    }

    p#left { 
        animation-name: slidein-left;
        animation-duration: 60s;
        white-space: pre-wrap;  
        word-wrap: ${props => props.slideEffect ? ("default") : ("break-word")};  
        word-break: ${props => props.slideEffect ? ("default") : ("break-word")}; 
        overflow-wrap: ${props => props.slideEffect ? ("default") : ("break-word")};
        white-space: ${props => props.slideEffect ? ("nowrap") : ("default")};
        display: -webkit-box;     
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 3;
        line-clamp: 3;
    }

    @keyframes slidein-right {
        from {
            margin-left: 0%;
            width: 100%;
        }
    
        to {
            margin-left: 100%;
            width: 300%;
        }
    }

    @keyframes slidein-left {
        from {
            margin-left: 100%;
            width: 300%;
        }
    
        to {
            margin-left: 0%;
            width: 100%;
        }
    }

    @media (max-width: 1200px) {
        p#left { 
            animation-duration: 45s;
        }
    }
`