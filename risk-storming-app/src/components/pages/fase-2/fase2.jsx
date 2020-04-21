import React, { Component } from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';

import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import BlueCardCarousel from './BlueCardCarousel';
import createMiniCards from '../../cards/Card/createMiniCards';
class FaseTwoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blueCards: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      blueCards: JSON.parse(localStorage.getItem('cards')),
    });
  };

  render() {
    console.log(this.state);
    const { blueCards } = this.state;
    return (
      <>
        <TopNavbar />

        <Split
          className='splitContainerFase2'
          sizes={[60, 40]}
          minSize={[250]}
          expandToMin={false}
          gutterSize={5}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div id='fase2LeftPane'>
            {blueCards.map((card) => (
              <>
                <div className='miniCardContainer'>{createMiniCards(card)}</div>
                <hr className='blackLine'></hr>
              </>
            ))}
          </div>
          <div id='fase2RightPane'>
            <BlueCardCarousel />
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
