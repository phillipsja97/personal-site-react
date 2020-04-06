import React, { Fragment } from 'react';
import Media from 'react-media';
import './TechnologiesCard.scss';

class TechCard extends React.Component {
  state = {
    tech: [],
  }

  render() {
    const { tech } = this.props;
    return (
      <Media queries={{
        small: '(min-width: 320px) and (max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1024px)',
        large: '(min-width: 1023px)',
      }}>
        {(matches) => (
          <Fragment>
            {matches.small && (<div class="techImage">
                              <img src={tech.imageUrl} className="card-img-top" id="imgMob" alt={tech.name} />
                              </div>) }
            {matches.medium && (<div class="techImage">
                              <img src={tech.imageUrl} className="card-img-top" id="imgTab" alt={tech.name} />
                              </div>)}
            {matches.large && (<div class="techImage">
                              <img src={tech.imageUrl} className="card-img-top" id="imgDesk" alt={tech.name} />
                              </div>) }
          </Fragment>
        )}
      </Media>
    );
  }
}

export default TechCard;
