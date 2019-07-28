import React from 'react';

import calgaryImage from '@img/skills-background.png';
import './skills.styles.css';

export const SkillsComponent = () => {
  return (
    <section id="skills" className="skills page-section" data-matching-link="#link-skills">
      <div className="container">
        <div className="skills__statistics col-xs-12 col-sm-6 col-lg-6">
          <h1 className="skills__title">SKILLS</h1>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">HTML</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-90 w-0"></div>
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">CSS</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-95 w-0"></div>
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">Javascript</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-75 w-0"></div>
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">PHP</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-75 w-0"></div>
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">NodeJS</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-80 w-0"></div>
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">Angular</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-80 w-0" />
              </div>
            </div>
          </div>
          <div className="skills__item">
            <div className="col-xs-2 col-lg-4">
              <p className="skills__name">Laravel</p>
            </div>
            <div className="col-xs-10 col-lg-12">
              <div className="skills__pb">
                <div className="skills__rate w-75 w-0" />
              </div>
            </div>
          </div>
          <div className="skills__item skills__item--others">
            <div className="col-xs-2 col-sm-4">
              <p className="skills__name">Other Technologies</p>
            </div>
            <div className="skills__more col-sm-10">
              <i className="btn btn__link btn--no-link mb-1">Express.js</i>
              <i className="btn btn__link btn--no-link mb-1">Git</i>
              <i className="btn btn__link btn--no-link mb-1">MySQL</i>
              <i className="btn btn__link btn--no-link mb-1">MongoDB</i>
              <i className="btn btn__link btn--no-link mb-1">SASS</i>
            </div>
          </div>
        </div>
        <img className="skills__profile lazyload" src={calgaryImage} alt="Anuar Jiménez" />
      </div>
    </section>
  );
};
