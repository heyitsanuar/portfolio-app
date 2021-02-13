import * as React from "react";
import { Waypoint } from "react-waypoint";
import injectSheet from "react-jss";
import { ITheme } from "shared/providers/theme";
import "./aboutStyles.scss";

interface IAboutProps {
  classes: any;
  description?: string;
}

const About: React.FC<IAboutProps> = (props) => {
  const { description = "", classes } = props;

  const backgroundRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const handleAboutAnimation = (): void => {
    (backgroundRef as any).current.classList.add("about__bg--animated");
    (titleRef as any).current.classList.add("about__title--animated");
  };

  return (
    <Waypoint onEnter={handleAboutAnimation} bottomOffset='40%'>
      <section className='about page-section' data-matching-link='#link-about'>
        <div ref={backgroundRef} id='about-bg' className={`about__bg ${classes.about__bg}`}>
          <div
            ref={titleRef}
            id='about-animation__title'
            className={`about__title--animation ${classes["about__title--animation"]}`}
          ></div>
          <h1
            className='header__title'
            style={{ transform: "rotate(270deg)", width: 230, marginTop: 80 }}
          >
            ABOUT ME
          </h1>
        </div>
        <div className={`about__box d-flex ${classes.about__box}`}>
          <div className='about__info pt-10 col-sm-6'>
            <h1 className={`about__title fw-600 mb-2 ${classes.about__title}`}>WHO I AM</h1>
            <div className='border border--yellow mb-25'></div>
            <p className='text-white'>{description}</p>
          </div>
          <picture className='about__picture'>
            <img
              className='image lazyload'
              src='https://i.ibb.co/1qgkSbB/67127545-2618001891760105-1208530439052984320-n.jpg'
              alt='About me'
            />
          </picture>
        </div>
        <img
          className='about__dots lazyload'
          src='https://i.ibb.co/Nt4WYzq/dots.png'
          alt='Cute dots'
        />
      </section>
    </Waypoint>
  );
};

const aboutStyles = (theme: ITheme) => ({
  about__box: {
    backgroundColor: theme.mainPurple,
  },
  about__title: {
    color: theme.mainYellow,
  },
  "@media (min-width: 768px)": {
    about__bg: {
      backgroundColor: theme.mainRed,
    },
    "about__title--animation": {
      backgroundColor: theme.mainRed,
    },
  },
});

export default injectSheet(aboutStyles)(About);
