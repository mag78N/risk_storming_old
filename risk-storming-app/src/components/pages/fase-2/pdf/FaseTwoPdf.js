import React, { Component } from 'react';
import TopNavbar from '../../../TopNavbar/TopNavbar';
import PdfDocument from './PdfDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

class FaseTwoPdf extends Component {
  render() {
    const { chosenCards } = this.props.location.state.data;
    console.log(chosenCards);

    return (
      <>
        <TopNavbar faseNum='Phase 2 export to PDF' />
        <div className='pdfContainer'>
          <PDFDownloadLink
            document={<PdfDocument chosenCards={chosenCards} />}
            fileName='fase2.pdf'
            className='buttonSecondary downloadButton'
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download Pdf'
            }
          </PDFDownloadLink>
        </div>
      </>
    );
  }
}
export default FaseTwoPdf;
