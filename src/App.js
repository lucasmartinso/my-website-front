import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import ToggleContext from "./contexts/ToggleContext";
import MainScreen from "./components/Main.js";


export default function App() {
  const [ toggleLight, setToggleLight ] = useState(true);

  return (
    <ToggleContext.Provider value={{toggleLight,setToggleLight}}>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainScreen />} />
          </Routes>
      </BrowserRouter>
    </ToggleContext.Provider>
  );
}
