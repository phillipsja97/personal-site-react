/* eslint-disable max-len */
import React from 'react';
import MediaQuery from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
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
                  <Zoom cascade>
                      <div className="empty">
                        <div className="techArea">
                            { technologies.map((tech) => <TechnologiesCard key={tech.id} tech={tech} />)};
                        </div>
                      </div>
                    </Zoom>
                </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
