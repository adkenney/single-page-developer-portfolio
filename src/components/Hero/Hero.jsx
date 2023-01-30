import React from 'react';
import ProfileMobile from '../../assets/images/image-profile-mobile.webp';
import ProfileTablet from '../../assets/images/image-profile-tablet.webp';
import ProfileDesktop from '../../assets/images/image-profile-desktop.webp';
import RingsImage from '../../assets/images/pattern-rings.svg';
import CircleImage from '../../assets/images/pattern-circle.svg';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
  return (
    <section id={styles['hero']}>
      <img className={styles['rings-img']} src={RingsImage} alt="rings"></img>
      <div className={styles['header-img-container']}>
        <picture>
          <source media="(min-width: 62em)" srcSet={ProfileDesktop} />
          <source media="(min-width: 48em)" srcSet={ProfileTablet} />
          <img
            className={styles['profile-img']}
            src={ProfileMobile}
            alt="Profile"
          ></img>
        </picture>
        <img
          className={styles['circle-img']}
          src={CircleImage}
          alt="circle"
        ></img>
      </div>
      <div className={styles['hero-text']}>
        <h1 className="heading-l">
          <span className={styles['break']}>Nice to</span> meet you! I'm{' '}
          <span className={styles['name-decoration']}>Adam Keyes</span>.
        </h1>
        <p className="body-text-l">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div>
          <a className="button" href="#">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
