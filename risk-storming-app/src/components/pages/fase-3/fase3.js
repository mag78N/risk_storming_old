import React from 'react';
import Split from 'react-split';
import { v4 as uuidv4 } from 'uuid';
import '../../cards/Card/Card.scss';
import '../../cards/Card/card-colors.scss';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { DragDropContext } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { colorcards } from '../../../assets/en/colorcards';
import Card from './../fase-2/Card';
import RightColumn from './right-column/RightColumn';
import RiskList from './Leftpane/Risklist';
import './styles/fase3.css';
import '../risk-row.scss';

class FaseThreePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
      colorcards: colorcards,
      filteredColorCards: [],
    };
  }
  componentWillMount() {
    this.setState({
      filteredColorCards: this.state.colorcards,
    });
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

  filterCards = (e) => {
    let updatedList = this.state.colorcards;
    updatedList = updatedList.filter((card) => {
      return (
        card.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredColorCards: updatedList });
  };

  onDragEnd = (result) => {
    const { destination, source } = result;
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
      draggedCard.id =
        destination.droppableId +
        '|' +
        draggedCard.id +
        '|idx' +
        destination.index +
        '|' +
        uuidv4();

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
    //console.log('state inside render :', this.state);
    const { chosenCards, filteredColorCards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 3' homepage='/mainpage' />
        <Link
          className='buttonSecondary exportButton'
          to={{
            pathname: '/fase3Pdf',
            state: {
              data: this.state,
            },
          }}
        >
          Export to PDF
        </Link>
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

            <div className='rightPane fase3RightPane'>
              <RightColumn
                filtercards={this.filterCards}
                colorcards={filteredColorCards}
              />
            </div>
          </Split>
        </DragDropContext>
        <Footer
          prev='/fase2'
          next='/fase4'
          prevFase='Phase 2'
          nextFase='Phase 4'
        />
      </>
    );
  }
}

export default FaseThreePage;
