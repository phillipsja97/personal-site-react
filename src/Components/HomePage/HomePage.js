import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
    <div className="HomePage">
      <div className="fluid-container">
        <div class="fluid-container" id="homeScreen">
        </div>
      </div>
      <div class="fluid-container" id="aboutMe">
        <div className="title justify-content-start">
          <p>jamiephillips <span>~/about-me/</span> (master):</p>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage;
