import React from 'react';
import '../../cards/color-css/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './styles/fase2.css';
import '../risk-row.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import RightPane from './RightPane/RightPane';
import RiskListLeftPane from './LeftPane/RiskListLeftPane';
import { Link } from 'react-router-dom';

class FaseTwoPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
    };
  }

  componentDidMount() {
    console.log('fase2 component did mount');
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount() {
    console.log('fase2 componentwillunmount');
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    console.log('fase 2 hydrate state with local storage');
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
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
    console.log('fase 2 savestate to localstorage');
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleChange = (e) => {
    const datasetCardId = e.target.dataset.cardid;
    const datasetRiskIndex = e.target.dataset.index;
    const value = e.target.value;
    this.setState((prevState) => ({
      chosenCards: prevState.chosenCards.map((card) => {
        if (datasetCardId === card.id) {
          card.risks[datasetRiskIndex].label = value;
        }
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
      card.risks = [...card.risks, { label: '', cards: [] }];
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
    console.log(this.state);
    return (
      <>
        <TopNavbar faseNum='Phase 2' />
        <Link
          className='buttonSecondary exportButton'
          to={{
            pathname: '/fase2Pdf',
            state: {
              data: this.state,
            },
          }}
          
        >
          Export to PDF
        </Link>
        <Split
          className='splitContainer splitContainerFase2'
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
            {chosenCards.map((card, index) => (
              <div className='cardRow' key={index}>
                <div className='innerCardRow'>
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
                </div>
                <div className='innerRiskRow'>
                  <RiskListLeftPane
                    chosenCards={chosenCards}
                    card={card}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='rightPane fase2RightPane'>
            <RightPane
              chosenCards={chosenCards}
              handleChange={this.handleChange}
              addNewRow={this.addNewRow}
              deleteRow={this.deleteRow}
              onsubmit={this.onsubmit}
            />
          </div>
        </Split>
        <Footer
          prev='/fase1'
          next='/fase3'
          prevFase='Phase 1'
          nextFase='Phase 3'
        />
      </>
    );
  }
}
export default FaseTwoPage;
