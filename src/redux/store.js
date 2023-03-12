import { createStore } from 'redux';
import initialState from './initialState';
import shortId from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getListById = ({ lists }, listId) =>
  lists.find((list) => listId === list.id);
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getAllLists = (state) => state.lists;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const changeSearchString = (payload) => ({
  type: 'CHANGE_SEARCHSTRING',
  payload,
});
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortId() }],
      };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortId() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortId() }],
      };
    case 'CHANGE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
