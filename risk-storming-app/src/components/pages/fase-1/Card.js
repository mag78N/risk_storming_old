import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
`;
class Card extends React.Component {
  render() {
    return <Container>{this.props.card.title}</Container>;
  }
}

export default Card;
