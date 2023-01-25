import React from 'react';
import styles from '../Projects/Projects.module.css';
import { projectData } from '../../assets/data/projects';

const Projects = () => {
  return (
    <section id={styles['projects']}>
      <div className="border"></div>
      <div className={styles['project-header']}>
        <h2 className="heading-l">Projects</h2>
        <button>CONTACT ME</button>
      </div>
      <div className={styles['project-wrapper']}>
        {projectData.map(project => {
          return (
            <div key={project.id} className={styles['project-card']}>
              <picture>
                <source
                  media="(min-width: 62em)"
                  srcSet={project.image.desktop}
                ></source>
                <img src={project.image.mobile} alt=""></img>
              </picture>
              <h3 className="heading-m">{project.projectTitle}</h3>
              <div className={styles['pl-description']}>
                {project.skills.map((skill, index) => {
                  return (
                    <p key={index} className="body-text-l">
                      {skill}
                    </p>
                  );
                })}
              </div>
              <div className={styles['link-btns']}>
                <div>
                  <button>VIEW PROJECT</button>
                </div>
                <div>
                  <button>VIEW CODE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
