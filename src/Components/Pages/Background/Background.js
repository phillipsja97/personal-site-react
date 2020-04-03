import React from 'react';
import MediaQuery from 'react-responsive';
import './Background.scss';

class Background extends React.Component {
  render() {
    return (
      <div className="background">
      <MediaQuery minDeviceWidth={1224}>
      <div className="desktopBackground"></div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
      <div className="tabletBackground"></div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
      <div className="phoneBackground"></div>
      </MediaQuery>
      </div>
    );
  }
}

export default Background;
