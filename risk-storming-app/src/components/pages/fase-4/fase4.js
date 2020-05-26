import React, { Component } from 'react';
import './styles/fase4.css';
import Card from './Card';
import RiskList from './Risklist';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
class FaseFourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
    };
  }

  componentDidMount() {
    console.log('fase 4 componentdidmount');
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    console.log('fase 4 componentwillunmount');
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    //saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    console.log('fase 4 hydrate state with local storage');
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
    console.log('fase 4 savestate to localstorage');
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage

      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  render() {
    const { chosenCards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 4' homepage='/mainpage' />

        <div className='leftPane fase4LeftPane'>
          {chosenCards.map((card, index) => (
            <div className='cardRow' key={index}>
              <div className='innerCardRow'>
                <Card
                  key={card.id}
                  card={card}
                  color={card.color}
                  title={card.title}
                  subTitle={card.subTitle}
                />
              </div>
              <div className='innerRiskRow'>
                <RiskList chosenCards={chosenCards} card={card} />
              </div>
            </div>
          ))}
        </div>
        <Footer
          prev='/fase3'
          next='/mainpage'
          prevFase='Phase 3'
          nextFase='Main Page'
        />
      </>
    );
  }
}

export default FaseFourPage;
