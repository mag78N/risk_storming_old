import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './fase3Pdf.css';
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
    marginHorizontal: '5pt',
    marginVertical: '5pt',
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
    display: 'flex',
    flexDirection: 'row',
    margin: '15pt',
    marginTop: '0pt',
    marginBottom: '15pt',
    padding: '20pt 5pt',
    paddingTop: '0',
    width: '400pt',
    borderBottom: '2pt dashed #e5e5e5',
  },
  riskText: {
    paddingTop: '5pt',
    maxWidth: 100,
    fontSize: '9pt',
  },
  colorCardsRow: {
    marginLeft: '20pt',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const PdfDocument = (props) => {
  console.log(props);
  return (
    <Document>
      <Page size='A4' charset='utf-8' style={styles.page} orientation='l'>
        {props.chosenCards.map((card, index) => (
          <View style={styles.mainContainer} key={index} wrap={false}>
            <View style={styles.cardContainer}>
              <Text style={[styles.cardTitle]}>{card.title}</Text>
              <Text style={[styles.cardSubtitle]}>{card.subTitle}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
            <View style={styles.riskContainer}>
              {card.risks.map((risk, index) => (
                <View style={styles.riskLane}>
                  <View>
                    <Text style={styles.riskText} key={index}>
                      {risk.label}
                    </Text>
                  </View>
                  <View style={styles.colorCardsRow}>
                    {risk.cards.map((card, index) => (
                      <View>
                        <View
                          style={[
                            styles.cardContainer,
                            { border: `2pt solid ${card.color}` },
                          ]}
                          key={index}
                        >
                          <Text
                            style={[styles.cardTitle, { color: card.color }]}
                          >
                            {card.title}
                          </Text>
                          <Text
                            style={[styles.cardSubtitle, { color: card.color }]}
                          ></Text>
                          <Text
                            style={[
                              styles.cardDescription,
                              { backgroundColor: card.color },
                            ]}
                          >
                            {card.description}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
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
