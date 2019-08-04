import React from 'react';

import { connect } from 'react-redux';

import { AboutComponent } from './about.component';
import { AppStateInterface } from './../../shared/rdx/root.reducer';

export interface AboutContainerInterface {
  description: string;
}

const About = ({ description }: AboutContainerInterface) => {
  return <AboutComponent description={description} />;
};

const mapStateToProps = (state: AppStateInterface) => ({
  description: state.user.session.description,
});

export const AboutContainer = connect(mapStateToProps)(About);
