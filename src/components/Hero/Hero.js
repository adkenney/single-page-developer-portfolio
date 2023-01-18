import React from 'react';
import ProfileMobile from '../../assets/images/image-profile-mobile.webp';
import RingsImage from '../../assets/images/pattern-rings.svg';
import CircleImage from '../../assets/images/pattern-circle.svg';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
  return (
    <section>
      <img className={styles['rings-img']} src={RingsImage} alt="rings"></img>
      <div className={styles['header-img-container']}>
        <picture>
          <img
            className={styles['profile-img']}
            src={ProfileMobile}
            alt=""
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
          Nice to meet you! I'm <span>Adam Keyes</span>.
        </h1>
        <p className="body-text-l">
          Based in th UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
      <div>
        <button>CONTACT ME</button>
      </div>
    </section>
  );
};

export default Hero;
