import React, { Fragment } from 'react';
import Media from 'react-media';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <Media queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1199px)',
        large: '(min-width: 1450px)',
      }}>
        {(matches) => (
          <Fragment>
            {matches.small && <p>I am small!</p>}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && <p>I am large!</p>}
          </Fragment>
        )}
      </Media>
    </div>
    );
  }
}

export default HomePage;
