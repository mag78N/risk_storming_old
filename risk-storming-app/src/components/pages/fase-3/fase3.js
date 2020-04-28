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
import Card from './../fase-2/Card';
import Column from './Column';
import DummyRisk from './DummyRisk';
import './fase3.css';
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
    const column1 = this.state.columnsFase3['column-1'];
    const cardsColumn1 = column1.cardIds.map(
      (cardId) => this.state.cards[cardId]
    );
    const column2 = this.state.columnsFase3['column-2'];
    const cardsColumn2 = column2.cardIds.map(
      (cardId) => this.state.cards[cardId]
    );
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
            sizes={[60, 40]}
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
              {chosenbluecards.map((card, index) => (
                <div className='row cardRow' key={index}>
                  <div className='col'>
                    <div className='row innerCardRow'>
                      <div className='col-3'>
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
                      </div>
                      <div className='col-9'>
                        <DummyRisk
                          columnid={column1}
                          key={column1.id}
                          column={column1}
                          cards={cardsColumn1}
                        />
                        <DummyRisk
                          columnid={column1}
                          key={column1.id}
                          column={column1}
                          cards={cardsColumn1}
                        />
                        <DummyRisk
                          columnid={column1}
                          key={column1.id}
                          column={column1}
                          cards={cardsColumn1}
                        /> 
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Column
                columnid={column2}
                key={column2.id}
                column={column2}
                cards={cardsColumn2}
                class={column2.class}
              />
            </div>
          </Split>
        </DragDropContext>
        <Footer prev='/fase2' next='/' />
      </>
    );
  }
}

export default FaseThreePage;
