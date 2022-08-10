import { ActionTypes } from '../action/actionType'


const initialState = {
    name: '',
    email:"",
    password:"",
    age: 0,
}


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes. SET_USER_NAME:
            return { ...state, name: action.payload }
            
        case ActionTypes. SET_USER_EMAIL:
            return { ...state, email: action.payload }

        case ActionTypes. SET_USER_PASSWORD:
            return { ...state, password: action.payload }

        case ActionTypes. SET_USER_AGE:
            return { ...state, age: action.payload }
       
        default:
            return state
    }

}

export default counterReducer