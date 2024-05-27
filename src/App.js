import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import ToggleContext from "./contexts/ToggleContext";
import TransitionContext from "./contexts/TransitionContext";
import EmailContext from "./contexts/EmailContext";
import MainScreen from "./components/Main.js";
import InitialScreen from "./components/Initial";


export default function App() {
  const [ toggleLight, setToggleLight ] = useState(true);
  const [ transitionPhoto, setTransitionPhoto ] = useState(false);
  const [ emailPopUp, setEmailPopUp ] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleLight,setToggleLight}}>
    <TransitionContext.Provider value={{transitionPhoto,setTransitionPhoto}}>
    <EmailContext.Provider value={{emailPopUp,setEmailPopUp}}>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
              <Route path="/hello" element={<MainScreen />} />
          </Routes>
      </BrowserRouter>
    </EmailContext.Provider>
    </TransitionContext.Provider>
    </ToggleContext.Provider>
  );
}
