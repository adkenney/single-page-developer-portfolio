import React from 'react';
import { ReactComponent as GithubLogo } from '../../assets/images/icon-github.svg';
import { ReactComponent as FemLogo } from '../../assets/images/icon-frontend-mentor.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/images/icon-linkedin.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/icon-twitter.svg';
import styles from '../Nav/NavBar.module.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1 className="heading-m">adamkeyes</h1>
        <div className={styles['social-links']}>
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
      </nav>
    </header>
  );
};

export default NavBar;
