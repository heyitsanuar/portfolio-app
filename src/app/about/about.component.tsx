import React, { useRef } from 'react';

import { Waypoint } from 'react-waypoint';
import injectSheet, { Theming } from 'react-jss';

import whoIAmImage from '@img/who-i-am.jpeg';
import dotsImage from '@img/dots.png';

import './about.styles.css';

export interface AboutComponentProps {
  description: string;
  classes?: any;
}

const aboutStyles = (theme: Theming) => ({});

const About = ({ description }: AboutComponentProps) => {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);

  const handleAboutAnimation = (): any => {
    (backgroundRef as any).current.classList.add('about__bg--animated');
    (titleRef as any).current.classList.add('about__title--animated');
  };

  return (
    <Waypoint onEnter={handleAboutAnimation} bottomOffset="40%">
      <section className="about page-section" data-matching-link="#link-about">
        <div ref={backgroundRef} id="about-bg" className="about__bg">
          <div ref={titleRef} id="about-animation__title" className="about__title--animation"></div>
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
            <p className="text-white">{description}</p>
          </div>
          <picture className="about__picture">
            <img className="image lazyload" src={whoIAmImage} alt="About me" />
          </picture>
        </div>
        <img className="about__dots lazyload" src={dotsImage} alt="" />
      </section>
    </Waypoint>
  );
};

export const AboutComponent = injectSheet(aboutStyles)(About);
