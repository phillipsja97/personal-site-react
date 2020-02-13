import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './ProjectCard.scss';

class ProjCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <Card className="bg-dark text-white projectCard">
        <Card.Img src={project.screenshot} alt="Card Image" className="screenshotOverlay" />
          <Card.ImgOverlay>
            <Card.Title className="text-center projTitle">{project.title}</Card.Title>
            <Card.Text className="text-center projText">
              {project.description}
            </Card.Text>
            <Card.Text className="text-center projTechUsed">
              {project.technologiesUsed}
            </Card.Text>
              <Card.Text className="d-inline-flex icons">
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'githubIcon' }}>
                  <div>
                    <a href={project.githubUrl}><FaGithub /></a>
                  </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'webIcon' }}>
                  <div>
                    <a href={project.url}><FaGlobe /></a>
                  </div>
                </IconContext.Provider>
              </Card.Text>
          </Card.ImgOverlay>
      </Card>
    );
  }
}

export default ProjCard;
