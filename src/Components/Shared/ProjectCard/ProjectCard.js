import React from 'react';
import './ProjectCard.scss';

class ProjCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div class="media" id="projCard">
        <img src={project.screenshot} id="projImage" class="align-self-center mr-3" alt={project.title} />
          <div class="media-body text-center">
            <h5 class="mt-0" id="cardTitle">{project.title}</h5>
              <div class="cardInfo"><p>{project.description}</p></div>
                <div id="lowerCard" class="d-flex flex-wrap justify-content-center">
                  <div class="d-flex flex-wrap" id="techIcons">
                    <p id="techNames">Technologies Used: {project.technologiesUsed}</p>
                  </div>
                </div>
              </div>
                <div id="footer">
                  <div class="d-flex flex-wrap" id="projButtons">
                    <a id="demoButton" href={project.url} rel="nofollow noopener">Live Demo</a>
                    <a href={project.githubUrl} id="gitButton">GitHub</a>
                  </div>
                </div>
      </div>
    );
  }
}

export default ProjCard;
