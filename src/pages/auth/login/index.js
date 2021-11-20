import { Fragment, useState } from "react";
import { loginUser } from "../../../context/auth/actions";
import { useAuthDispatch } from "../../../context/auth/context";
import { useHistory } from "react-router-dom";
function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = { username: email, password: password, token: 1001 };
    console.log(data);
    loginUser(dispatch, data);
    history.push("/profile");
  };
  return (
    <Fragment>
      <form>
        <div>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleLogin}>login</button>
      </form>
    </Fragment>
  );
}
export default Login;
