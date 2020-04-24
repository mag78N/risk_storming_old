import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import '../../pages/fase-1/fase1.css';
import Footer from '../../Footer/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import React from 'react';
import  CardsContext  from '../../../context';
import CardData from '../../cards/card-data';

class FaseOnePagednd extends React.Component {
  static contextType = CardsContext;
  //state = {
    //data: CardData,
    /* setData: this.setData, */
    /* this.context.data; */
  //};
  
  componentDidMount() {
    const { data} = this.context;
    //const data = this.context;
    console.log(data);
  }
  onDragEnd = (result) => {
    const { data, setData } = this.context;
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
    const start = data.columnsFase1[source.droppableId];
    const finish = data.columnsFase1[destination.droppableId];
    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
      const newState = {
        ...data,
        columnsFase1: {
          ...data.columnsFase1,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      //context.setData(newState);
      //this.state.setData(newState);
      //this.context.setData(newState);
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
      ...data,
      columnsFase1: {
        ...data.columnsFase1,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
    //context.setData(newState);
    //this.state.setData(newState);
    //this.context.setData(newState);
    console.log(newState);
  };

  render() {
    const { data, setData } = this.context;
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
            {data.columnOrderFase1.map((columnId) => {
              const column = data.columnsFase1[columnId];
              const cards = column.cardIds.map(
                (cardId) => data.bluecards[cardId]
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
