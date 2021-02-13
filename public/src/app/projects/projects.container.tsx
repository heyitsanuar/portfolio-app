import React from 'react';
import { IAppState } from '@rdx/root.reducer';
import { IProject } from '@shared/models/project';
import { connect } from 'react-redux';
import { changeProjectAction } from './projects.action';
import { getProjects, getLastIndex } from './projects.reducer';
import ProjectOverviewComponent from './overview.component';
export interface IProjectsProps {
  projects: IProject[];
  lastIndex: number;
  changeProjectAction: Function;
}

const Project: React.FC<IProjectsProps> = ({ projects, lastIndex, changeProjectAction }) => {
  return (
    <ProjectOverviewComponent
      projects={projects}
      changeProjectAction={changeProjectAction}
      lastIndex={lastIndex}
    />
  );
};

const mapStateToProps = (state: IAppState) => ({
  projects: getProjects(state),
  lastIndex: getLastIndex(state),
});

const mapDispatchToProps = {
  changeProjectAction: changeProjectAction.trigger,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
