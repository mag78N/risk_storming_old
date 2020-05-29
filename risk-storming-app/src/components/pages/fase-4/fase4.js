import React, { Component } from 'react';
import './styles/fase4.css';
import '../risk-row.css';
import Container from 'react-bootstrap/Container';
import BlueCard from './BlueCard';
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
    const datasetCardId = e.target.dataset.cardid;
    const datasetRiskIndex = e.target.dataset.riskindex;
    const datasetTaskIndex = e.target.dataset.taskindex;
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => {
      const newCards = [...prevState.chosenCards];
      const card = newCards.find((newCard) => {
        return newCard.id === datasetCardId;
      });
      const task = card.risks[datasetRiskIndex].tasks[datasetTaskIndex];
      task[name] = value;

      return {
        chosenCards: newCards,
      };
    });
  };

  addNewTask = (cardRiskId) => {
    const [cardId, riskId] = cardRiskId.split('|');
    const riskIndex = parseInt(riskId.split('-')[1]) - 1;
    this.setState((prevState) => {
      const newCards = [...prevState.chosenCards];
      const card = newCards.find((newCard) => {
        return newCard.id === cardId;
      });
      const risk = card.risks[riskIndex];
      risk.tasks = [
        ...risk.tasks,
        {
          owner: '',
          action: '',
          deliverable: '',
        },
      ];

      return {
        chosenCards: newCards,
      };
    });
  };
  deleteTaskRow = (cardRiskId, index) => {
    console.log('row deleted');
    const [cardId, riskId] = cardRiskId.split('|');
    const riskIndex = parseInt(riskId.split('-')[1]) - 1;
    this.setState((prevState) => {
      const newCards = [...prevState.chosenCards];
      const card = newCards.find((newCard) => {
        return newCard.id === cardId;
      });
      const risk = card.risks[riskIndex];
      risk.tasks = risk.tasks.filter((task, taskIndex) => {
        return taskIndex !== index;
      });

      return risk;
    });
  };
  render() {
    const { chosenCards } = this.state;
    return (
      <>
        <TopNavbar faseNum='Phase 4' homepage='/mainpage' />
        <Container fluid className='fase4Container'>
          {chosenCards.map((card, index) => (
            /* 1 cardStream = blue card +  1 risk + colorcards for 1 risk */
            <BlueCard
              key={index}
              card={card}
              addnewtask={this.addNewTask}
              deletetaskrow={this.deleteTaskRow}
              onchange={this.handleChange}
            />
          ))}
        </Container>
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
