import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import MainScreen from "./components/Main.js"


export default function App() {
  const [ toggleLight, setToggleLight ] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainScreen />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
