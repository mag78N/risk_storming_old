import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Split from 'react-split';
import '../../pages/fase-1/fase1.css';
import Footer from '../../Footer/Footer';
import initialBlueCardData from './initial-data';
import Column from './Column';
import React from 'react';

class FaseOnePagednd extends React.Component {
  state = initialBlueCardData;
  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const cards = column.cardIds.map((cardId) => this.state.cards[cardId]);

      return <Column key={column.id} column={column} cards={cards} />;
    });
  }
}

export default FaseOnePagednd;
