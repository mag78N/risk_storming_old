import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const RiskPostIt = () => {
  return (
    <React.Fragment>
      <div id='riskPostItForm'>
        <Form>
          <Form.Group>
            <Button variant='outline-dark'>add risk</Button>
            <Form.Control as='textarea' rows='5' />

            <Form.Control className='textBox' as='textarea' rows='5' />

            <Form.Control className='textBox' as='textarea' rows='5' />

            <Form.Control className='textBox' as='textarea' rows='5' />

            <Form.Control className='textBox' as='textarea' rows='5' />
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default RiskPostIt;

/* 
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextBox from './TextBox';
class RiskPostIt extends Component {
  constructor(props) {
    super(props);
    this.handleAddTextbox = this.handleAddTextbox.bind(this);
    this.state = { visible: false };
  }
  handleAddTextbox() {
    this.setState({ visible: true });
    console.log('added textbox');
  }
  
  render() {
    const visible = this.state.visible;
    return (
      <React.Fragment>
        <div id='riskPostItForm'>
          <Form>
            <Form.Group>
              <Button variant='outline-dark'>add risk</Button>

              <TextBox visible={visible} onClick={this.handleAddTextbox} />
              <TextBox visible={visible} onClick={this.handleAddTextbox} />
              <TextBox visible={visible} onClick={this.handleAddTextbox} />
              <TextBox visible={visible} onClick={this.handleAddTextbox} />
            </Form.Group>
          </Form>
        </div>
      </React.Fragment>
    );
  };
}
export default RiskPostIt;
  */
