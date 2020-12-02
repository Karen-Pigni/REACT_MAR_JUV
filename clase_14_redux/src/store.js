import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//REDUCERS
import { todoReducer } from './reducers/todoReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['todosList'],
};

const reducer = combineReducers({ todosList: todoReducer });
const rootReducer = persistReducer(persistConfig, reducer);

const middleware = [];

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
