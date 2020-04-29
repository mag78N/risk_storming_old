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
import { bluecards } from '../../../assets/en/blueCards';

class FaseTwoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bluecards: bluecards,
      chosenCards: this.getCardObjectsFromLocalStorage(),
      riskDetails: [
        {riskId: '1'},
        {content: 'test'},
      ]
      
    };
  }
  getCardObjectsFromLocalStorage() {
    const chosenCardIds = JSON.parse(localStorage.getItem('selectedBlueCards'));
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      const chosenBlueCard = chosenCardIds[i];
      for (let j = 0; j < 20; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          newArray.push(entireObject);
        }
      }
    }
    return newArray;
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
            {chosenCards.map((card) => (
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
            ))}
          </div>
          <div className='rightPane fase2RightPane'>
            <RightPane chosenCards={chosenCards} riskDetails={this.state.riskDetails} />
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
