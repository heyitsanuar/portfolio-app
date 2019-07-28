import React from 'react';

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

const projectsStyles = (theme: Theming) => ({});

interface ProjectsComponentInterface {
  classes?: any;
}

const Projects = (props: ProjectsComponentInterface) => {
  return (
    <section id="projects" className="project page-section" data-matching-link="#link-projects">
      <div className="container">
        <div className="project__text">
          <div className="project__section-title col-xs-12 col-sm-3">
            <div id="project-animation__title" className="project-animation__title" />
            <h1 className="project__text-title project__text-title--side">PROJECTS</h1>
          </div>
          <div className="project__section-text col-xs-12 col-sm-9">
            <div id="project-animation__text" className="project-animation__text" />
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
          <div className="project-item">
            <div className="project__info">
              <div id="project-animation__info" className="project-animation__info" />
              <div className="project__oversight">
                <h4 className="project__title">Lissandra</h4>
                <div className="border" style={{ width: 100, height: 2 }} />
                <p className="text-white mt-15">
                  A simple E-commerce store counting on storing items with a user system.
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="http://www.lissandra.tk/"
                    target="blank"
                    className="btn btn__link"
                    style={{ marginLeft: 0 }}
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/heyitsanuar/Lissandra-Angular-Frontend"
                    target="blank"
                    className="btn btn__link"
                  >
                    Git Repo
                  </a>
                </div>
              </div>
              <picture className="project__picture">
                <source srcSet={lissandraHQ} media="(min-width: 992px)" />
                <source srcSet={lissandraMQ} media="(min-width: 768px)" />
                <img className="image lazyload" srcSet={lissandraLQ} alt="Lissandra" />
              </picture>
              <div className="project__controls">
                <a
                  href="/"
                  className="btn btn__link btn--icons"
                  style={{ marginLeft: 0, background: '#979797', cursor: 'not-allowed' }}
                >
                  <i className="fas fa-arrow-up" />
                </a>
                <a
                  href="/"
                  className="btn btn__link btn--icons btn__link--next"
                  style={{ marginLeft: 0, marginTop: 10 }}
                >
                  <i className="fas fa-arrow-down" />
                </a>
              </div>
            </div>
            <div id="project-insight" className="project__insight col-lg-12">
              <div className="project__technologies col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <p className="project__technologies-title">Technologies</p>
                <div className="project__icons mt-35">
                  <img
                    className="project__technology-icon lazyload"
                    src={angularTech}
                    alt="Angular"
                  />
                  <img className="project__technology-icon lazyload" src={nodeTech} alt="Node" />
                  <img className="project__technology-icon lazyload" src={mongoTech} alt="Mongo" />
                  <img
                    className="project__technology-icon lazyload"
                    src={expressTech}
                    alt="Express"
                  />
                  <img className="project__technology-icon lazyload" src={htmlTech} alt="HTML" />
                  <img className="project__technology-icon lazyload" src={cssTech} alt="CSS" />
                </div>
              </div>
              <div className="project__description col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-5">
                <div
                  id="project-animation__description"
                  className="project-animation__description"
                ></div>
                <p className="project__description-text">
                  A cloth store looking eagerly to take off shows their products in a catalog
                  website; users can view clothes, review previously seen products, create an
                  account, signing in, and save or remove products both into a wishlist and a
                  shopping bag.
                </p>
                <div className="border border--selftrough" />
              </div>
            </div>
            <div className="project__controls--mobile">
              <a
                href="/"
                className="btn btn__link btn__link--mobile btn--icons"
                style={{ marginLeft: 0, background: '#979797' }}
              >
                <i className="fas fa-arrow-left" />
              </a>
              <a
                href="/"
                className="btn btn__link btn__link--mobile btn__link--next btn--icons"
                style={{ marginLeft: 0 }}
              >
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="project-item project-item--hidden">
            <div className="project__info">
              <div
                id="project-animation__info"
                className="project-animation__info project-animation__info--animated"
              />
              <div className="project__oversight">
                <h4 className="project__title">Visual Video</h4>
                <div className="border" style={{ width: 100, height: 2 }} />
                <p className="text-white mt-15">
                  Landing page for advertisement of an event video startup.
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="http://www.visualvideography.tk/"
                    target="blank"
                    className="btn btn__link"
                    style={{ marginLeft: 0 }}
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/heyitsanuar/VisualVideo"
                    target="blank"
                    className="btn btn__link"
                  >
                    Git Repo
                  </a>
                </div>
              </div>
              <picture className="project__picture">
                <source srcSet={visualHQ} media="(min-width: 992px)" />
                <source srcSet={visualMQ} media="(min-width: 768px)" />
                <img className="image lazyload" srcSet={visualLQ} alt="Visual Video" />
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
                  className="btn btn__link btn--icons btn__link--next"
                  style={{ marginLeft: 0, marginTop: 10 }}
                >
                  <i className="fas fa-arrow-down" />
                </a>
              </div>
            </div>
            <div id="project-insight" className="project__insight col-lg-12">
              <div className="project__technologies col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <p className="project__technologies-title">Technologies</p>
                <div className="project__icons mt-35">
                  <img className="project__technology-icon lazyload" src={htmlTech} alt="HTML" />
                  <img className="project__technology-icon lazyload" src={cssTech} alt="CSS" />
                  <img className="project__technology-icon lazyload" src={nodeTech} alt="Node" />
                  <img
                    className="project__technology-icon lazyload"
                    src={expressTech}
                    alt="Express"
                  />
                </div>
              </div>
              <div className="project__description col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-5">
                <div
                  id="project-animation__description"
                  className="project-animation__description project-animation__description--animated"
                />
                <p className="project__description-text">
                  Website based on a small business devote to recording events such as weddings,
                  parties, and other special gatherings. Aspects such as gallery, price comparer,
                  and contact by email are available for users.
                </p>
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
                className="btn btn__link btn__link--mobile btn__link--next btn--icons"
                style={{ marginLeft: 0 }}
              >
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="project-item project-item--hidden">
            <div className="project__info">
              <div
                id="project-animation__info"
                className="project-animation__info project-animation__info--animated"
              />
              <div className="project__oversight">
                <h4 className="project__title">Jean-Georges</h4>
                <div className="border" style={{ width: 100, height: 2 }} />
                <p className="text-white mt-15">
                  Landing page for a restaurant which just took off looking for being known even
                  more.
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="https://heyitsanuar.github.io/MRU-Jean-George-s-assigment/about.html"
                    target="blank"
                    className="btn btn__link"
                    style={{ marginLeft: 0 }}
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/heyitsanuar/MRU-Jean-George-s-assigment"
                    target="blank"
                    className="btn btn__link"
                  >
                    Git Repo
                  </a>
                </div>
              </div>
              <picture className="project__picture">
                <source srcSet={restaurantHQ} media="(min-width: 992px)" />
                <source srcSet={restaurantMQ} media="(min-width: 768px)" />
                <img className="image lazyload" srcSet={restaurantLQ} alt="Restaurant Project" />
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
                <div className="project__icons mt-35">
                  <img
                    className="project__technology-icon lazyload"
                    src="assets/img/technologies/html.png"
                    alt="HTML"
                  />
                  <img
                    className="project__technology-icon lazyload"
                    src="assets/img/technologies/css.png"
                    alt="CSS"
                  />
                </div>
              </div>
              <div className="project__description col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-5">
                <div
                  id="project-animation__description"
                  className="project-animation__description project-animation__description--animated"
                />
                <p className="project__description-text">
                  A single page website based on an emerging restaurant looking forward to
                  demonstrating the quality of their service, including a gallery of food to make
                  everyone know how good the restaurant food is.
                </p>
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
        </div>
      </div>
    </section>
  );
};

export const ProjectsComponent = injectSheet(projectsStyles)(Projects);
