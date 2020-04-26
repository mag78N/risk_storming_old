import React, { createContext } from 'react';
import CardData from './components/cards/card-data';
//setup initial context
const CardsContext = React.createContext({});
//create portable consumer that can be injected into components
//export const CardsContextConsumer = CardsContext.Consumer;

//Create provider using traditional React.Component class
export class CardsContextProvider extends React.Component {
         state = {
           data: CardData,
           
         };

         setData = (data) => {
           this.setState((prevState) => ({ data }));
         };
         setAddRisk = (e) => {
           console.log('risk added!');
           this.setState((prevState) => ({
             risks: [...prevState.risks, { cardId: '', id: '', content: '' }],
           }));
         };
         render() {
           //binding everything
           const { data } = this.state;
           const { children } = this.props;
           const { setData } = this;
           return (
             <CardsContext.Provider value={{ data, setData }}>
               {children}
             </CardsContext.Provider>
           );
         }
       }
export default CardsContext;
