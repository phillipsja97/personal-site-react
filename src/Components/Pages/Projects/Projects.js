/* eslint-disable max-len */
import React from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal';
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
        <div className="container-fluid" id="projSection">
            <p className="projTitle"> jamiephillips<span> ~/projects-I-built/</span><span2> (master):</span2></p>
          <Fade bottom cascade>
          <div className="projectArea">
          <div className="projContainer">
           { projects.map((project) => <ProjectCard key={project.id} project={project} />)};
           </div>
          </div>
         </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
