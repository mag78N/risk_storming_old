import React, { Component } from 'react';
import './styles/fase4.css';
import BlueCard from './BlueCard';

import Risk from './Risk';
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
  handleChange = (e) => {
    const datasetRiskIndex = e.target.dataset.riskindex;
    const datasetTaskId = e.target.dataset.taskid;
    const datasetTaskIndex = e.target.dataset.taskindex;
    const value = e.target.value;
    this.setState((prevState) => ({
      chosenCards: prevState.chosenCards.map((card) => {
        card.risks[0].tasks[0].a = value;

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
      card.risks.tasks = [...card.risks.tasks, { tasks: [] }];
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
  render() {
    const { chosenCards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 4' homepage='/mainpage' />

        <div className='fase4LeftPane'>
          {chosenCards.map((card, index) => (
            <div className='cardStream' key={index}>
              <BlueCard
                key={card.id}
                card={card}
                color={card.color}
                title={card.title}
                subTitle={card.subTitle}
              />
              <div>
                <Risk card={card} handleChange={this.handleChange} />
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
