import React from 'react';
import '../../../cards/Card/Card.scss';

class Card extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  render() {
    return (
      <div className={`card ${this.props.color}`}>
        <div className={`card__header ${this.props.color}Header`}>
          <div className='card__title'>{this.props.title}</div>
          <div className='card__subtitle'>{this.props.subTitle}</div>
        </div>
        <div className='card__body'>
          <a className='card__vote' onClick={this.IncrementItem}>
            <i class='fa fa-thumbs-up'></i>&nbsp;
            <span>{this.state.clicks}</span>
          </a>
          <div className='card__description'>{this.props.description}</div>

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
