import React, { createContext } from 'react';
import CardData from './components/cards/card-data';
const CardsContext = React.createContext({});
export class CardsContextProvider extends React.Component {
  state = {
    data: CardData,
  };
//this function updates the state in indirect way, this precise syntax with prevstate and data in curly braces
  setData = (data) => {
    this.setState(prevState => ({ data }));
  };
  render() {
    //binding everything 
    const { data } = this.state;
    const { children } = this.props;
    const { setData } = this;
    return (
      <CardsContext.Provider value={{data, setData}}>
        {children}
      </CardsContext.Provider>
    );
  }
}
export default CardsContext;
