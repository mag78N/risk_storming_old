//Draggable
const draggableSnapshot = {
  isDragging: true, //boolean if draggable is currently being dragged
  draggingOver: 'column-1', //set to id of the droppable that the draggable is currently dragging over (if a draggable is being dragged and not currently over a droppable than draggingOver will be set to null )
};
//Droppable
const droppableSnapshot = {
  isDraggingOver: true, //boolean set to true when draggable is dragging over the droppable
  draggingOverWith: 'task-1', //set to id of draggable that is dragging over droppable, set to null if the droppable is not being dragged over
};
