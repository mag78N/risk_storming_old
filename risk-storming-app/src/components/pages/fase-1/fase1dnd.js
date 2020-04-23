import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import '../../pages/fase-1/fase1.css';
import Footer from '../../Footer/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import initialBlueCardData from './initial-data';
import Column from './Column';
import React from 'react';
import {ThemeContext} from '../../../context';

class FaseOnePagednd extends React.Component {
  static contextType = ThemeContext;
  
  componentDidMount() {
    console.log(this.context);
  }
  onDragEnd = (result) => {
    //todo: reorder our column

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.contextType.cardData.columns[source.droppableId];
    const finish = this.context.cardData.columns[destination.droppableId];
    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
      const newState = {
        ...this.context,
        columns: {
          ...this.context.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }
    //moving from one list to another
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };
    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };
    const newState = {
      ...this.context,
      columns: {
        ...this.context.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    console.log(this.context);
    return (
      <>
        <TopNavbar faseNum='Fase 1' />
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Split
            className='splitContainerFase1'
            sizes={[75, 25]}
            minSize={[300, 150]}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
          >
            {this.context.cardData.columnOrder.map((columnId) => {
              const column = this.context.columns[columnId];
              const cards = column.cardIds.map(
                (cardId) => this.context.cards[cardId]
              );

              return (
                <Column
                  key={column.id}
                  column={column}
                  cards={cards}
                  class={column.class}
                />
              );
            })}
          </Split>
        </DragDropContext>
        <Footer prev='/' next='/fase2' />
      </>
    );
  }
}

export default FaseOnePagednd;
