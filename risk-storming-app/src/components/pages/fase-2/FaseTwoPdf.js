import React, { Component } from 'react';
import Pdf from 'react-to-pdf';
import * as jsPDF from 'jspdf';
import './fase2Pdf.css';
const ref = React.createRef();
const options = {
  orientation: 'landscape',
}
class FaseTwoPdf extends Component {


  render() {
    const { chosenCards } = this.props.location.state.data;
    console.log(chosenCards);

    return (
      <div>
        <Pdf targetRef={ref} filename='fase2.pdf' options={options}>
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>

        <div ref={ref} className='pdfContainer'>
          {chosenCards.map((card,index) => (
            <>
              <div className='mainContainer' key={index}>
                <div className='cardContainer'>
                  <div>{card.title}</div>
                  <div>{card.subTitle}</div>
                  <div>{card.description}</div>
                </div>
                <div className='riskContainer'>
                  {card.risks.map((risk,index) => (
                    <div className='riskText' key={index}>{risk.label}</div>
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
