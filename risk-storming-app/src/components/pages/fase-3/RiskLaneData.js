const example = {
  columnsFase3: {
    'column-1': {
      id: 'column-1',
      cardIds: [],
      class: 'leftPane fase1LeftPane',
    },
    'RIGHT-COLUMN': {
      id: 'RIGHT-COLUMN',
      cardIds: Object.keys(colorcards),
      class: 'rightPane fase3RightPane',
    },
  },
  columnOrderFase3: ['column-1', 'RIGHT-COLUMN'],
};

/**
 * Array of risk-dropzone-ids:
 *  ["blue-3|risk-1", "blue-3|risk-2", "blue-6|risk-1", "blue-12|risk-1", "blue-11|risk-1", "blue-7|risk-1", "blue-13|risk-1"]
 * 
 * 'blue-3|risk-1': {
      id: 'blue-3|risk-1',
      cardIds: [],
      class: '',
    },
    'blue-3|risk-2': {
      id: 'blue-3|risk-2',
      cardIds: [],
      class: '',
    },
 * 
 * 
 * 
 */
