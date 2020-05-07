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
import { colorcards } from '../../../assets/en/colorcards';
import Card from './../fase-2/Card';
import Column from './Column';
import RiskList from './Risklist';
import './styles/fase3.css';
import '../risk-row.css';

class FaseThreePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: JSON.parse(localStorage.getItem('chosenCards')),
      colorcards: Object.values(colorcards),

      /* columnsFase3: {
        'column-1': {
          id: 'column-1',
          title: 'risks',
          cardIds: [],
          class: '',
        },
        'RIGHT-COLUMN': {
          id: 'RIGHT-COLUMN',
          title: 'color cards',
          cardIds: Object.keys(colorcards),
          class: 'rightPane fase1RightPane',
        },
      },
      columnOrderFase3: ['column-1', 'RIGHT-COLUMN'], */
    };
  }

  componentDidMount() {
    //this.hydrateStateWithLocalStorage();
    /*  window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    ); */
    const dropzones = document.querySelectorAll('.dropzone');
    const arrDropzones = Array.from(dropzones);
    const arrayOfDropIds = [];
    arrDropzones.map((dropzone) => {
      const dropIds = dropzone.dataset.rbdDroppableId;
      console.log(dropIds);
      arrayOfDropIds.push(dropIds);
      return this.setState({ columns: arrayOfDropIds });
    });
    console.log('Array of risk-dropzone-ids: ', arrayOfDropIds);
    //this.setState({ columns: arrayOfDropIds });
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }
  /* saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  componentDidUpdate() {
    this.saveStateToLocalStorage();
  } */

  getCardList = (droppableId) => {
    if (droppableId === 'RIGHT-COLUMN') {
      return [...this.state.colorcards];
    }
    const [cardId, riskId] = droppableId.split('|');
    const riskIndex = parseInt(riskId.split('-')[1]) - 1;

    const foundCard = this.state.chosenCards.find((card) => card.id === cardId);
    return [...foundCard.risks[riskIndex].cards];
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId ===
      source.droppableId /* &&
      destination.index === source.index */
    ) {
      return;
    }
    const start = this.getCardList(source.droppableId);
    console.log(start);
    const finish = this.getCardList(destination.droppableId);

    const removedCard = start.splice(source.index, 1)[0];
    finish.splice(destination.index, 0, removedCard);

    if (source.droppableId === 'RIGHT-COLUMN') {
      this.setState((prevState) => {
        return { colorcards: start };
      });
    } else {
      this.setState((prevState) => {
        const newCards = [...prevState.chosenCards];
        const [cardId, riskId] = source.droppableId.split('|');
        const riskIndex = parseInt(riskId.split('-')[1]) - 1;

        const foundCard = newCards.find((card) => card.id === cardId);
        foundCard.risks[riskIndex].cards = start;
        console.log(foundCard);
        return { chosenCards: newCards };
      });
    }

    if (destination.droppableId === 'RIGHT-COLUMN') {
      this.setState((prevState) => {
        return { colorcards: finish };
      });
    } else {
      this.setState((prevState) => {
        const newCards = [...prevState.chosenCards];
        const [cardId, riskId] = destination.droppableId.split('|');
        const riskIndex = parseInt(riskId.split('-')[1]) - 1;

        const foundCard = newCards.find((card) => card.id === cardId);
        foundCard.risks[riskIndex].cards = finish;
        console.log(foundCard);
        return { chosenCards: newCards };
      });
    }

    /* console.log(
      'source.droppableId => destination.droppableId: ',
      source.droppableId,
      destination.droppableId
    ); */

    /* if (start === finish) {
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
    this.setState(newState); */
  };

  render() {
    console.log('state inside render :', this.state);
    const { chosenCards, colorcards } = this.state;

    return (
      <>
        <TopNavbar faseNum='Fase 3' />

        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Split
            className='splitContainer splitContainerFase3'
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
            <div className='leftPane fase3LeftPane'>
              {chosenCards.map((card, index) => (
                <div className='cardRow' key={index}>
                  <div className='innerCardRow'>
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
                  <div className='innerRiskRow'>
                    <RiskList chosenCards={chosenCards} card={card} />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Column colorcards={colorcards} />
            </div>
          </Split>
        </DragDropContext>
        <Footer prev='/fase2' next='/' />
      </>
    );
  }
}

export default FaseThreePage;
