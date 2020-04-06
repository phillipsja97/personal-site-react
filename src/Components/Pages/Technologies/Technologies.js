/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Media from 'react-media';
import Zoom from 'react-reveal/Zoom';
import TechnologiesCard from '../../Shared/TechnologiesCard/TechnologiesCard';
import './Technologies.scss';

class Technologies extends React.Component {
  state = {
    technologies: [],
  }

  render() {
    const { technologies } = this.props;
    return (
      <React.Fragment className="fluid-container">
                <div className="images" id="tech">
                  <Media queries={{
                    small: '(min-width: 320px) and (max-width: 767px)',
                    medium: '(min-width: 768px) and (max-width: 1024px)',
                    large: '(min-width: 1023px)',
                  }}>
                    {(matches) => (
                      <Fragment>
                        {matches.small && <p className="techTitleMob"> jamiephillips<span className="spanMobile"> ~/technologies-I-have-used/</span><span2> (master):</span2></p>}
                        {matches.medium && <p className="techTitleTab"> jamiephillips<span className="spanTablet"> ~/technologies-I-have-used/</span><span2> (master):</span2></p>}
                        {matches.large && <p className="techTitle"> jamiephillips<span> ~/technologies-I-have-used/</span><span2> (master):</span2></p>}
                      </Fragment>
                    )}
                  </Media>
                  <Zoom cascade>
                    <div className="empty">
                      <div className="techArea">
                        <div className="empty">
                          <div className="techArea">
                              { technologies.map((tech) => <TechnologiesCard key={tech.id} tech={tech} />)};
                          </div>
                        </div>
                      </div>
                    </div>
                  </Zoom>
                </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
