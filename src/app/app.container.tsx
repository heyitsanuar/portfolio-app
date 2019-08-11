import React, { useEffect } from 'react';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';
import { fetchUserAction } from './user.actions';
import { fetchProjectsAction } from './projects/projects.action';
import { fetchSkillsAction } from './skills/skills.action';

import { AboutContainer } from './about/about.container';
import { ProjectContainer } from './projects/projects.container';
import { SkillsContainer } from './skills/skills.container';
import { FactsComponent } from './facts/facts.component';
import { FooterContainer } from '@shared/layout/footer/footer.container';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';
import './normalize.styles.css';

export interface AppProps {
  fetchUserAction: Function;
  fetchProjectsAction: Function;
  fetchSkillsAction: Function;
  cancelFetchUserAction: Function;
  cancelFetchProjectsAction: Function;
  cancelFetchSkillsAction: Function;
  theme: string;
}

const App = ({
  fetchUserAction,
  fetchProjectsAction,
  fetchSkillsAction,
  cancelFetchUserAction,
  cancelFetchProjectsAction,
  cancelFetchSkillsAction,
  theme,
}: AppProps) => {
  useEffect(() => {
    fetchUserAction();
    fetchProjectsAction();
    fetchSkillsAction();

    return () => {
      cancelFetchUserAction('User fetch request cancelled.');
      cancelFetchProjectsAction('Project fetch request cancelled.');
      cancelFetchSkillsAction('Skills fetch request cancelled.');
    };
  }, [
    fetchProjectsAction,
    fetchSkillsAction,
    fetchUserAction,
    cancelFetchProjectsAction,
    cancelFetchSkillsAction,
    cancelFetchUserAction,
  ]);

  return (
    <Router history={routerHistory}>
      <ThemeProvider theme={configRootTheme(theme)}>
        <div>
          <AppRoutes />
          <section className="landing-page">
            <AboutContainer />
            <ProjectContainer />
            <SkillsContainer />
            <FactsComponent />
          </section>
          <FooterContainer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  theme: state.theme.activeTheme,
});

const mapDispatchToProps = {
  fetchUserAction: fetchUserAction.request,
  fetchProjectsAction: fetchProjectsAction.request,
  fetchSkillsAction: fetchSkillsAction.request,
  cancelFetchUserAction: fetchUserAction.fulfill,
  cancelFetchProjectsAction: fetchProjectsAction.fulfill,
  cancelFetchSkillsAction: fetchSkillsAction.fulfill,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
