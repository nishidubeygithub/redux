import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterReducer';
import listReducer from '../reducer/listReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: listReducer,
    },
});

export default store;
