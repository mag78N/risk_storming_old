import React, { Component } from 'react';
//import RiskPostIt from './RiskPostIt';
import Split from 'react-split';
import './fase2.css';
import { Link } from 'react-router-dom';
import TopNavbar from '../../TopNavbar/TopNavbar';
import BlueCardCarousel from './BlueCardCarousel';

class FaseTwoPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards : []
    }
    
    }
    
  
  componentDidMount = () => {
    this.setState({
      cards: JSON.parse(localStorage.getItem('cards'))
    });
    console.log(this.state.cards);
  }
  
  render(){
    
    return (
      <React.Fragment>
        <TopNavbar />
        <h1>{this.props.loc}</h1>
        <Split
          className='splitContainerFase2'
          sizes={[60, 40]}
          minSize={[250]}
          expandToMin={false}
          gutterSize={5}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div id='fase2LeftPane'>Fase 2</div>
          <div id='fase2RightPane'>
            <BlueCardCarousel />
          </div>
        </Split>

        <div className='btnContainer'>
          <Link to='/fase1'>
            <button className='goToPrevFaseBtn'>Previous</button>
          </Link>
          <Link to='/fase3'>
            <button className='goToNextFaseBtn'>Next</button>
          </Link>
        </div>
      </React.Fragment>
    );
  };
}
export default FaseTwoPage;
