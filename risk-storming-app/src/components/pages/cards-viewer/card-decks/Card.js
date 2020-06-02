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
        <div className={`card__header`}>
          <div className='card__title'>{this.props.title}</div>
          <div className='card__subtitle'>{this.props.subTitle}</div>
        </div>
        <div className='card__body'>
          <a className='card__vote' onClick={this.IncrementItem}>
            <i class='fa fa-thumbs-up'></i>&nbsp;
            <span>{this.state.clicks}</span>
          </a>
          <div className='card__description'>{this.props.description}</div>

          <div className='card__example'>
            <div className='card__example--number'>1</div>
            <div className='card__example--text'>{this.props.exampleOne}</div>
          </div>

          <div className='card__example'>
            <div className='card__example--number'>2</div>
            <div className='card__example--text'>{this.props.exampleTwo}</div>
          </div>

          <div className='card__example'>
            <div className='card__example--number'>3</div>
            <div className='card__example--text'>{this.props.exampleThree}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
