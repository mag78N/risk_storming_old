import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import '../../pages/fase-1/fase1.css';
import Footer from '../../Footer/Footer';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialBlueCardData from './initial-data';
import Column from './Column';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 100%;
`;
class FaseOnePagednd extends React.Component {
  state = initialBlueCardData;
  //in tutorial no style changes in callbacks but solely relying on snapshots
  /* onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }; */
  /* onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.cards).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
  }; */
  onDragEnd = (result) => {
    //todo: reorder our column
    /* document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit'; */
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
    return (
      <>
        <TopNavbar faseNum='Fase 1' />
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Container>
            <Split
              className='splitContainerFase1'
              sizes={[50, 50]}
              minSize={[500]}
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

                return <div><Column key={column.id} column={column} cards={cards} /></div>;
              })}
            </Split>
          </Container>
        </DragDropContext>
        <Footer prev='/' next='/fase2' />
      </>
    );
  }
}

export default FaseOnePagednd;
