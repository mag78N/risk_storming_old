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
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// method to handle to the heroe cards movement
const move = (state, source, destination) => {
  const srcListClone = [...state[source.droppableId]];
  const destListClone =
    source.droppableId === destination.droppableId
      ? srcListClone
      : [...state[destination.droppableId]];

  const [movedElement] = srcListClone.splice(source.index, 1);
  destListClone.splice(destination.index, 0, movedElement);

  return {
    [source.droppableId]: srcListClone,
    ...(source.droppableId === destination.droppableId
      ? {}
      : {
          [destination.droppableId]: destListClone,
        }),
  };
};
class FaseOnePageRefactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
      RIGHTCOLUMN: Object.values(bluecards),
      /* chosenCards: [],
      bluecards: bluecards, */
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
  /* onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedbluecards = reorder(
      this.state.bluecards,
      result.source.index,
      result.destination.index
    );

    this.setState({
      bluecards: reorderedbluecards,
    });
  } */
  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState((state) => {
      return move(state, source, destination);
    });
  };
  /* onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const getCardList = (droppableId) => {
      if (droppableId === 'RIGHT-COLUMN') {
        return this.state.bluecards;
      }
      return this.state.chosenCards;
    };
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = getCardList(source.droppableId);
    console.log('start :', start);
    const finish = getCardList(destination.droppableId);
    console.log('finish :', finish);
    const draggedCard = start.splice(source.index, 1);
    finish.splice(destination.index, 0, draggedCard);

    if (source.droppableId === 'RIGHT-COLUMN') {
      this.setState((prevState) => {
        start.splice(source.index, 1);
        return { bluecards: start, chosenCards: finish };
      });
      //this.setState({ colorcards: start });
    } else {
      this.setState((prevState) => {
        start.splice(source.index, 1);
        return {
          chosenCards: start,
          bluecards: finish,
        };
      });
    }

    if (destination.droppableId === 'RIGHT-COLUMN') {
      this.setState((prevState) => {
        start.splice(source.index, 1);
        return { bluecards: finish, chosenCards: start };
      });
    } else {
      this.setState((prevState) => {
        start.splice(source.index, 1);

        return { chosenCards: start, bluecards: finish };
      });
    }
  };
 */
  render() {
    console.log('typeof bluecards: ', typeof this.state.bluecards);
    console.log('state inside render :', this.state);
    const { chosenCards, bluecards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 1' />
        <div className='bluecardCounter'>
          Selected cards: <strong>{this.state.chosenCards.length}</strong> out
          of 6.
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
              <LeftColumn
                id="chosenCards"
                cards={this.state.chosenCards} />
            </div>

            <div className='rightPane fase1RightPane'>
              <RightColumn id="RIGHTCOLUMN" bluecards={this.state.RIGHTCOLUMN} />
            </div>
          </Split>
        </DragDropContext>
        <Footer
          prev='/fase2'
          next='/fase2'
          prevFase='Phase 2'
          nextFase='Main Page'
        />
      </>
    );
  }
}

export default FaseOnePageRefactor;
