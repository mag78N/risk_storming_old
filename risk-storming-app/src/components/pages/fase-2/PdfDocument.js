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
  page: {
    marginTop: 15,
  },
  pdfContainer: {
    padding: 15,
    paddingTop: 25,
  },
  cardContainer: {
    width: 170,
    border: '2pt solid #41a1ce',
  },

  cardSubtitle: {
    padding: 5,
    fontSize: '15pt',
    color: '#41a1ce',
    textTransform: 'uppercase',
    backgroundColor: '#f7fcfc',
  },
  cardTitle: {
    fontSize: '16pt',
    padding: 5,
    color: '#41a1ce',
    textTransform: 'uppercase',
    backgroundColor: '#f7fcfc',
  },
  cardDescription: {
    fontSize: '14pt',
    color: '#f7fcfc',
    backgroundColor: '#41a1ce',
    margin: 0,
    padding: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
   /*  borderBottom: '2pt solid #e5e5e5', */
    margin: '20pt',
    paddingBottom: '16pt',
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
  borderBottomWidth: "0",
}, */
  riskLane: {
    margin: '15pt',
    padding: '20pt',
    width: '380pt',
    borderBottom: '2pt dashed #e5e5e5',
  },
  riskText: {
    maxWidth: 200,
    fontSize: '12pt',
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
      <Page size='A4' style={styles.page}>
        {props.chosenCards.map((card, index) => (
          <View style={styles.mainContainer} key={index} wrap={false}>
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
