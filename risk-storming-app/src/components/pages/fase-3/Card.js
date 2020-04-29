import React from 'react';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../cards/Card/Card.css';
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

const CardList = styled.div``;
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
      <Draggable
        draggable='true'
        draggableId={this.props.card.id}
        index={this.props.index}
        type='CARD'
      >
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            className={`cardContainer ${this.props.color}`}
          >
            <div className={`cardHeader ${this.props.color}Header`}>
              <div className='cardTitle'>{this.props.title}</div>
              <div className='cardSubtitle'>{this.props.subTitle}</div>
            </div>
            <div className='cardBody'>
              <div className='cardDescription'>{this.props.description}</div>

              <Content id='cardExpanded'
                       className='cardExpanded'
                       open={this.state.open}>
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
              <Handler onClick={this.toggleOpen}
                       open={this.state.open}
                       className={`expandButton ${this.state.open ? 'opened': 'closed'}`}>
              </Handler>

            </div>
          </CardList>
        )}
      </Draggable>
    );
  }
}

export default Card;
