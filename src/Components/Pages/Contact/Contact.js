import React from 'react';
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="contact" id="contactMe"></div>
        <Fade bottom cascade>
        <div className="contactIcons">
          <h1 class="title">jamiephillips <span>/contact-me/</span><span2> (master):</span2></h1>
           <div class="contactContainer">
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'githubContact' }}>
                  <div>
                    <a href='https://github.com/phillipsja97'><FaGithub /></a>
                  </div>
                </IconContext.Provider>
                <Button variant="outline-light">Contact Me</Button>
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'linkedInContact' }}>
                  <div>
                    <a href='https://www.linkedin.com/in/jamieaphillips/'><FaLinkedin /></a>
                  </div>
                </IconContext.Provider>
            </div>
        </div>
        </Fade>
    </React.Fragment>
    );
  }
}

export default Contact;
