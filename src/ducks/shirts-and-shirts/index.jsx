
actions
  kittens.js

    export const ADD_KITTEN = 'ADD_KITTEN';
    const DELETE_KITTEN = 'DELETE_KITTEN';
    const UPDATE_KITTEN = 'UPDATE_KITTEN';

action-creators
  kittens.js
    export function addKitten(kitten) {
      return {
        type: ADD_KITTEN,
        kitten
      }
    };

    export function deleteKitten(kitten) {
      return {
        type: DELETE_KITTEN,
        kitten
      }
    };

    export function updateKitten(kitten) {
      return {
        type: UPDATE_KITTEN,
        kitten
      }
    };

reducers
  kittens.js
    export default function reducer(state = initialState, action) {
      switch (action.type){
        case ADD_KITTEN:
          // ...
        case DELETE_KITTEN:
          // ...
        case UPDATE_KITTEN:
          // ...
      }
    }
