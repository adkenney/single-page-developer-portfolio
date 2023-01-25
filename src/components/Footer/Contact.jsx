import React from 'react';
import { ReactComponent as GithubLogo } from '../../assets/images/icon-github.svg';
import { ReactComponent as FemLogo } from '../../assets/images/icon-frontend-mentor.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/images/icon-linkedin.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/icon-twitter.svg';
import RingsImage from '../../assets/images/pattern-rings.svg';
import styles from '../Footer/Contact.module.css';

const Contact = () => {
  return (
    <footer id={styles['footer']}>
      <img className={styles['rings-img']} src={RingsImage} alt="rings"></img>
      <section className={styles['form-container']}>
        <div className={styles['form-header']}>
          <h2 className="heading-l">Contact</h2>
          <p className="body-text-l">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form className={styles['contact-form']}>
          <div>
            <input type="text" placeholder="NAME" name="name"></input>
          </div>
          <div>
            <input type="email" placeholder="EMAIL" name="email"></input>
          </div>
          <div>
            <textarea placeholder="MESSAGE" name="message"></textarea>
          </div>
          <div>
            <button type="submit">send message</button>
          </div>
        </form>
      </section>
      <div className="border"></div>
      <div className={styles['footer-links']}>
        <h2 className="heading-m">adamkeyes</h2>
        <div>
          <a href="https://www.github.com">
            <GithubLogo />
          </a>
          <a href="https://www.frontendmentor.io">
            <FemLogo />
          </a>
          <a href="https://linkedin.com">
            <LinkedInLogo />
          </a>
          <a href="https://twitter.com">
            <TwitterLogo />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
