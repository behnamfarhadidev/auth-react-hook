import { useAuthState } from "../context/auth/context";

export function LoggedIn() {
  const dispatch = useAuthState();
  if (dispatch.token) {
    return true;
  } else {
    return false;
  }
}
export default LoggedIn;
