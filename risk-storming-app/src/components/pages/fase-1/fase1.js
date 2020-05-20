import React from 'react';
import '../../cards/color-css/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import './styles/fase1.css';
import Footer from '../../Footer/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { bluecards } from '../../../assets/en/blueCards';
class FaseOnePage extends React.PureComponent {
  state = {
    bluecards: bluecards,
    selectedBlueCardIds: [],
    chosenCards: [],
    columnsFase1: {
      'column-1': {
        id: 'column-1',
        title: 'selected blue cards',
        cardIds: [],
        class: 'leftPane fase1LeftPane',
      },
      'column-2': {
        id: 'column-2',
        title: 'blue cards',
        cardIds: Object.keys(bluecards),
        class: 'rightPane fase1RightPane',
      },
    },
    columnOrderFase1: ['column-1', 'column-2'],
  };
  getChosenCardsFromFase1() {
    let cardIds = this.state.columnsFase1['column-1'].cardIds;
    localStorage.setItem('selectedBlueCardIds', JSON.stringify(cardIds));
    const chosenBlueCardsArray = [];
    for (let i = 0; i < cardIds.length; i++) {
      const chosenBlueCard = cardIds[i];
      for (let j = 0; j < Object.keys(bluecards).length; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          chosenBlueCardsArray.push(entireObject);
          this.setState({ chosenCards: [...chosenBlueCardsArray] });
        }
      }
    }
    //this.setState({ chosenCards: [...chosenBlueCardsArray] });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.columnsFase1['column-1'].cardIds.length !==
      this.state.columnsFase1['column-1'].cardIds.length
    ) {
      console.log('fase1 component did update');
      this.getChosenCardsFromFase1();
    }
  }
  componentDidMount() {
    console.log('fase 1 componentdidmount');
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    console.log('fase 1 componentwillunmount');
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    //saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    console.log('fase 1 hydrate state with local storage');
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
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
    console.log('fase 1 save state to localstorage');
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  onDragEnd = (result) => {
    const { columnsFase1 } = this.state;
    const { destination, source, draggableId } = result;
    //if item is dropped in non-droppable destination; do nothing
    if (!destination) {
      return;
    }
    //if item is dropped in same spot; do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //moving items in the same list; rearrange items
    const start = this.state.columnsFase1[source.droppableId];
    const finish = this.state.columnsFase1[destination.droppableId];
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
        columnsFase1: {
          ...columnsFase1,
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
      columnsFase1: {
        ...columnsFase1,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
    console.log('fase 1 newState:', newState);
  };

  render() {
    const { columnsFase1, columnOrderFase1, bluecards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 1' />
        <DragDropContext onDragEnd={this.onDragEnd}>
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
            {columnOrderFase1.map((columnId) => {
              const column = columnsFase1[columnId];
              const cards = column.cardIds.map((cardId) => bluecards[cardId]);

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
        <Footer
          prev='/'
          next='/fase2'
          prevFase='Main Page'
          nextFase='Phase 2'
        />
      </>
    );
  }
}

export default FaseOnePage;
