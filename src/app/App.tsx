import * as React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "react-jss";

import About from "features/About/About";

/*
import { ProjectContainer } from "./projects/projects.container";
import { SkillsContainer } from "./skills/skills.container";
import { FactsComponent } from "./facts/facts.component";
*/
import Footer from "shared/components/Footer";

import darkTheme from "shared/providers/theme/darkTheme";
import "./normalizeStyles.scss";

const App: React.FC = (props) => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <section className='landing-page'>
          <About />
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
