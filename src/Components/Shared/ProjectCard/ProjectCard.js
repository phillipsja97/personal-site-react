import React from 'react';
import { Card } from 'react-bootstrap';
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
           { (project.title.includes('Capstone')) ? (<Card.Title className="text-center projTitle"><span3>{project.title}</span3></Card.Title>)
             : (<Card.Title className="text-center projTitle">{project.title}</Card.Title>)
           }
            <Card.Text className="text-center projText">
              {project.description}
            </Card.Text>
            <Card.Text className="text-center projTechUsed">
              <span2>Technologies Used: </span2>{project.technologiesUsed}
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
