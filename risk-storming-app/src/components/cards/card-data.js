
import { bluecards } from '../../assets/en/blueCards';
import { colorcards } from '../../assets/en/colorcards';
const CardData = {
  bluecards: bluecards,
  cards: colorcards, /* pinkcards, orangecards, purplecards, */
  /* orangecards: orangecards,
  pinkcards: pinkcards,
  purplecards: purplecards,
  greencards: greencards, */
  columnsFase1: {
    'column-1': {
      id: 'column-1',
      title: 'selected blue cards',
      cardIds: [],
      class: 'fase1LeftPane',
    },
    'column-2': {
      id: 'column-2',
      title: 'blue cards',
      cardIds: [
        'blue-1',
        'blue-2',
        'blue-3',
        'blue-4',
        'blue-5',
        'blue-6',
        'blue-7',
        'blue-8',
        'blue-9',
        'blue-10',
        'blue-11',
        'blue-12',
        'blue-13',
        'blue-14',
        'blue-15',
        'blue-16',
        'blue-17',
        'blue-18',
        'blue-19',
        'blue-20',
      ],
      class: 'fase1RightPane',
    },
  },
  columnsFase3: {
    'column-1': {
      id: 'column-1',
      title: 'selected blue cards and risks',
      cardIds: [],
      class: 'fase1LeftPane',
    },
    'column-2': {
      id: 'column-2',
      title: 'cards',
      cardIds: [
        'green-1',
        'green-2',
        'green-3',
        'green-4',
        'green-5',
        'green-6',
        'green-7',
        'green-8',
        'green-9',
        'green-10',
        'green-11',
        'green-12',
        'green-13',
        'green-14',
        'green-15',
        'green-16',
        'green-17',
        'green-18',
        'green-19',
        'green-20',
        'pink-1',
        'pink-2',
        'pink-3',
        'pink-4',
        'pink-5',
        'pink-6',
        'pink-7',
        'pink-8',
        'pink-9',
        'pink-10',
        'pink-11',
        'pink-12',
        'pink-13',
        'pink-14',
        'pink-15',
        'pink-16',
        'pink-17',
        'pink-18',
        'pink-19',
        'pink-20',
        'orange-1',
        'orange-2',
        'orange-3',
        'orange-4',
        'orange-5',
        'orange-6',
        'orange-7',
        'orange-8',
        'orange-9',
        'orange-10',
        'orange-11',
        'orange-12',
        'orange-13',
        'orange-14',
        'orange-15',
        'orange-16',
        'orange-17',
        'orange-18',
        'orange-19',
        'orange-20',
        'purple-1',
        'purple-2',
        'purple-3',
        'purple-4',
        'purple-5',
        'purple-6',
        'purple-7',
        'purple-8',
        'purple-9',
        'purple-10',
        'purple-11',
        'purple-12',
        'purple-13',
        'purple-14',
        'purple-15',
        'purple-16',
        'purple-17',
        'purple-18',
        'purple-19',
        'purple-20', 
      ],
      class: 'fase1RightPane',
    },
  },
  columnOrderFase1: ['column-1', 'column-2'],
  columnOrderFase3: ['column-1', 'column-2'],
};
export default CardData;
