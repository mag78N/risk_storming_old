import React from 'react';
import Button from 'react-bootstrap/Button';
const AddRiskButton = (props) => {
  return (
    <Button onClick={props.addRisk}>Add Risk</Button>
  )
}
export default AddRiskButton;