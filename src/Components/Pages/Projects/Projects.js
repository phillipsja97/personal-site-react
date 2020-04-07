/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Media from 'react-media';
import Zoom from 'react-reveal/Zoom';
import Background from '../HomePage/HomePage';
import projectData from '../../../Helpers/data/projectData';
import ProjectCard from '../../Shared/ProjectCard/ProjectCard';
import './Projects.scss';

class Projects extends React.Component {
  state = {
    projects: [],
  }

  render() {
    const { projects } = this.props;
    return (
      <React.Fragment className="fluid-container">
        <Media queries={{
          small: '(min-width: 320px) and (max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1024px)',
          large: '(min-width: 1023px)',
        }}>
          {(matches) => (
            <Fragment>
              {matches.small && <p className="techTitleMob"> jamiephillips<span className="spanMobile"> ~/projects-I-built/</span><span2 className="span2Mobile"> (master):</span2></p>}
              {matches.medium && <p className="techTitleTab"> jamiephillips<span className="spanTablet"> ~/projects-I-built/</span><span2 className="span2Tablet"> (master):</span2></p>}
              {matches.large && <p className="techTitle"> jamiephillips<span className="spanDesk"> ~/projects-I-built/</span><span2> (master):</span2></p>}
            </Fragment>
          )}
        </Media>
          <Zoom cascade>
          <div className="projectArea">
          <div className="projContainer">
           { projects.map((project) => <ProjectCard key={project.id} project={project} />)};
           </div>
          </div>
         </Zoom>
      </React.Fragment>
    );
  }
}

export default Projects;
