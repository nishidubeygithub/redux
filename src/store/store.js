import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from '../reducer/counterReducer';
import listReducer from '../reducer/listReducer';
// import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        user: listReducer,
      
    },
    
  })

export default store;
