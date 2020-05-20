import React from 'react';
import '../../../cards/color-css/green-card/GreenCard.css';
import '../../../cards/color-css/orange-card/OrangeCard.css';
import '../../../cards/color-css/pink-card/PinkCard.css';
import '../../../cards/color-css/purple-card/PurpleCard.css';
import '../../../cards/Card/Card.css';


class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
   
  }
  render() {
    return (
      <div className={`cardContainer ${this.props.color}`}>
        <div className={`cardHeader ${this.props.color}Header`}>
          <div className='cardTitle'>{this.props.title}</div>
          <div className='cardSubtitle'>{this.props.subTitle}</div>
        </div>
        <div className='cardBody'>
          <div className='cardDescription'>{this.props.description}</div>

          
            <div className='exampleContainer'>
              <div className='exampleNumber'>1</div>
              <div className='cardExample1'>{this.props.exampleOne}</div>
            </div>

            <div className='exampleContainer'>
              <div className='exampleNumber'>2</div>
              <div className='cardExample2'>{this.props.exampleTwo}</div>
            </div>

            <div className='exampleContainer'>
              <div className='exampleNumber'>3</div>
              <div className='cardExample3'>{this.props.exampleThree}</div>
            </div>
         
          
        </div>
      </div>
    );
  }
}

export default Card;
