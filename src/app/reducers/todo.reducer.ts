import { Action } from '@ngrx/store';

export function reducer(state = [], action: Action) {
  switch (action.type) {
    case 'LOADED':
      return action.payload;
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'ACTION_ERROR':
      console.log('error');
      return state;
    default:
      return state;
  }
}
