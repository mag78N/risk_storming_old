import React, { Component } from 'react';
import Pdf from 'react-to-pdf';
import './fase2Pdf.css';
const ref = React.createRef();

class FaseTwoPdf extends Component {
  chosenCards = this.props.location.state.data;

  render() {
    const { chosenCards } = this.props.location.state.data;
    console.log(chosenCards);

    return (
      <div>
        <Pdf targetRef={ref} filename='fase2.pdf'>
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>

        <div ref={ref} className='pdfContainer'>
          {chosenCards.map((card) => (
            <>
              <div className='mainContainer'>
                <div className='cardContainer'>
                  <div>{card.title}</div>
                  <div>{card.subTitle}</div>
                  <div>{card.description}</div>
                </div>
                <div className='riskContainer'>
                  {card.risks.map((risk) => (
                    <div className='riskText'>{risk.label}</div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
export default FaseTwoPdf;
