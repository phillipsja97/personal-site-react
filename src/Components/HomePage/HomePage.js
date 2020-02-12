import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
    <div className="HomePage">
      <div className="golf"></div>
      <div className="home">
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
    </div>
    );
  }
}

export default HomePage;
