// import { ActionTypes } from '../action/actionType'


// const initialState = {
//     count: 100
// }


// export const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionTypes.INCREMENT:
//             return { ...state, count: action.payload }
            
//         case ActionTypes.DECREMENT:
//             return { ...state, count: action.payload }

//         default:
//             return state
//     }

// }

// export default counterReducer

import { ActionTypes } from '../action/actionType'


const initialState = {
    name: '',
    age: 0,
}


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes. SET_USER_NAME:
            return { ...state, name: action.payload }
            
        case ActionTypes. SET_USER_AGE:
            return { ...state, age: action.payload }

        default:
            return state
    }

}

export default counterReducer