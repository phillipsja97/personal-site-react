/* eslint-disable max-len */
import React from 'react';
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
      <React.Fragment>
      <div className="projects" id="projects"></div>
        <div className="container-fluid" id="projSection">
          <br></br>
            <p className="projTitle"> jamiephillips<span> ~/projects-I-built/</span> (master):</p>
            <br></br>
          <div className="projectArea">
           { this.state.projects.map((project) => <ProjectCard key={project.id} project={project} />)};
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
