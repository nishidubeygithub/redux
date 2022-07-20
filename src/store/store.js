// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../reducer/counterReducer';

// const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })

// export default store;

// import {createStore, combineReducers} from 'redux';
// import counterReducer from '../reducer/counterReducer';

// const rootReducer = combineReducers ({counterReducer})

// export const Store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterReducer';

const store = configureStore({
    reducer: {
        counterReducer,
    },
})

export default store;
