import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from '../Reducer/HomeReducer';

export const store = createStore(HomeReducer, applyMiddleware(thunk));
