import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import ToggleContext from "../contexts/ToggleContext";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jersey+25+Charted&family=Kavoon&family=Oi&family=Sedan+SC&family=Syne:wght@400..800&display=swap');
  *{
    box-sizing:border-box;
  }
  body{
    background-color: ${({ toggleLight }) => (toggleLight ? "#FEF5E3" : "#302F2F")};
    font-family: 'Syne', sans-serif;
    margin: 0px 30px;
    transition: 2s;
  }
  html{
    @media (max-width:612px) {
      width:100% !important;
    };
  }
`; 

const GlobalStylesComponent = () => {
  const { toggleLight } = useContext(ToggleContext);
  return <GlobalStyle toggleLight={toggleLight} />;
};

export default GlobalStylesComponent;
