import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { ProjectItemProps } from '@app/projects/item.component';

import { ProjectOverviewComponent } from './overview.component';

import { connect } from 'react-redux';
import { getProjects } from './projects.reducer';

export interface ProjectsContainerProps {
  projects: ProjectItemProps[];
}

const Project = ({ projects }: ProjectsContainerProps) => {
  return <ProjectOverviewComponent projects={projects} />;
};

const mapStateToProps = (state: AppStateInterface) => ({
  projects: getProjects(state),
});

export const ProjectContainer = connect(mapStateToProps)(Project);
