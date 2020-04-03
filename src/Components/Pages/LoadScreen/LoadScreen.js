import React from 'react';
import MediaQuery from 'react-responsive';
import './LoadScreen.scss';

class LoadScreen extends React.Component {
  render() {
    return (
      <div className="load">
      <MediaQuery minDeviceWidth={1224}>
      <div className="desktopLayout"></div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
      <div className="tabletLayout"></div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
      <div className="phoneLayout"></div>
      </MediaQuery>
      </div>
    );
  }
}

export default LoadScreen;
