// import { ActionTypes } from "./actionType";

// export const incrementAction = (data) => ({
//   type: ActionTypes.INCREMENT,
//   payload: data,
// });


// export const decrementAction = (data) => ({
//     type: ActionTypes.DECREMENT,
//     payload: data,
//   });

 import { ActionTypes } from "./actionType";

 export const setName = name => ({
  type: ActionTypes.SET_USER_NAME,
  payload: name,
});


export const setAge = age => ({
    type: ActionTypes.SET_USER_AGE,
    payload: age,
  });