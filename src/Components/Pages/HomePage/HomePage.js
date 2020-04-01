import React from 'react';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
    <div className="HomePage">
      <div className="fluid-container">
        <div id="homeScreen">
        </div>
      </div>
      <Fade bottom cascade>
      <div id="aboutMe">
        <div className="title">
          <p>jamiephillips<span>~/about-me/</span><span2> (master):</span2></p>
        </div>
        <div className="borderTrans">
        <div className="aboutMeDetails d-flex justify-content-center">
          <div class="card mb-3 aboutMeMedia">
            <div class="row no-gutters">
              <div class="col-md-3">
                <img src="http://share-fastly.picmonkey.com/prod/photo_posts/7YekgmznLzr_21258830.jpg" class="card-img" alt="profilePic"/>
              </div>
    <div class="col-md-8">
        <div class="card-body">
          <p class="card-text text-center">In my career, I was always a problem solver who was looking for more challenges. I enjoy the challenge of taking a problem and breaking it down until you find the road map to the solution. This is why I was always intrigued with software development and why I was hooked the moment I started learning about it. The software development industry is ever-changing and I look forward to growing with my skills to grow with it.</p>
          <div className="facts">
            <h6 className="factsTitle text-center">Some Things I love:</h6>
              <div className="list d-inline-flex">
                <li>Sports</li>
                <li>Traveling</li>
                <li>Craft Beer</li>
                <li>Cooking/BBQ</li>
              </div>
          </div>

        </div>
      </div>
    </div>
        <div class="quote card">
          <div class="quoteHeader card-header">
            Favorite Software Quote
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.</p>
              <footer class="blockquote-footer">Martin Golding</footer>
            </blockquote>
          </div>
      </div>
      </div>
  </div>
  <br/>
</div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default HomePage;
