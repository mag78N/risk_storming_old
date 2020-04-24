import React, { createContext } from 'react';
import CardData from './components/cards/card-data';
const CardsContext = React.createContext({});
export class CardsContextProvider extends React.Component {
  state = {
    data: CardData,
  };

  setData = (data) => {
    this.setState(prevState => ({ data }));
  };

  /* state = {
    data: CardData,
    update: this.update,
  };
  update = (value) => {
    this.setState({
      state: value,
    });
  }; */
  render() {
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
