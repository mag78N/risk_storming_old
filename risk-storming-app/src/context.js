import React, {createContext} from 'react';
import CardData from './components/cards/card-data';
const CardsContext = React.createContext({});
export class CardsContextProvider extends React.Component{

  rememberSelectedBlueCards = () => {
    const selectedBlueCards = this.state.data.columnsFase1["column-1"].cardIds;
    return selectedBlueCards;
  }
  
  state = {
    
    data: CardData,
    rememberSelectedBlueCards: this.rememberSelectedBlueCards
  };

  render() {
    return (
      <CardsContext.Provider value={this.state}>
        {this.props.children}
      </CardsContext.Provider>
    )
  }
};
export default CardsContext;
