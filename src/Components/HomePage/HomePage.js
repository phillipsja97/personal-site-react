import React from 'react';
import { Image } from 'react-bootstrap';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
    <div className="HomePage">
      <div className="fluid-container">
        <div class="fluid-container" id="homeScreen">
        </div>
      </div>
      <div id="aboutMe">
        <div className="title">
          <p>jamiephillips<span>~/about-me/</span> (master):</p>
        </div>
        <div className="aboutMeDetails d-flex justify-content-center">
          <div class="card mb-3 aboutMeMedia">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t35.0-12/1062409_10200121663220053_1403659769_o.jpg?_nc_cat=108&_nc_ohc=udp0_yAquBMAX_567kp&_nc_ht=scontent-dfw5-2.xx&oh=42a68f656f3eb2d5570724f310c0a05c&oe=5E46F694" class="card-img" alt="profilePic"/>
              </div>
    <div class="col-md-8">
        <div class="card-body">
          <p class="card-text text-center">My journey into software development started out with a simple question to a colleague about our company website, but it was one that would lead me down the rabbit hole of learning everything I could about coding. Over the next year and a half, I worked on some courses on free online learning programs, learned about different career options and coding languages, and finally started researching formal training schools and options. Enter, Nashville Software School. I love the puzzle that is software development. It frustrates you. It challenges you. It pushes you the whole time but once you finish a project or a problem, the reward is so satisfying.</p>
          <h6 className="facts text-center">Some Things I love:</h6>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
