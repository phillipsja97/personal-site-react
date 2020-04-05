/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Media from 'react-media';
import AboutDesktop from './AboutDesktop';
import AboutTablet from './AboutTablet';
import AboutMobile from './AboutMobile';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <Media queries={{
        small: '(min-width: 320px) and (max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1024px)',
        large: '(min-width: 1023px)',
      }}>
        {(matches) => (
          <Fragment>
            {matches.small && <AboutMobile />}
            {matches.medium && <AboutTablet />}
            {matches.large && <AboutDesktop />}
          </Fragment>
        )}
      </Media>
    );
  }
}

export default About;
