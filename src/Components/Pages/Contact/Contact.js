import React from 'react';
import MediaQuery from 'react-responsive';
import FadeIn from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment className="fluid-container">
        <div className="contactIcons">
          <h1 class="title">jamiephillips <span>/contact-me/</span><span2> (master):</span2></h1>
        <FadeIn>
            <div className="box">
              <div class="contactContainer">
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'githubContact' }}>
                  <div>
                    <a href='https://github.com/phillipsja97'><FaGithub /></a>
                  </div>
                </IconContext.Provider>
                <Button variant="outline-light" href="mailto:phillipsja97@gmail.com?subject=Hi!">Say Hello</Button>
                <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'linkedInContact' }}>
                  <div>
                    <a href='https://www.linkedin.com/in/jamieaphillips/'><FaLinkedin /></a>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
        </FadeIn>
        </div>
    </React.Fragment>
    );
  }
}

export default Contact;
