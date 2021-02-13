import React from 'react';
import { IAppState } from '@rdx/root.reducer';
import { ISkill } from '@shared/models/skill';
import { connect } from 'react-redux';
import { getSkillsSelector } from './skills.reducer';
import SkillListComponent from './list.component';
export interface ISkillsContainerProps {
  skills: ISkill[];
}

const Skills = ({ skills }: ISkillsContainerProps) => {
  return <SkillListComponent skills={skills} />;
};

const mapStateToProps = (state: IAppState) => ({
  skills: getSkillsSelector(state),
});

export const SkillsContainer = connect(mapStateToProps)(Skills);
