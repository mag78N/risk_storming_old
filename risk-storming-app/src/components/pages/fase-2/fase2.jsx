import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import initialBlueCardData from '../fase-1/initial-data';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import BlueCardCarousel from './BlueCardCarousel';
//import { observer } from 'mobx-react';

class FaseTwoPage extends React.Component {
  //state = data;

  //const BLUECARDLIST = JSON.parse(localStorage.getItem('cards'));
  /*  const { blueCards, setBlueCards } = useState([]);
  //checking if there is data saved to localstorage
  useEffect(() => {
    const data = localStorage.getItem('cards');
    if (data) {
      setBlueCards(JSON.parse(data));
    }
  }, []); */
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
            <BlueCardCarousel />
          </div>
        </Split>
        <Footer prev='/fase1' next='/fase3' />
      </>
    );
  }
}
export default FaseTwoPage;
