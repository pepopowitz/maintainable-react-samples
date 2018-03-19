function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        currentUser: action.user,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        currentUser: undefined,
      };
    default:
      return state;
  }
}