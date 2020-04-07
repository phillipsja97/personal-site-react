/* eslint-disable max-len */
import React from 'react';
import MediaQuery from 'react-responsive';
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
        <div className="container-fluid" id="projSection">
            <p className="projTitle"> jamiephillips<span className="spanDesk"> ~/projects-I-built/</span><span2> (master):</span2></p>
          <Zoom cascade>
          <div className="projectArea">
          <div className="projContainer">
           { projects.map((project) => <ProjectCard key={project.id} project={project} />)};
           </div>
          </div>
         </Zoom>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
