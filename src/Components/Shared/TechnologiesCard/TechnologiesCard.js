import React from 'react';
import './TechnologiesCard.scss';

class TechCard extends React.Component {
  state = {
    tech: [],
  }

  render() {
    const { tech } = this.props;
    return (
      <div class="techImage">
        <img src={tech.imageUrl} className="card-img-top" alt={tech.name} />
      </div>
    );
  }
}

export default TechCard;
