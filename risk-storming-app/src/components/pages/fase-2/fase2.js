import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import CardsContext from '../../../context';
import RightPane from './RightPane';
import RiskView from './RiskView';
//import CardsContextProvider from '../../../context';

class FaseTwoPage extends React.Component {
  static contextType = CardsContext;
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: this.blueCards,
      riskDetails: [
        {
          index: Math.random(),
          risk: '',
        },
      ],
    };
  }

  blueCards = [JSON.parse(localStorage.getItem('selectedBlueCards'))].sort();

  componentDidMount() {
    const { data } = this.context;
    console.log(data);
  }

  render() {
    const { data } = this.context;
    const bluecards = data['bluecards'];
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      const chosenBlueCard = this.blueCards[0][i];
      for (let j = 0; j < 20; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          newArray.push(entireObject);
        }
      }
    }
    console.log(newArray);
    localStorage.setItem('newChosenCards', JSON.stringify(newArray));

    const { chosencards } = this.state;
    console.log(chosencards);
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
            {newArray.map((card) => (
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
            <RightPane newArray={newArray} risks={this.state.riskDetails} />
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
