import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import BlueCardCarousel from './BlueCardCarousel';
import CardsContext from '../../../context';
import { bluecards } from '../../../assets/en/blueCards';

class FaseTwoPage extends React.Component {
  static contextType = CardsContext;
   blueCards = [
      JSON.parse(localStorage.getItem('selectedBlueCards')),
    ].sort();
  componentDidMount() {
    
    const { data } = this.context;
    const bluecards = [data['bluecards']];
    console.log(bluecards);
    console.log(this.blueCards);
    console.log(typeof bluecards);
    console.log(typeof blueCards);
    //console.log(Object.entries(bluecards));
    //console.log(Object.values(blueCards));
   
  }
  //displayChosenBlueCards = () => {
    //var keysOfbluecards = Object.keys(bluecards);
    //var valuesOfblueCards = Object.keys(blueCards);
    //console.log('keys of bluecards: ' + keysOfbluecards);
    //console.log("keys of blueCards: " + valuesOfblueCards);
    //console.log(blueCards);
    //keysOfbluecards.map(key => console.log(key));
    //blueCards.map((value,index) => console.log(value, index));
    /* const newArray = [];
    for (let i = 0; i < 6; i++) {
      const chosenBlueCard = blueCards[0][i];
      for (let j = 0; j < 20; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j]; */
        //const key = entireObject['id'];
        //const index = index;
       /*  if (chosenBlueCard === bluecardKey) {
          //console.log(entireObject);
          newArray.push(entireObject);
        }
      }
    }
    return newArray;
  }; */
  render() {
     const newArray = [];
     for (let i = 0; i < 6; i++) {
       const chosenBlueCard = this.blueCards[0][i];
       for (let j = 0; j < 20; j++) {
         const bluecardKey = Object.keys(bluecards)[j];
         const entireObject = Object.values(bluecards)[j];
         //const key = entireObject['id'];
         //const index = index;
         /* const color = entireObject['color'];
        const title = entireObject['title'];
        const subTitle = entireObject['subTitle'];
        const description = entireObject['description'];
        const exampleOne = entireObject['exampleOne'];
        const exampleTwo = entireObject['exampleTwo'];
        const exampleThree = entireObject['exampleThree']; */
         if (chosenBlueCard === bluecardKey) {
           //console.log(entireObject);
           newArray.push(entireObject);
         }
       }
       
     }
     console.log(newArray);
    //const { data } = this.context;
    
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
            
              <BlueCardCarousel
                newArray={newArray}
                
              />
           
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
