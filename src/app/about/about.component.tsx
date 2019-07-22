import React from 'react';

import injectSheet, { Theming } from 'react-jss';

import whoIAmImage from '@img/who-i-am.jpeg';
import dotsImage from '@img/dots.png';

import './about.styles.css';

interface AboutComponentInterface {}

const aboutStyles = (theme: Theming) => ({});

const About = (props: AboutComponentInterface) => (
  <section className="about page-section" data-matching-link="#link-about">
    <div id="about-bg" className="about__bg">
      <div id="about-animation__title" className="about__title--animation"></div>
      <h1
        className="header__title"
        style={{ transform: 'rotate(270deg)', width: 230, marginTop: 80 }}
      >
        ABOUT ME
      </h1>
    </div>
    <div className="about__box d-flex">
      <div className="about__info pt-10 col-sm-6">
        <h1 className="about__title fw-600 mb-2">WHO I AM</h1>
        <div className="border border--yellow mb-25"></div>
        <p className="text-white">
          Few years ago I found out web development was my future, I was not about to leave things
          as they were, started learning Javascript, afterwards some frameworks, such as Angular,
          Laravel. Coming up with measures to keep it up turned out to be my hobby.
        </p>
      </div>
      <picture className="about__picture">
        <img className="image lazyload" src={whoIAmImage} alt="About me" />
      </picture>
    </div>
    <img className="about__dots lazyload" src={dotsImage} alt="" />
  </section>
);

export const AboutComponent = injectSheet(aboutStyles)(About);
