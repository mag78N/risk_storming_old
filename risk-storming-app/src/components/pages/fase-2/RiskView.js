import RiskList from './RiskList';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RiskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riskDetails: [
        {
          riskid: 0,
          risk: '',
        },
      ],
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
      this.setState({ [e.target.name]: e.target.value, [e.target.riskid] :  e.target.index});
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      riskDetails: [
        ...prevState.riskDetails,
        {
          riskid: prevState.riskid++,
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
          <Button>Confirm</Button>
        </form>
      </div>
    );
  }
}

export default RiskView;
