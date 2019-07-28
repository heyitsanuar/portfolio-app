import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';

import { connect } from 'react-redux';

import { SkillListComponent } from './list.component';

type SkillsContainerProps = {};

const Skills = (props: SkillsContainerProps) => {
  return <SkillListComponent />;
};

const mapStateToProps = (state: AppStateInterface) => ({});

const mapDispatchToProps = {};

export const SkillsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Skills);
