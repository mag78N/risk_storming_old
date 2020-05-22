import React from 'react';
import '../../cards/color-css/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import './styles/fase1.css';
import Footer from '../../Footer/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { bluecards } from '../../../assets/en/blueCards';

class FaseOnePageRefactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
      bluecards: bluecards,
    };
  }
  componentDidMount() {
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

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const getCardList = (droppableId) => {
      if (droppableId === 'RIGHT-COLUMN') {
        return [...this.state.filteredColorCards];
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
    //console.log('start :', start);
    const finish = getCardList(destination.droppableId);
    //console.log('finish :', finish);
    /* const removedCard = start.splice(source.index, 1)[0];
    finish.splice(destination.index, 0, removedCard); */
    let removedCard = null;
    if (source.droppableId === 'RIGHT-COLUMN') {
      const draggedCard = { ...start[source.index] };
      draggedCard.id = destination.droppableId + '|' + draggedCard.id;
      finish.splice(destination.index, 0, draggedCard);
      this.setState((prevState) => {
        return { filteredColorCards: start };
      });
      //this.setState({ colorcards: start });
    } else {
      removedCard = start.splice(source.index, 1)[0];

      this.setState((prevState) => {
        const newCards = [...prevState.chosenCards];
        const [cardId, riskId] = source.droppableId.split('|');
        const riskIndex = parseInt(riskId.split('-')[1]) - 1;

        const foundCard = newCards.find((card) => card.id === cardId);
        foundCard.risks[riskIndex].cards = start;
        //console.log(foundCard);
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
      if (removedCard) {
        finish.splice(destination.index, 0, removedCard);
      }
      this.setState((prevState) => {
        const newCards = [...prevState.chosenCards];
        const [cardId, riskId] = destination.droppableId.split('|');
        const riskIndex = parseInt(riskId.split('-')[1]) - 1;

        const foundCard = newCards.find((card) => card.id === cardId);
        foundCard.risks[riskIndex].cards = finish;
        //console.log(foundCard);
        return { chosenCards: newCards };
      });
    }
  };

  render() {
    console.log('state inside render :', this.state);
    const { chosenCards, bluecards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 1' />
        <div className='bluecardCounter'>
          Selected cards:{' '}
          <strong>{this.state.columnsFase1['column-1'].cardIds.length}</strong>{' '}
          out of 6.
        </div>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Split
            className='splitContainer splitContainerFase1'
            sizes={[40, 60]}
            minSize={[300, 150]}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
          >
            <div className='leftPane fase1LeftPane'>
              <LeftColumn chosenCards={chosenCards} />
            </div>

            <div className='rightPane fase1RightPane'>
              <RightColumn bluecards={bluecards} />
            </div>
          </Split>
        </DragDropContext>
        <Footer
          prev='/fase2'
          next='/mainpage'
          prevFase='Phase 2'
          nextFase='Main Page'
        />
      </>
    );
  }
}

export default FaseOnePageRefactor;
