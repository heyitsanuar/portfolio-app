import React from 'react';

import { connect } from 'react-redux';

import { AboutComponent } from './about.component';
import { AppStateInterface } from './../../shared/rdx/root.reducer';

const About = () => {
  return <AboutComponent description="" />;
};

const mapStateToProps = (state: AppStateInterface) => ({});

const mapDispatchToProps = {};

export const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
