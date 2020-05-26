import React from 'react';
import '../../cards/Card/Card.css';
class BlueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { card } = this.props;
    return (
      <div className={`cardContainer ${card.color} rotated`}>
        <div className={`cardHeader ${card.color}Header`}>
          <div className='cardTitle'>{card.title}</div>
          <div className='cardSubtitle'>{card.subTitle}</div>
        </div>
        
      </div>
    );
  }
}

export default BlueCard;
