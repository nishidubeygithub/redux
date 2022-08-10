import { ActionTypes } from '../action/actionType'


const initialState = {
    userList: [],

};


export const listReducer = (state = initialState, action) => {
  
    
    switch (action.type) {
        case ActionTypes.ADD_USER:
            console.log(action.payload)
            return { ...state, userList: [...state.userList, action.payload] };
        case ActionTypes.UPDATE_USER:
            let userData = [...state.userList];
            userData.splice(action.index, 1, action.payload);
            return { ...state, userList: userData};
            
            
        default:
            return state;
    }

}

export default listReducer;