import React from 'react';
import styled from 'styled-components';
import '../../cards/Card/Card.css';
import '../../cards/Card/card-colors.scss';
import chevronDown from '../../../assets/icons/chevron-down-outline.svg';
import chevronUp from '../../../assets/icons/chevron-up-outline.svg';

const Content = styled.div`
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
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
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.card !== this.props.card ||
      nextProps.key !== this.props.key
    ) {
      console.log('props card updating', this.props.cardid);
      return true;
    }
    if (nextState.open !== this.state.open) {
      console.log('state card updating', this.props.cardid);
      return true;
    }

    return false;
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

          <Content
            id='cardExpanded'
            className='cardExpanded'
            open={this.state.open}
          >
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
          </Content>
          <Handler
            onClick={this.toggleOpen}
            open={this.state.open}
            className={`expandButton ${this.state.open ? 'opened' : 'closed'}`}
          ></Handler>
        </div>
      </div>
    );
  }
}

export default Card;
