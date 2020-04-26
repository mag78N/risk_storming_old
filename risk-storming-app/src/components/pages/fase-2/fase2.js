import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import BlueCardCarousel from './BlueCardCarousel';
import RiskPostIt from './RiskView';
import CardsContext from '../../../context';
import RightPane from './RightPane';
import RiskView from './RiskView';
//import CardsContextProvider from '../../../context';

class FaseTwoPage extends React.Component {
  static contextType = CardsContext;
  state = {
    chosenCards: this.blueCards,
    /* values: [], */
  };

  blueCards = [JSON.parse(localStorage.getItem('selectedBlueCards'))].sort();
  componentDidMount() {
    const { data } = this.context;
    console.log(data);

    /* const risks = [];
    data.bluecards.map((risk) =>{ risks.push(risk)}); */
  }
 /*  createPostIt = () => {
    return this.state.values.map((el, index) => (
      <div key={i}>
        <input
          type='text'
          value={el || ''}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type='button'
          value='remove'
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  };
  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }
  addClick() {
    this.setState((prevState) => ({ values: [...prevState.values, ''] }));
  }
  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  } */
  /* handleAddRisk = (e) => {
    console.log('risk added!');
    const input = document.getElementById('input');
    localStorage.setItem('risks', input.value); */
    //setData();
    /*  document.querySelector('.riskForm').appendChild
    this.setState((prevState) => ({
      risks: [...prevState.risks, { cardId: '', id: '', content: '' }],
    })); */
  //;
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

    /* const { risks } = this.state;
    for (let i = 0; i < bluecards.length; i++) {
      const bluecard = bluecards[i];
      const riskprop = bluecard['risks'];
      console.log(riskprop);
    } */
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
           {/*  {risks.map((value, index) => {
              let riskId = `risk-${index}`;
              return (
                <RiskPostIt */}
                  {/*  addRisk={props.addRisk} 
                  index={index}
                  key={index}
                  htmlFor={riskId}
                  name={riskId}
                  data-id={index}
                  id={riskId}
                />
              );
            })} */}
          </div>
          <div className='fase2RightPane'>
            <RightPane
              newArray={newArray} risks={this.state.risks}

            />  
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
