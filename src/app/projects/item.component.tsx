import React, { useRef } from 'react';
import { IProject } from '@shared/models/project';
import ProjectTechnologyComponent from './technology.component';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';
import injectSheet from 'react-jss';

export interface IProjectItemProps {
  project: IProject;
  lastIndex: number;
  changePageAction: Function;
  classes?: any;
}

const projectItemStyles = (theme: any) => ({
  project__info: {
    backgroundColor: theme.mainRed,
  },
  'project-animation__description': {
    backgroundColor: theme.mainPurple,
  },
  '@media (min-width: 1200px)': {
    'project-animation__info': {
      backgroundColor: theme.mainRed,
    },
  },
});

const ProjectItem: React.FC<IProjectItemProps> = ({ project, lastIndex, changePageAction, classes }) => {
  const projectRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectDescriptionRef = useRef(null);
  const isHiddenClass = project.isInitial ? '' : 'project-item--hidden';

  const handleProjectAnimation = (): void => {
    (projectRef as any).current.classList.add('project-animation__info--animated');
  };

  const handleTechnologiesAnimation = (): void => {
    (technologiesRef as any).current.classList.add('project__icons--animated');
    (projectDescriptionRef as any).current.classList.add(
      'project-animation__description--animated',
    );
  };

  const handleChangePage = (e: any, direction: string): void => {
    e.preventDefault();
    changePageAction({ index: project._id, direction });
  };

  return (
    <Waypoint onEnter={handleProjectAnimation} bottomOffset="25%">
      <div className={classNames('project-item', isHiddenClass)}>
        <div className={`project__info ${classes.project__info}`}>
          <div
            ref={projectRef}
            id="project-animation__info"
            className={`project-animation__info ${classes['project-animation__info']}`}
          />
          <div className="project__oversight">
            <h4 className="project__title">{project.title}</h4>
            <div className="border" style={{ width: 100, height: 2 }} />
            <p className="text-white mt-15">{project.description}</p>
            <div className="d-flex mt-3">
              <a
                href={project.links.webpage}
                target="blank"
                className="btn btn__link"
                style={{ marginLeft: 0 }}
              >
                View
              </a>
              <a href={project.links.repo} target="blank" className="btn btn__link">
                Git Repo
              </a>
            </div>
          </div>
          <picture className="project__picture">
            <source srcSet={project.images.hq} media="(min-width: 992px)" />
            <source srcSet={project.images.mq} media="(min-width: 768px)" />
            <img className="image lazyload" srcSet={project.images.lq} alt="Restaurant Project" />
          </picture>
          <div className="project__controls">
            <span
              className={`btn btn__link btn--icons btn__link--back ${
                project.index === lastIndex ? 'button--disabled' : ''
              }`}
              style={{ marginLeft: 0 }}
              onClick={e => handleChangePage(e, 'next')}
            >
              <i className="fas fa-arrow-up" />
            </span>
            <span
              className={`btn btn__link btn--icons ${
                project.index === 0 ? 'button--disabled' : ''
              }`}
              style={{
                marginLeft: 0,
                marginTop: 10,
              }}
              onClick={e => handleChangePage(e, 'back')}
            >
              <i className="fas fa-arrow-down" />
            </span>
          </div>
        </div>
        <Waypoint onEnter={handleTechnologiesAnimation} bottomOffset="20%">
          <div id="project-insight" className="project__insight col-lg-12">
            <div className="project__technologies col-xs-12 col-sm-6 col-md-5 col-lg-4">
              <p className="project__technologies-title">Technologies</p>
              <div ref={technologiesRef} className="project__icons mt-35">
                {project.technologies.map((technology, index) => (
                  <ProjectTechnologyComponent key={index} {...technology} />
                ))}
              </div>
            </div>
            <div className="project__description col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-5">
              <div
                ref={projectDescriptionRef}
                id="project-animation__description"
                className={`project-animation__description ${classes['project-animation__description']}`}
              />
              <p className="project__description-text">{project.info}</p>
              <div className="border border--selftrough" />
            </div>
          </div>
        </Waypoint>
        <div className="project__controls--mobile">
          <span
            className={`btn btn__link btn__link--mobile btn__link--back btn--icons ${
              project.index === lastIndex ? 'button--disabled' : ''
            }`}
            style={{ marginLeft: 0 }}
            onClick={e => handleChangePage(e, 'back')}
          >
            <i className="fas fa-arrow-left" />
          </span>
          <span
            className={`btn btn__link btn__link--mobile btn--icons ${
              project.index === 0 ? 'button--disabled' : ''
            }`}
            style={{ marginLeft: 0 }}
            onClick={e => handleChangePage(e, 'next')}
          >
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </Waypoint>
  );
};

export default injectSheet(projectItemStyles)(ProjectItem);
