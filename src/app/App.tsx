import * as React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "react-jss";

import About from "features/About/About";
import Facts from "features/Facts/Facts";
import Skills from "features/Skills/Skills";
import Projects from "features/Projects/Projects";
import { Header, Footer } from "app/components/Layout";

/*
import { ProjectContainer } from "./projects/projects.container";
import { SkillsContainer } from "./skills/skills.container";
*/

import { user, skills } from "data";
import darkTheme from "shared/providers/theme/darkTheme";
import "./normalizeStyles.scss";
import "./appStyles.scss";

const App: React.FC = (props) => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <section className='landing-page'>
          <About description={user.description} />
          <Projects />
          <Skills skills={skills} />
          <Facts />
          {/*
          <AboutContainer /> 
          <ProjectContainer />
          <SkillsContainer />
          <FactsComponent />
          */}
        </section>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
