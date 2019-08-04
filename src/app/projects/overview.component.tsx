import React, { useRef } from 'react';

import { ProjectItemComponent } from './item.component';

import { Waypoint } from 'react-waypoint';
import injectSheet, { Theming } from 'react-jss';

import restaurantHQ from '@img/projects/restaurant-hq.jpg';
import restaurantMQ from '@img/projects/restaurant-mq.jpg';
import restaurantLQ from '@img/projects/restaurant-lq.jpg';

import visualHQ from '@img/projects/visual-hq.jpg';
import visualMQ from '@img/projects/visual-mq.jpg';
import visualLQ from '@img/projects/visual-lq.jpg';

import lissandraHQ from '@img/projects/lissandra-hq.jpg';
import lissandraMQ from '@img/projects/lissandra-mq.jpg';
import lissandraLQ from '@img/projects/lissandra-lq.jpg';

import angularTech from '@img/technologies/angular.png';
import mongoTech from '@img/technologies/mongo.png';
import nodeTech from '@img/technologies/node.png';
import expressTech from '@img/technologies/express.png';
import cssTech from '@img/technologies/css.png';
import htmlTech from '@img/technologies/html.png';

import './projects.styles.css';

const projectOverviewStyles = (theme: Theming) => ({});

interface ProjectOverviewComponentInterface {
  classes?: any;
}

const ProjectOverview = (props: ProjectOverviewComponentInterface) => {
  const projects = [
    {
      _id: '0',
      title: 'Lissandra',
      description: 'A simple E-commerce store counting on storing items with a user system.',
      info:
        'A cloth store looking eagerly to take off shows their products in a catalog website; users can view clothes, review previously seen products, create an account, signing in, and save or remove products both into a wishlist and a shopping bag.',
      links: {
        webpage: 'http://www.lissandra.tk/',
        repo: 'https://github.com/heyitsanuar/Lissandra-Angular-Frontend',
      },
      images: {
        hq: lissandraHQ,
        mq: lissandraMQ,
        lq: lissandraLQ,
      },
      technologies: [
        { title: 'Angular', url: angularTech },
        { title: 'Node', url: nodeTech },
        { title: 'MongoDB', url: mongoTech },
        { title: 'Express', url: expressTech },
        { title: 'HTML', url: htmlTech },
        { title: 'CSS', url: cssTech },
      ],
      isInitial: true,
    },
    {
      _id: '1',
      title: 'Visual Video',
      description: 'Landing page for advertisement of an event video startup.',
      info:
        'Website based on a small business devote to recording events such as weddings, parties, and other special gatherings. Aspects such as gallery, price comparer, and contact by email are available for users.',
      links: {
        webpage: 'http://www.visualvideography.tk/',
        repo: 'https://github.com/heyitsanuar/VisualVideo',
      },
      images: {
        hq: visualHQ,
        mq: visualMQ,
        lq: visualLQ,
      },
      technologies: [
        { title: 'HTML', url: htmlTech },
        { title: 'CSS', url: cssTech },
        { title: 'Node', url: nodeTech },
        { title: 'Express.js', url: expressTech },
      ],
      isInitial: false,
    },
    {
      _id: '2',
      title: 'Jean Georges',
      description:
        'Landing page for a restaurant which just took off looking for being known even more.',
      info:
        'A single page website based on an emerging restaurant looking forward to demonstrating the quality of their service, including a gallery of food to make everyone know how good the restaurant food is.',
      links: {
        webpage: 'https://heyitsanuar.github.io/MRU-Jean-George-s-assigment/about.html',
        repo: 'https://github.com/heyitsanuar/MRU-Jean-George-s-assigment',
      },
      images: {
        hq: restaurantHQ,
        mq: restaurantMQ,
        lq: restaurantLQ,
      },
      technologies: [
        {
          title: 'HTML',
          url: htmlTech,
        },
        {
          title: 'CSS',
          url: cssTech,
        },
      ],
      isInitial: false,
    },
  ];
  const titleRef = useRef(null);
  const introTextRef = useRef(null);

  const handleProjectsIntroWaypoint = (): any => {
    (titleRef as any).current.classList.add('project-animation__title--animated');
    (introTextRef as any).current.classList.add('project-animation__text--animated');
  };

  const renderProjects = () => {
    return projects.map((project, index) => {
      return <ProjectItemComponent key={index} {...project} />;
    });
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
                className="project-animation__title"
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
            {renderProjects()}
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export const ProjectOverviewComponent = injectSheet(projectOverviewStyles)(ProjectOverview);
