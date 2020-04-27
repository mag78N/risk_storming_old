import React from 'react';
import Split from 'react-split';
import '../../cards/Card/Card.css';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { DragDropContext } from 'react-beautiful-dnd';
import CardsContext from '../../../context';
import Card from '../fase-2/Card';
import Column from './Column';
class FaseThreePage extends React.Component {
  static contextType = CardsContext;
  state = this.context.data;
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
    const start = this.state.columnsFase3[source.droppableId];
    const finish = this.state.columnsFase3[destination.droppableId];
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
        columnsFase3: {
          ...this.state.columnsFase3,
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
      columnsFase3: {
        ...this.state.columnsFase3,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    const chosenbluecards = JSON.parse(localStorage.getItem('newChosenCards'));
    return (
      <>
        <TopNavbar faseNum='Fase 3' />

        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Split
            className='splitContainerFase3'
            sizes={[60,40]}
            minSize={[300, 150]}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
          >
            <div className='fase3LeftPane'>
              {chosenbluecards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  color={card.color}
                  title={card.title}
                  subTitle={card.subTitle}
                  description={card.description}
                  exampleOne={card.exampleOne}
                  exampleTwo={card.exampleTwo}
                  exampleThree={card.exampleThree}
                />
              ))}
            </div>
            <div className='fase3RightPane'>
              {this.state.columnOrderFase3.map((columnId) => {
                const column = this.state.columnsFase3[columnId];
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
            </div>
          </Split>
        </DragDropContext>
        <Footer prev='/fase2' next='/' />
      </>
    );
  }
}

export default FaseThreePage;
