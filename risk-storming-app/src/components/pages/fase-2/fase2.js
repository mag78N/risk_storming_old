import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from '../fase-1/Card';
import BlueCardCarousel from './BlueCardCarousel';
import CardsContext from '../../../context';
import { bluecards } from '../../../assets/en/blueCards';
const blueCards = [
  JSON.parse(localStorage.getItem('selectedBlueCards')),
].sort();
class FaseTwoPage extends React.Component {
  static contextType = CardsContext;
  /* state = this.context.data; */
  componentDidMount() {
    const { data } = this.context;
    const bluecards = [data['bluecards']];
    console.log(bluecards);
    console.log(blueCards);
    console.log(typeof bluecards);
    console.log(typeof blueCards);
    //console.log(Object.entries(bluecards));
    //console.log(Object.values(blueCards));

  }
  compare = () => {
    var keysOfbluecards = Object.keys(bluecards);
    //var valuesOfblueCards = Object.keys(blueCards);
   
    console.log("keys of bluecards: " + keysOfbluecards);

    //console.log("keys of blueCards: " + valuesOfblueCards);
      console.log(blueCards);
    //keysOfbluecards.map(key => console.log(key));

    //blueCards.map((value,index) => console.log(value, index));

   /*  for (let i = 0; i < 6; i++) {
      const element = blueCards[0][i];
      //console.log(element);
      keysOfbluecards.map(key => {
        if (key === element) {
          console.log(key);
        }
      })
    }
    for (let j = 0; j < 20; j++){
      const el = Object.keys(bluecards)[j];
      const entry = Object.values(bluecards)[j];
      console.log(el);
      console.log(entry);
    } */
    
    for (let i = 0; i < 6; i++){
      const chosenBlueCard = blueCards[0][i];
      for (let j = 0; j < 20; j++){
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          console.log(entireObject);
        }
      }
    }


  };

  render() {
    const { data } = this.context;
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
          <div className='fase2LeftPane'>{this.compare()}</div>
          <div className='fase2RightPane'>{/*  <BlueCardCarousel /> */}</div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
