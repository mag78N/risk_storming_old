import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import '../../pdf.scss';
const styles = StyleSheet.create({
  page: {
    marginTop: 15,
  },
  pdfContainer: {
    padding: 15,
    paddingTop: 25,
  },
  cardContainer: {
    width: 130,
    border: '2pt solid #41a1ce',
    borderRadius: '3pt',
  },
  cardTitle: {
    fontSize: '13pt',
    padding: 5,
    paddingBottom: 0,
    color: '#41a1ce',
    textTransform: 'uppercase',
  },
  cardSubtitle: {
    padding: 5,
    fontSize: '10pt',
    color: '#41a1ce',
    textTransform: 'uppercase',
  },
  cardDescription: {
    fontSize: '10pt',
    color: '#fff',
    backgroundColor: '#41a1ce',
    margin: -1,
    padding: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '20pt',
  },
  riskContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  riskLane: {
    margin: '15pt',
    marginTop: '0pt',
    marginBottom: '15pt',
    padding: '20pt 5pt',
    paddingTop: '0',
    width: '380pt',
    borderBottom: '2pt dashed #e5e5e5',
  },
  riskText: {
    maxWidth: 100,
    fontSize: '9pt',
  },
});

const PdfDocument = (props) => {
  console.log(props);
  return (
    <Document>
      <Page size='A4' charset='utf-8' style={styles.page}>
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
