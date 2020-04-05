import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './About.scss';

class AboutTablet extends React.Component {
  render() {
    return (
    <div className="about">
      <div className="fluid-container">
      </div>
      <div id="aboutMe">
        <div className="titleTablet">
          <p>jamiephillips<span className="spanTablet">~/about-me/</span><span2> (master):</span2></p>
        </div>
      <Zoom cascade>
        <div className="aboutMeDetails d-flex justify-content-center">
          <div class="card mb-3 aboutMeMedia" id="resize">
            <div class="row no-gutters">
              <div class="col-md-3">
                <img src="http://share-fastly.picmonkey.com/prod/photo_posts/7YekgmznLzr_21258830.jpg" class="card-imgTab" alt="profilePic"/>
              </div>
                <div class="col-md-8">
                    <div class="card-body" id="card-bodyTab">
                      <p class="card-text text-center" id="card-textTab">In my career, I was always a problem solver who was looking for more challenges. I enjoy the challenge of taking a problem and breaking it down until you find the road map to the solution. This is why I was always intrigued with software development and why I was hooked the moment I started learning about it. The software development industry is ever-changing and I look forward to growing my skills to grow with it.</p>
                      </div>
                    </div>
                      <div className="facts">
                        <h6 className="factsTitle text-center">Some Things I love:</h6>
                          <div className="list d-inline-flex">
                            <li class="tablet">Sports</li>
                            <li class="tablet">Traveling</li>
                            <li class="tablet">Craft Beer</li>
                            <li class="tablet">Cooking/BBQ</li>
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
      </Zoom>
  <br/>
          </div>
      </div>
    );
  }
}

export default AboutTablet;