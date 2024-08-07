import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import ToggleContext from "./contexts/ToggleContext";
import TransitionContext from "./contexts/TransitionContext";
import EmailContext from "./contexts/EmailContext";
import SkillContext from "./contexts/SkillsContext";
import ProjectContext from "./contexts/ProjectContext";
import TokenContext from "./contexts/TokenContext";
import MainScreen from "./components/Main.js";
import InitialScreen from "./components/Initial";
import ProjectScreen from "./components/Projects";
import AuthScreen from "./components/Auth";
import CreateScreen from "./components/Create";
import TextBlogScreen from "./components/TextBlog.js";
import BlogsScreen from "./components/Blogs.js";

export default function App() {
  const [ toggleLight, setToggleLight ] = useState(() => {
    const saved = localStorage.getItem("LIGHT");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [ token, setToken ] = useState(localStorage.getItem("MY_TOKEN"));
  const [ transitionPhoto, setTransitionPhoto ] = useState(false);
  const [ emailPopUp, setEmailPopUp ] = useState(false);
  const [ skillPopUp, setSkillPopUp ] = useState(false);
  const [ projectPopUp, setProjectPopUp ] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleLight,setToggleLight}}>
    <TransitionContext.Provider value={{transitionPhoto,setTransitionPhoto}}>
    <EmailContext.Provider value={{emailPopUp,setEmailPopUp}}>
    <SkillContext.Provider value={{skillPopUp,setSkillPopUp}}>
    <ProjectContext.Provider value={{projectPopUp,setProjectPopUp}}> 
    <TokenContext.Provider value={{token,setToken}}>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<InitialScreen />} />
              <Route path="/hello" element={<MainScreen />} />
              <Route path="/projects/:type" element={<ProjectScreen />} />
              <Route path="/blog/:title" element={<TextBlogScreen />} />
              <Route path="/blogs" element={<BlogsScreen />} />
              <Route path="/auth" element={<AuthScreen />} />
              <Route path="/auth/crud/:type" element={<CreateScreen />} />
          </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
    </ProjectContext.Provider>
    </SkillContext.Provider>
    </EmailContext.Provider>
    </TransitionContext.Provider>
    </ToggleContext.Provider>
  );
}
