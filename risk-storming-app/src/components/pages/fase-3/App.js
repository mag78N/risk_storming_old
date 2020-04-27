import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
const App = () => {
  const [colors, setColors] = React.useState({
    a: ['blue', 'red'],
    b: ['pink'],
    c: ['green'],
  });

  return (
    <DragDropContext
      onDragEnd={({destination, source}) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }

        setColors(
          reorderColors(
            colors,
            source,
            destination,
          )
        );
      }}
    >
      <div>
        {Object.entries(colors).map(([key, value]) => (
          <AuthorList
            internalScroll
            key={key}
            listId={key}
            listType='CARD'
            quotes={value}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
export default App;
