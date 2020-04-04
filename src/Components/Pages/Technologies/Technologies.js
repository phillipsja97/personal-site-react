/* eslint-disable max-len */
import React from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import Background from '../HomePage/HomePage';
import TechnologiesCard from '../../Shared/TechnologiesCard/TechnologiesCard';
import techData from '../../../Helpers/data/techData';
import './Technologies.scss';

class Technologies extends React.Component {
  state = {
    technologies: [],
  }

  render() {
    const { technologies } = this.props;
    return (
      <React.Fragment className="fluid-container">
        <div className="technologies">
                <div className="images" id="tech">
                  <p className="techTitle"> jamiephillips<span> ~/technologies-I-have-used/</span><span2> (master):</span2></p>
                    <Fade bottom cascade>
                      <div className="empty">
                        <div className="techArea">
                            { technologies.map((tech) => <TechnologiesCard key={tech.id} tech={tech} />)};
                        </div>
                      </div>
                    </Fade>
                </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
