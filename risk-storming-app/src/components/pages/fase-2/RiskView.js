import RiskList from './RiskList';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RiskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riskDetails: [
        {
          
          risk: "",
        },
      ],
    };
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('risks', JSON.stringify(nextState));
  }
  handleChange = (e) => {
    if (["risk"].includes(e.target.className)) {
      let riskDetails = [...this.state.riskDetails];
      riskDetails[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase() 
      this.setState({riskDetails}, () => console.log(this.state.riskDetails))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      riskDetails: [
        ...prevState.riskDetails,
        {
          
          risk: "",
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
        <form className='riskDetailsForm' onSubmit={this.onsubmit}>
          <h2 className='riskDetailsHeading'>Add Risks</h2>
          <RiskList
            key={this.props.key}
            add={this.addNewRow}
            delete={this.clickOnDelete.bind(this)}
            riskDetails={riskDetails}
            id={this.props.id}
            card={this.props.card}
            onchange={this.handleChange}
          />
          <Button onSubmit={this.onsubmit}>Confirm</Button>
        </form>
      </div>
    );
  }
}

export default RiskView;
