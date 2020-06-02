import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../cards/Card/Card.scss';
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

const CardList = styled.div``;
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
  shouldComponentUpdate(nextProps, nextState) {
   
    if (
      nextProps.cardid !== this.props.cardid ||
      nextProps.card !== this.props.card ||
      nextProps.index !== this.props.index
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
    const { card, cardid, index } = this.props;
    return (
      <Draggable draggable={true} draggableId={cardid} index={index}>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            className={`card ${card.color}`}
          >
            <div className={`card__header`}>
              <div className='card__title'>{card.title}</div>
              <div className='card__subtitle'>{card.subTitle}</div>
            </div>
            <div className='card__body'>
              <div className='card__description'>{card.description}</div>

              <Content
                id='cardExpanded'
                className='cardExpanded'
                open={this.state.open}
              >
                <div className='card__example'>
                  <div className='card__example--number'>1</div>
                  <div className='card__example--text'>{card.exampleOne}</div>
                </div>
                <div className='card__example'>
                  <div className='card__example--number'>2</div>
                  <div className='card__example--text'>{card.exampleTwo}</div>
                </div>
                <div className='card__example'>
                  <div className='card__example--number'>3</div>
                  <div className='card__example--text'>{card.exampleThree}</div>
                </div>
              </Content>
              <Handler
                onClick={this.toggleOpen}
                open={this.state.open}
                className={`expandButton ${
                  this.state.open ? 'opened' : 'closed'
                }`}
              ></Handler>
            </div>
          </CardList>
        )}
      </Draggable>
    );
  }
}

export default Card;
