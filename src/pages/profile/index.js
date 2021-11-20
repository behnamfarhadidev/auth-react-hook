import { useHistory } from "react-router";
import { logout } from "../../context/auth/actions";
import { useAuthDispatch, useAuthState } from "../../context/auth/context";

export function Profile() {
  const userDetails = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();
  function logoutHandler() {
    logout(dispatch);
    history.push("/login");
  }
  return (
    <div>
      <p>Hello</p>
      <p>{userDetails.username}</p>
      <p>Welcome to our website.</p>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default Profile;
