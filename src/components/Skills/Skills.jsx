import React from 'react';
import RingsImage from '../../assets/images/pattern-rings.svg';
import styles from '../Skills/Skills.module.css';

const Skills = () => {
  return (
    <section id={styles['skills']}>
      <div className="border"></div>
      <div className={styles['skill-content']}>
        <div>
          <h2 className="heading-l">HTML</h2>
          <p>4 Years Experience</p>
        </div>
        <div>
          <h2 className="heading-l">CSS</h2>
          <p className="body-text-l">4 Years Experience</p>
        </div>
        <div>
          <h2 className="heading-l">Javascript</h2>
          <p className="body-text-l">4 Years Experience</p>
        </div>
        <div>
          <h2 className="heading-l">Accessibility</h2>
          <p className="body-text-l">4 Years Experience</p>
        </div>
        <div>
          <h2 className="heading-l">React</h2>
          <p className="body-text-l">3 Years Experience</p>
        </div>
        <div>
          <h2 className="heading-l">Sass</h2>
          <p className="body-text-l">3 Years Experience</p>
        </div>
        <img className={styles['rings-img']} src={RingsImage} alt="rings"></img>
      </div>
    </section>
  );
};

export default Skills;
