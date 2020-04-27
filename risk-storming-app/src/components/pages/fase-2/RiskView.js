import RiskList from './RiskList';

import React, { Component } from 'react';

class RiskView extends Component {
  count = 0;
  state = {
    riskDetails: [{ index: Math.random(), risk: '' }],
  };
  /*  componentDidMount() {
    this.riskdetails = JSON.parse(localStorage.getItem('risks'));

    if (localStorage.getItem('risks')) {
      this.setState({
        riskDetails: this.riskdetails.risk,
      })
    } else {
      this.setState({ riskDetails: ['']})
    }
  }  */
  componentWillUpdate(nextProps, nextState) {
    
    localStorage.setItem('risks', JSON.stringify(nextState));
  }
  handleChange = (e) => {
    if (['risk'].includes(e.target.risk)) {
      let riskDetails = [...this.state.riskDetails];
      riskDetails[e.target.dataset.id][e.target.risk] = e.target.value;
    } else {
      this.setState({ [e.target.risk]: e.target.value });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      riskDetails: [
        ...prevState.riskDetails,
        {
          index: Math.random(),
          risk: '',
        },
      ],
    }));
  };

  deleteRow = (index) => {
    this.setState({
      riskDetails: this.state.riskDetails.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };

  clickOnDelete(record) {
    this.setState({
      riskDetails: this.state.riskDetails.filter((r) => r !== record),
    });
  }
  onsubmit = (e) => {
    e.preventDefault();
  };
  render() {
    console.log(this.state);
    let { riskDetails } = this.state;
    return (
      <div className='content'>
        <form onChange={this.handleChange} onSubmit={this.onsubmit}>
          <div className='row'>
            <div className='col-sm-10'>
              <h2 className='text-center'> Enter Risk </h2>
              <div className='container'>
                <div className='row'>
                  <RiskList
                    add={this.addNewRow}
                    delete={this.clickOnDelete.bind(this)}
                    riskDetails={riskDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RiskView;
