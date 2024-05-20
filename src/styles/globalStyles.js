import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jersey+25+Charted&family=Kavoon&family=Oi&family=Sedan+SC&family=Syne:wght@400..800&display=swap');
  *{
    box-sizing:border-box;
  }
  body{
    background-color:#FEF5E3;
    font-family: 'Syne', sans-serif;
    margin: 0px 30px;
  }
  html{
    @media (max-width:612px) {
      width:100% !important;
    };
  }
`;

export default GlobalStyle;
