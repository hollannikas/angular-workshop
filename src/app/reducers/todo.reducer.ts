
import { Action } from '@ngrx/store';


export function reducer(state = [], action: Action) {
  switch (action.type) {
    case 'LOADED':
      return action.payload;
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'ADD':
      return [...state, action.payload];
    case 'ACTION_ERROR':
      console.error(action.payload);
      return state;
    default:
      return state;
  }
}
