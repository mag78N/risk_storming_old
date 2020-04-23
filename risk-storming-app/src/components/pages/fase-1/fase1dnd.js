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
  state = this.context;
  componentDidMount() {
    console.log(this.state);
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
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
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
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
     console.log(this.state);
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
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const cards = column.cardIds.map(
                (cardId) => this.state.cards[cardId]
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
