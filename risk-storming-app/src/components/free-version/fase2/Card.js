import React from 'react';
import styled from 'styled-components';
import '../../cards/Card/Card.scss';
import '../../cards/Card/card-colors.scss';
import chevronDown from '../../../assets/icons/chevron-down-outline.svg';
import chevronUp from '../../../assets/icons/chevron-up-outline.svg';

const Content = styled.div`
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: all 0.3s;
`;
const Handler = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  height: 25px;
  &.opened {
    background-image: url(${chevronUp});
  }
  &.closed {
    background-image: url(${chevronDown});
  }
`;

class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={`card ${this.props.color}`}>
        <div className={`card__header`}>
          <div className='card__title'>{this.props.title}</div>
          <div className='card__subtitle'>{this.props.subTitle}</div>
        </div>
        <div className='card__body'>
          <div className='card__description'>{this.props.description}</div>

          <Content id='cardExpanded'
                       className='cardExpanded'
                       open={this.state.open}>
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
          </Content>
              <Handler onClick={this.toggleOpen}
                       open={this.state.open}
                       className={`expandButton ${this.state.open ? 'opened': 'closed'}`}>
              </Handler>

        </div>
      </div>
    );
  }
}

export default Card;
