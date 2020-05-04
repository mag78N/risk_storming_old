import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import RightPane from './RightPane';
import RiskView from './RiskView';
import RiskListLeftPane from './RiskListLeftPane';
import { bluecards } from '../../../assets/en/blueCards';

class FaseTwoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bluecards: bluecards,
      chosenCards: this.getCardObjectsFromLocalStorage(),
      /* riskDetails: [
        {
          risk: '',
        },
      ], */
    };
  }
  handleChange = (e) => {
    /* let riskDetails = [...this.state.riskDetails];
    riskDetails[e.target.dataset.id][e.target.className] = e.target.value;
    this.setState({ riskDetails }, () => console.log(this.state.riskDetails)); */

    const datasetCardId = e.target.dataset.cardid;
    const datasetRiskIndex = e.target.dataset.index;
    const value = e.target.value;
    this.setState((prevState) => ({
      chosenCards: prevState.chosenCards.map((card) => {
        console.log(datasetCardId, datasetRiskIndex);
        if (datasetCardId === card.id) {
          console.log(value);
          card.risks[datasetRiskIndex] = value;
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
      card.risks = [...card.risks, ''];
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

  /* clickOnDelete(record) {
    this.setState({
      riskDetails: this.state.riskDetails.filter((r) => r !== record),
    });
  } */
  onsubmit = (e) => {
    e.preventDefault();
  };
  getCardObjectsFromLocalStorage() {
    const chosenCardIds = JSON.parse(localStorage.getItem('selectedBlueCards'));
    const chosenBlueCardsArray = [];
    for (let i = 0; i < chosenCardIds.length; i++) {
      const chosenBlueCard = chosenCardIds[i];
      for (let j = 0; j < Object.keys(bluecards).length; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          entireObject.risks = [''];
          chosenBlueCardsArray.push(entireObject);
        }
      }
    }
    //chosenBlueCardsArray[0].risks = ['test1', 'test2', 'test3'];
    return chosenBlueCardsArray;
  }

  render() {
    const { chosenCards } = this.state;
    localStorage.setItem('chosenBlueCards', JSON.stringify(chosenCards));
    console.log(chosenCards);
    console.log(this.state);

    return (
      <>
        <TopNavbar faseNum='Fase 2' />
        <Split
          className='splitContainerFase2'
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
          <div className='leftPane fase2LeftPane'>
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
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
