import React, { useRef } from 'react';
import { IProject } from '@shared/models/project'
import ProjectItemComponent from './item.component';
import { Waypoint } from 'react-waypoint';
import injectSheet from 'react-jss';
import './projects.styles.scss';

const projectOverviewStyles = (theme: any) => ({
  'project-animation__title': {
    backgroundColor: theme.mainPurple,
  },
});

interface IProjectOverviewProps {
  projects: IProject[];
  lastIndex: number;
  changeProjectAction: Function;
  classes?: any;
}

const ProjectOverview: React.FC<IProjectOverviewProps> = ({
  projects,
  lastIndex,
  changeProjectAction,
  classes,
}) => {
  const titleRef = useRef(null);
  const introTextRef = useRef(null);

  const handleProjectsIntroWaypoint = (): void => {
    (titleRef as any).current.classList.add('project-animation__title--animated');
    (introTextRef as any).current.classList.add('project-animation__text--animated');
  };

  return (
    <Waypoint onEnter={handleProjectsIntroWaypoint} bottomOffset="30%">
      <section id="projects" className="project page-section" data-matching-link="#link-projects">
        <div className="container">
          <div className="project__text">
            <div className="project__section-title col-xs-12 col-sm-3">
              <div
                ref={titleRef}
                id="project-animation__title"
                className={`project-animation__title ${classes['project-animation__title']}`}
              />
              <h1 className="project__text-title project__text-title--side">PROJECTS</h1>
            </div>
            <div className="project__section-text col-xs-12 col-sm-9">
              <div
                ref={introTextRef}
                id="project-animation__text"
                className="project-animation__text"
              />
              <h1 className="project__text-title mb-3">WHERE IDEAS ARE BORN</h1>
              <div className="border border--selftrough" />
              <p className="project__text-description text-white mt-2">
                You will see some of my projects below, I've always looked up best practices, and
                learned new technologies for me to master. Quite frankly, I think of myself as a
                passionate person willing to never stop learning.
              </p>
            </div>
          </div>
          <div id="project-container" className="projects">
            {projects.map((project: any) => (
              <ProjectItemComponent
                key={project._id}
                project={project}
                changePageAction={changeProjectAction}
                lastIndex={lastIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default injectSheet(projectOverviewStyles)(ProjectOverview);
