import RiskList from './RiskList';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RiskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riskDetails: this.props.riskDetails,
    }; 
  }
  
  componentWillUpdate(nextProps, nextState) {
    
    localStorage.setItem('risks', JSON.stringify(nextState));
  }
  handleChange = (e) => {
    if (['risk'].includes(e.target.name)) {
      let riskDetails = [...this.state.riskDetails];
      riskDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
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
    //let { riskDetails } = props.riskDetails;
    let { riskDetails } = this.state;
    return (
      <div className='content'>
        <form className='riskDetailsForm'
              onChange={this.handleChange}
              onSubmit={this.onsubmit}>
          <h2 className='riskDetailsHeading'>Add Risks</h2>
          <RiskList
            add={this.addNewRow}
            delete={this.clickOnDelete.bind(this)}
            riskDetails={riskDetails}
            id={this.props.id}
          />
          <Button>Confirm</Button>
        </form>
      </div>
    );
  }
}

export default RiskView;
