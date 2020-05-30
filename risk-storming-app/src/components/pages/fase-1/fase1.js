import React from 'react';
import '../../cards/Card/Card.css';
import '../../cards/Card/card-colors.scss';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { shuffle } from '../../../utils/utils';
import Split from 'react-split';
import './styles/fase1.css';
import '../../../index.css';
import Footer from '../../Footer/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { bluecards } from '../../../assets/en/blueCards';

// method to handle to the cards movement
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
class FaseOnePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
      RIGHTCOLUMN: Object.values(bluecards),
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

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    this.setState((state) => {
      return move(state, source, destination);
    });
  };

  render() {
    console.log('state inside render :', this.state);
    const { chosenCards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 1' homepage='/mainpage' />
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
              <LeftColumn id='chosenCards' cards={chosenCards} />
            </div>

            <div className='rightPane fase1RightPane'>
              <RightColumn id='RIGHTCOLUMN' cards={this.state.RIGHTCOLUMN} />
            </div>
          </Split>
        </DragDropContext>
        <Footer
          prev='/mainpage'
          next='/fase2'
          prevFase='Main Page'
          nextFase='Phase 2'
        />
      </>
    );
  }
}

export default FaseOnePage;
