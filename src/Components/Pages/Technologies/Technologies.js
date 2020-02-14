/* eslint-disable max-len */
import React from 'react';
import Fade from 'react-reveal/Fade';
import TechnologiesCard from '../../Shared/TechnologiesCard/TechnologiesCard';
import techData from '../../../Helpers/data/techData';
import './Technologies.scss';

class Technologies extends React.Component {
  state = {
    technologies: [],
  }

  getTechnologies = () => {
    techData.getTech()
      .then((technologies) => {
        this.setState({ technologies });
      })
      .catch((errorFromTech) => console.error(errorFromTech));
  }

  componentDidMount() {
    this.getTechnologies();
  }

  render() {
    return (
      <React.Fragment>
        <div className="technologies">
          <div className="tech">
          </div>
          <Fade bottom cascade>
            <div className="images" id="tech">
              <p className="techTitle"> jamiephillips<span> ~/technologies-I-have-used/</span><span2> (master):</span2></p>
              <div className="techArea">
                  { this.state.technologies.map((tech) => <TechnologiesCard key={tech.id} tech={tech} />)};
              </div>
            </div>
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
