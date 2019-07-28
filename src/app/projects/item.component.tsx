import React from 'react';

import { ProjectTechnologyProps, ProjectTechnologyComponent } from './technology.component';

import classNames from 'classnames';

type ProjectItemProps = {
  title: string;
  description: string;
  info: string;
  links: {
    webpage: string;
    repo: string;
  };
  images: {
    hq: string;
    mq: string;
    lq: string;
  };
  technologies: ProjectTechnologyProps[];
  isVisible: boolean;
};

export const ProjectItemComponent = ({
  title,
  description,
  info,
  links,
  images,
  technologies,
  isVisible,
}: ProjectItemProps) => {
  const renderTechnologies = () => {
    return technologies.map((technology, index) => (
      <ProjectTechnologyComponent key={index} {...technology} />
    ));
  };

  const isHiddenClass = isVisible ? '' : 'project-item--hidden';

  return (
    <div className={classNames('project-item', isHiddenClass)}>
      <div className="project__info">
        <div
          id="project-animation__info"
          className="project-animation__info project-animation__info--animated"
        />
        <div className="project__oversight">
          <h4 className="project__title">{title}</h4>
          <div className="border" style={{ width: 100, height: 2 }} />
          <p className="text-white mt-15">{description}</p>
          <div className="d-flex mt-3">
            <a
              href={links.webpage}
              target="blank"
              className="btn btn__link"
              style={{ marginLeft: 0 }}
            >
              View
            </a>
            <a href={links.repo} target="blank" className="btn btn__link">
              Git Repo
            </a>
          </div>
        </div>
        <picture className="project__picture">
          <source srcSet={images.hq} media="(min-width: 992px)" />
          <source srcSet={images.mq} media="(min-width: 768px)" />
          <img className="image lazyload" srcSet={images.lq} alt="Restaurant Project" />
        </picture>
        <div className="project__controls">
          <a
            href="/"
            className="btn btn__link btn--icons btn__link--back"
            style={{ marginLeft: 0 }}
          >
            <i className="fas fa-arrow-up" />
          </a>
          <a
            href="/"
            className="btn btn__link btn--icons"
            style={{
              marginLeft: 0,
              marginTop: 10,
              background: '#979797',
              cursor: 'not-allowed',
            }}
          >
            <i className="fas fa-arrow-down" />
          </a>
        </div>
      </div>
      <div id="project-insight" className="project__insight col-lg-12">
        <div className="project__technologies col-xs-12 col-sm-6 col-md-5 col-lg-4">
          <p className="project__technologies-title">Technologies</p>
          <div className="project__icons mt-35">{renderTechnologies()}</div>
        </div>
        <div className="project__description col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-5">
          <div
            id="project-animation__description"
            className="project-animation__description project-animation__description--animated"
          />
          <p className="project__description-text">{info}</p>
          <div className="border border--selftrough" />
        </div>
      </div>
      <div className="project__controls--mobile">
        <a
          href="/"
          className="btn btn__link btn__link--mobile btn__link--back btn--icons"
          style={{ marginLeft: 0 }}
        >
          <i className="fas fa-arrow-left" />
        </a>
        <a
          href="/"
          className="btn btn__link btn__link--mobile btn--icons"
          style={{ marginLeft: 0, background: '#979797' }}
        >
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};
