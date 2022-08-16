import { ActionTypes } from "./actionType";

//  export const setName = data => ({
//   type: ActionTypes.SET_USER_NAME,
//   payload: data,
// });
//  export const setEmail = data => ({
//     type: ActionTypes.SET_USER_EMAIL,
//     payload: data,
//   });
//   export const setPassword = data => ({
//     type: ActionTypes.SET_USER_PASSWORD,
//     payload: data,
//   });
//   export const setAge = data => ({
//     type: ActionTypes.SET_USER_AGE,
//     payload: data,
//   });


  export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user,
  });
  export const updateUser = (user, index) => ({
    type: ActionTypes.UPDATE_USER,
    payload: user,
    index: index,
  });