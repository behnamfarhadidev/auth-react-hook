export function loginUser(dispatch, data) {
  dispatch({ type: "LOGIN_SUCCESS", data });
  localStorage.setItem("currentUser", JSON.stringify(data));
}

export function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
}
