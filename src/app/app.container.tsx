import React, { useEffect } from 'react';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';

import { AboutContainer } from './about/about.container';
import { ProjectContainer } from './projects/projects.container';
import { SkillsContainer } from './skills/skills.container';
import { FactsComponent } from './facts/facts.component';
import { FooterContainer } from './../shared/layout/footer/footer.container';

import './normalize.styles.css';
import { fetchUserAction } from './user.actions';
import { fetchProjectsAction } from './projects/projects.action';

type AppProps = {
  fetchUserAction: Function;
  fetchProjectsAction: Function;
  cancelFetchUserAction: Function;
  cancelFetchProjectsAction: Function;
  theme: string;
};

const App = ({
  fetchUserAction,
  fetchProjectsAction,
  cancelFetchUserAction,
  cancelFetchProjectsAction,
  theme,
}: AppProps) => {
  useEffect(() => {
    fetchUserAction();
    fetchProjectsAction();

    return () => {
      cancelFetchUserAction();
      cancelFetchProjectsAction();
    };
  }, [cancelFetchProjectsAction, cancelFetchUserAction, fetchProjectsAction, fetchUserAction]);

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
  cancelFetchUserAction: fetchUserAction.fulfill,
  cancelFetchProjectsAction: fetchProjectsAction.fulfill,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
