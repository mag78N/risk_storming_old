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
      riskDetails: [
        {
          risk: '',
        },
      ],
    };
  }
  handleChange = (e) => {
    if (['risk'].includes(e.target.className)) {
      let riskDetails = [...this.state.riskDetails];
      riskDetails[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ riskDetails }, () => console.log(this.state.riskDetails));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      riskDetails: [
        ...prevState.riskDetails,
        {
          risk: '',
        },
      ],
    }));
  };

  deleteRow = (index) => {
    this.setState({
      riskDetails: this.state.riskDetails.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };

  clickOnDelete(record) {
    this.setState({
      riskDetails: this.state.riskDetails.filter((r) => r !== record),
    });
  }
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
          chosenBlueCardsArray.push(entireObject);
        }
      }
    }
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
                    riskDetails={this.state.riskDetails}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='rightPane fase2RightPane'>
            <RightPane
              chosenCards={chosenCards}
              riskDetails={this.state.riskDetails}
              handleChange={this.handleChange}
              addNewRow={this.addNewRow}
              deleteRow={this.deleteRow}
              delete={this.clickOnDelete.bind(this)}
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
