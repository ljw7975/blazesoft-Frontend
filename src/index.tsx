import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import popupReducer from './Reducer/popupReducer';
import bookReducer from './Reducer/bookReducer';
import descriptionReducer from './Reducer/descriptionReducer';
import currentBookReducer from './Reducer/currentbookRedoucer';

const reducer = combineReducers({
  popup: popupReducer,
  book: bookReducer,
  description: descriptionReducer,
  currentBook: currentBookReducer
})

const store = configureStore({ reducer })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);