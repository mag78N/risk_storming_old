import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
class TextBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <div>
        <button onClick={this.props.handleAddTextbox}>add</button>
        <Form.Control className='textBox' as='textarea' rows='5' />
      </div>
    );
  }
}

export default TextBox;
