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
    console.log(Object.entries(bluecards));
    console.log(Object.values(blueCards));
  }
  compare = () => {
    var keysOfbluecards = Object.entries(bluecards);
    var keysOfblueCards = Object.values(blueCards);
    console.log(keysOfblueCards);
    console.log(keysOfbluecards);
    var newArray = [];
    for (const value1 of keysOfblueCards) {
      for (const value2 of keysOfbluecards) {
        if (keysOfblueCards === value2[1]['id']) {
          newArray.push(...value2[1]);
        }

        console.log(value2[1]);
        console.log(keysOfblueCards[0]);
      }
      console.log(newArray);
    }
    for (const value of keysOfblueCards) {
      if (keysOfbluecards.includes(keysOfblueCards[value])) {
        newArray.push(value);
      }
      console.log(newArray);
      console.log(value);
    }
    var results = [];
    for (let i = 0; i < keysOfblueCards.length; i++) {
      for (let j = 0; j < keysOfbluecards.length; j++) {
        if (keysOfblueCards[i] === keysOfbluecards[j]) {
          results.push(keysOfbluecards[i]);
        }
        //console.log(results);
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
