
import RiskList from './RiskList';

import React, { Component } from 'react';

class RiskView extends Component {
  state = {
    riskDetails: [
      {index: Math.random(),
        risk: '',
      }
    ]
  }
  handleChange = e => {
    if (
      ['risk'].includes(e.target.risk
      )
    ) {
      let riskDetails = [...this.state.riskDetails];
      riskDetails[e.target.dataset.id][e.target.risk] = e.target.value;
    } else {
      this.setState({ [e.target.risk]: e.target.value });
    }
  }
  addNewRow = e => {
    this.setState(prevState => ({
      riskDetails: [
        ...prevState.riskDetails,
        {
          index: Math.random(),
          risk: '',
        }
      ]
    }));
  };

  deleteRow = index => {
    this.setState({
      riskDetails: this.state.riskDetails.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  clickOnDelete(record) {
    this.setState({
      riskDetails: this.state.riskDetails.filter(r => r !== record)
    });
  }
  render() {
    let { riskDetails } = this.state;
    return (
      <div className='content'>
        <form onChange={this.handleChange}>
          <div className='row' >
            <RiskList
              add={this.addNewRow}
              delete={this.clickOnDelete.bind(this)}
              riskDetails={riskDetails}
              />
          </div>
            
        </form>
      </div>
    );
  }
}

export default RiskView;
