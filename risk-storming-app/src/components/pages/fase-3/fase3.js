import React from 'react';
import Split from 'react-split';
import '../../cards/Card/Card.css';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/red-card/RedCard.css';
import '../../cards/darkblue-card/DarkblueCard.css';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { DragDropContext } from 'react-beautiful-dnd';
import { colorcards } from '../../../assets/en/colorcards';
import Card from './../fase-2/Card';
import RightColumn from './RightColumn';
import RiskList from './Risklist';
import './styles/fase3.css';
import '../risk-row.css';

class FaseThreePage extends React.Component {
  constructor(props) {
    //const cards = JSON.parse(localStorage.getItem('chosenCards'));
    super(props);
    this.state = {
      chosenCards: [],
      colorcards: Object.values(colorcards),
    };
  }

  componentDidMount() {
    const cards = JSON.parse(localStorage.getItem('chosenCards'));
    this.setState({ chosenCards: cards });
    //this.state.chosenCards = cards;
    console.log('fase 3 componentdidmount');
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    console.log('fase 3 componentwillunmount');
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    //saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    console.log('fase 3 hydrate state with local storage');
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
  saveStateToLocalStorage() {
    console.log('fase 3 savestate to localstorage');
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage

      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  /* getCardList = (droppableId) => {
    if (droppableId === 'RIGHT-COLUMN') {
      return [...this.state.colorcards];
    }
    const [cardId, riskId] = droppableId.split('|');
    const riskIndex = parseInt(riskId.split('-')[1]) - 1;

    const foundCard = this.state.chosenCards.find((card) => card.id === cardId);
    return [...foundCard.risks[riskIndex].cards];
  }; */

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const getCardList = (droppableId) => {
      if (droppableId === 'RIGHT-COLUMN') {
        return [...this.state.colorcards];
      }
      const [cardId, riskId] = droppableId.split('|');
      const riskIndex = parseInt(riskId.split('-')[1]) - 1;

      const foundCard = this.state.chosenCards.find(
        (card) => card.id === cardId
      );
      return [...foundCard.risks[riskIndex].cards];
    };
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
    const start = getCardList(source.droppableId);
    console.log('start :', start);
    const finish = getCardList(destination.droppableId);
    console.log('finish :', finish);
    const removedCard = start.splice(source.index, 1)[0];
    finish.splice(destination.index, 0, removedCard);

    if (source.droppableId === 'RIGHT-COLUMN') {
      this.setState((prevState) => {
        return { colorcards: start };
      });
      //this.setState({ colorcards: start });
    } else {
      this.setState((prevState) => {
        const newCards = [...prevState.chosenCards];
        const [cardId, riskId] = source.droppableId.split('|');
        const riskIndex = parseInt(riskId.split('-')[1]) - 1;

        const foundCard = newCards.find((card) => card.id === cardId);
        foundCard.risks[riskIndex].cards = start;
        console.log(foundCard);
        return {
          chosenCards: newCards,
        };
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
  };

  render() {
    console.log('state inside render :', this.state);
    const { chosenCards, colorcards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 3' />
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
              <RightColumn colorcards={colorcards} />
            </div>
          </Split>
        </DragDropContext>
        <Footer
          prev='/fase2'
          next='/'
          prevFase='Phase 2'
          nextFase='Main Page'
        />
      </>
    );
  }
}

export default FaseThreePage;
