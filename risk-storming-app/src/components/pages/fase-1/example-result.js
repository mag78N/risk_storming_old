const result = {
  draggableId: 'blue-1',
  type: 'TYPE',
  reason: 'DROP', //or 'CANCEL'
  //important objects that contain location information about where the draggable started and finished
  source: {
    droppableId: 'column-1',
    index: 0,
  },
  destination: {
    droppableId: 'column-1',
    index: 1,
  },
  //there are situations where destination: null
};
