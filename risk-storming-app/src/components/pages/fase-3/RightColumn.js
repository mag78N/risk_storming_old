import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase3.css';
const CardList = styled.div``;

class RightColumn extends React.Component {

  render() {
      const { colorcards } = this.props;
    return (
     
       
        <Droppable droppableId='RIGHT-COLUMN' direction='vertical' type='CARD'>
        {(provided, snapshot) => (
           <React.Fragment>
             <div className='searchBar'>
          <i class='fa fa-search'></i>
          <input type='text' onChange={this.props.filtercards} placeholder='search for cards' />
        </div>
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className={`rightPane fase1RightPane`}
            >
              {colorcards.map((card, index) => (
                <Card
                  type='CARD'
                  key={card['id']}
                  cardid={card['id']}
                  card={card}
                  index={index}
                />
              ))}
            {provided.placeholder}
            
          </CardList>
           </React.Fragment>
          )}
        </Droppable>
     
    );
  }
}

export default RightColumn;
