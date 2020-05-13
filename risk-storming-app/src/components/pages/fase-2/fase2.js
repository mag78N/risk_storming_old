import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './styles/fase2.css';
import '../risk-row.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import RightPane from './RightPane/RightPane';
import RiskListLeftPane from './LeftPane/RiskListLeftPane';
import { bluecards } from '../../../assets/en/blueCards';

import { Link } from 'react-router-dom';

const ref = React.createRef();

class FaseTwoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bluecards: bluecards,
      chosenCards: [],
    };
  }
  componentDidMount() {
    const chosenCardIds = JSON.parse(
      localStorage.getItem('selectedBlueCardIds')
    );
    const chosenBlueCardsArray = [];
    for (let i = 0; i < chosenCardIds.length; i++) {
      const chosenBlueCard = chosenCardIds[i];
      for (let j = 0; j < Object.keys(bluecards).length; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          entireObject.risks = [
            {
              label: '',
              cards: [],
            },
          ];
          chosenBlueCardsArray.push(entireObject);
        }
      }
    }
    this.setState({ chosenCards: chosenBlueCardsArray });
    //this.state.chosenCards = chosenBlueCardsArray;

    console.log(this.state);
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }
  /* componentDidUpdate() {
    this.saveStateToLocalStorage.bind(this);
  }  */
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
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleChange = (e) => {
    const datasetCardId = e.target.dataset.cardid;
    const datasetRiskIndex = e.target.dataset.index;
    const value = e.target.value;
    this.setState((prevState) => ({
      chosenCards: prevState.chosenCards.map((card) => {
        console.log(datasetCardId, datasetRiskIndex);
        if (datasetCardId === card.id) {
          console.log(value);
          card.risks[datasetRiskIndex].label = value;
        }
        return card;
      }),
    }));
  };

  addNewRow = (cardId) => {
    this.setState((prevState) => {
      const newCards = [...prevState.chosenCards];
      const card = newCards.find((newCard) => {
        return newCard.id === cardId;
      });
      card.risks = [...card.risks, { label: '', cards: [] }];
      return {
        chosenCards: newCards,
      };
    });
  };

  deleteRow = (cardId, index) => {
    this.setState((prevState) => ({
      chosenCards: prevState.chosenCards.map((card) => {
        if (cardId === card.id) {
          card.risks = card.risks.filter((risk, riskIndex) => {
            return riskIndex !== index;
          });
        }
        return card;
      }),
    }));
  };

  onsubmit = (e) => {
    e.preventDefault();
  };
  /* getCardObjectsFromLocalStorage() {
    const chosenCardIds = JSON.parse(
      localStorage.getItem('selectedBlueCardIds')
    );
    const chosenBlueCardsArray = [];
    for (let i = 0; i < chosenCardIds.length; i++) {
      const chosenBlueCard = chosenCardIds[i];
      for (let j = 0; j < Object.keys(bluecards).length; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          entireObject.risks = [
            {
              label: '',
              cards: [],
            },
          ];
          chosenBlueCardsArray.push(entireObject);
        }
      }
    }
    localStorage.setItem('chosenCards', JSON.stringify(chosenBlueCardsArray));
    return chosenBlueCardsArray;
  } */

  render() {
    const { chosenCards } = this.state;
    console.log(this.state);
    return (
      <>
        <TopNavbar faseNum='Phase 2' />
        <Link
          className='btn exportButton'
          to={{
            pathname: '/fase2Pdf',
            state: {
              data: this.state,
            },
          }}
        >
          Export to PDF
        </Link>
        <Split
          className='splitContainer splitContainerFase2'
          sizes={[60, 40]}
          minSize={[250]}
          expandToMin={false}
          gutterSize={10}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div ref={ref} className='leftPane fase2LeftPane'>
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
                  <RiskListLeftPane
                    chosenCards={chosenCards}
                    card={card}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='rightPane fase2RightPane'>
            <RightPane
              chosenCards={chosenCards}
              handleChange={this.handleChange}
              addNewRow={this.addNewRow}
              deleteRow={this.deleteRow}
              onsubmit={this.onsubmit}
            />
          </div>
        </Split>
        <Footer
          prev='/fase1'
          next='/fase3'
          prevFase='Phase 1'
          nextFase='Phase 3'
        />
      </>
    );
  }
}
export default FaseTwoPage;
