import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import BlueCardCarousel from './BlueCardCarousel';
import  CardsContext  from '../../../context';

class FaseTwoPage extends React.Component {
  static contextType = CardsContext;
  state = this.context.data;
  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <TopNavbar faseNum='Fase 2' />
        <Split
          className='splitContainerFase2'
          sizes={[60, 40]}
          minSize={[250]}
          expandToMin={false}
          gutterSize={10}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div className='fase2LeftPane'></div>
          <div className='fase2RightPane'>
           {/*  <BlueCardCarousel /> */}
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
