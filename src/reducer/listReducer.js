import { ActionTypes } from '../action/actionType'


const initialState = {
    userList: [],
};


export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, userList: [...state.userList, action.payload] };
            
        default:
            return state
    }

}

export default listReducer;