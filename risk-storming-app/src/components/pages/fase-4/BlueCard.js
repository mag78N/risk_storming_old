import React from 'react';
import Risk from './Risk';
import '../../cards/Card/Card.css';
class BlueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { card } = this.props;
    return (
      <>
        <div className={`${card.color} miniCard`}>
          <div className={`cardHeader ${card.color}Header`}>
            <div className='cardTitle'>{card.title}</div>
            {/* <div className='cardSubtitle'>{card.subTitle}</div> */}
          </div>
        </div>
        <Risk card={card}/>
     </>
    );
  }
}

export default BlueCard;
