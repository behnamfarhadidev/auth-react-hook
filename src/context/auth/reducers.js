function getUserDataFromLocalStorage() {
  if (localStorage.getItem("currentUser")) {
    return JSON.parse(localStorage.getItem("currentUser"));
  } else {
    return {};
  }
}

export const initialState = getUserDataFromLocalStorage();

export const AuthReducer = (currentState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...initialState, ...action.data };
    case "LOGOUT":
      return {};
    default:
      throw new Error(`Unhandled action type:  ${action.type}`);
  }
};
