import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
<<<<<<< HEAD
import initialBlueCardData from '../../cards/card-data';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import BlueCardCarousel from './BlueCardCarousel';
import { ThemeContext } from '../../../context';

class FaseTwoPage extends React.Component {
  static contextType = ThemeContext;
  state = this.context;
  componentDidMount() {
    console.log(this.state);
  }

  render() {
=======
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
>>>>>>> d4ada8207d4ad028bd36eb6aeaf4d90305ae7666
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
<<<<<<< HEAD
          <div className='fase2LeftPane'></div>
          <div className='fase2RightPane'>
           {/*  <BlueCardCarousel /> */}
=======
          <div className='fase2LeftPane'>
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
          <div className='fase2RightPane'>
            <RightPane newArray={newArray} risks={this.state.riskDetails} />
>>>>>>> d4ada8207d4ad028bd36eb6aeaf4d90305ae7666
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
