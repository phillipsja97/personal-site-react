/* eslint-disable max-len */
import React from 'react';
import Fade from 'react-reveal/Fade';
import projectData from '../../../Helpers/data/projectData';
import ProjectCard from '../../Shared/ProjectCard/ProjectCard';
import './Projects.scss';

class Projects extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => {
    projectData.getProjects()
      .then((projects) => {
        this.setState({ projects });
      })
      .catch((errorFromProj) => console.error(errorFromProj));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <React.Fragment className="fluid-container">
      <div className="projects" id="projects"></div>
        <Fade bottom cascade>
        <div className="container-fluid" id="projSection">
          <br></br>
            <p className="projTitle"> jamiephillips<span> ~/projects-I-built/</span><span2> (master):</span2></p>
            <br></br>
          <div className="projectArea">
           { this.state.projects.map((project) => <ProjectCard key={project.id} project={project} />)};
          </div>
          <br></br><br></br>
        </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Projects;
