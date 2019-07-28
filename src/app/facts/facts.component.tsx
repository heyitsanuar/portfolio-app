import React from 'react';

import selftaughtImage from '@img/features/self-taught.png';
import creativeImage from '@img/features/creativity.png';
import teamworkImage from '@img/features/teamwork.png';
import workImage from '@img/features/work.png';
import conflictImage from '@img/features/conflict.png';
import selftaughtActiveImage from '@img/features/self-taught--active.png';
import decisionImage from '@img/features/decision.png';
import creativeActiveImage from '@img/features/creativity--active.png';
import teamworkActiveImage from '@img/features/teamwork--active.png';
import workActiveImage from '@img/features/work--active.png';
import conflictActiveImage from '@img/features/conflict--active.png';
import decisionActiveImage from '@img/features/decision--active.png';

import './facts.styles.css';

export const FactsComponent = () => {
  return (
    <section id="facts" className="facts page-section" data-matching-link="#link-contact">
      <div className="container">
        <div className="facts__info col-xs-12 col-sm-3">
          <h1 className="facts__title">FACTS</h1>
          <ul className="facts__list">
            <li className="facts__text">Studied Software Engineering in Mexico.</li>
            <li className="facts__text">Really love learning new languages.</li>
            <li className="facts__text">Geek but sociable.</li>
          </ul>
        </div>
        <div id="facts-items" className="facts__items col-xs-12 col-sm-9">
          <div id="facts-animation" />
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src={selftaughtImage}
              alt="Self taught"
            />
            <img
              className="facts__thumb--active lazyload"
              src={selftaughtActiveImage}
              alt="Self taught"
            />
          </div>
          <div className="facts__image">
            <img className="facts__thumb--inactive lazyload" src={creativeImage} alt="Creative" />
            <img
              className="facts__thumb--active lazyload"
              src={creativeActiveImage}
              alt="Creative"
            />
          </div>
          <div className="facts__image">
            <img className="facts__thumb--inactive lazyload" src={teamworkImage} alt="Team Work" />
            <img
              className="facts__thumb--active lazyload"
              src={teamworkActiveImage}
              alt="Team Work"
            />
          </div>
          <div className="facts__image">
            <img className="facts__thumb--inactive lazyload" src={workImage} alt="Work" />
            <img className="facts__thumb--active lazyload" src={workActiveImage} alt="Work" />
          </div>
          <div className="facts__image">
            <img className="facts__thumb--inactive lazyload" src={conflictImage} alt="Conflict" />
            <img
              className="facts__thumb--active lazyload"
              src={conflictActiveImage}
              alt="Conflict"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src={decisionImage}
              alt="Decision making"
            />
            <img
              className="facts__thumb--active lazyload"
              src={decisionActiveImage}
              alt="Decision making"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
