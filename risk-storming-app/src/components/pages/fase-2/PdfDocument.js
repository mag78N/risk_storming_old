import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import './fase2Pdf.css';
const styles = StyleSheet.create({
  pdfContainer: {
    padding: '2rem',
    paddingTop: 'calc(2rem + 40px)',
  },
  /* pdfContainer exportButton :{
  top: '1rem',
  left: '2.5rem',
}, */

  /* pdfContainer cardContainer : {
  width: '210px',
  border: '2px solid rgb(65, 161, 206)',
  -webkit-box-shadow: 'none',
  -moz-box-shadow: 'none',
  box-shadow: 'none',
}, */
  /* pdfContainer .cardTitle,
pdfContainer .cardSubtitle: {
  padding: '0.2rem 0.5rem',
  color: 'rgb(65, 161, 206)',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
}, */
  /* pdfContainer .cardDescription: {
  backgroundColor: 'rgb(65, 161, 206)',
  margin: '0',
  padding: '0.5rem',
}, */

  mainContainer: {
    width: '970px',
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: '2px solid #e5e5e5',
    marginBottom: '1rem',
    paddingBottom: '1rem',
  },
  /* mainContainer:last-child: {
  marginBottom: '0',
  paddingBottom: '0',
  borderBottomWidth: '0',
}, */
  riskContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  /* riskContainer:last-child :{
  borderBottomWidth: '0',
}, */
  riskLane: {
    padding: '1.75rem 1rem',
    width: '750px',
    borderBottom: '2px dashed #e5e5e5',
  },
  riskText: {
    maxWidth: '200px',
    fontSize: '0.8rem',
  },
  /* riskLane:first-child: {
  paddingTop: '0.75rem',
},
riskLane:last-child: {
  paddingBottom: '0.75rem',
} */
});
const PdfDocument = (props) => {
  console.log(props);
  return (
    <Document>
      <Page>
        {props.chosenCards.map((card, index) => (
          <View style={styles.mainContainer} key={index}>
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardSubtitle}>{card.subTitle}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
            <View style={styles.riskContainer}>
              {card.risks.map((risk, index) => (
                <View style={styles.riskLane}>
                  <Text style={styles.riskText} key={index}>
                    {risk.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PdfDocument;
