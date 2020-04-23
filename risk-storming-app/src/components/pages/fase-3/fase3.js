import React from 'react';
import Split from 'react-split';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
const FaseThreePage = () => {
  return (
    <>
      <TopNavbar faseNum='Fase 3'/>
      <Split
        className='splitContainerFase1'
        sizes={[75, 25]}
        minSize={[300, 150]}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div className='fase1LeftPane'></div>
        <div className='fase1RightPane'></div>
      </Split>

      <Footer prev='/' next='/fase2' />
    </>
  );
};


export default FaseThreePage;
