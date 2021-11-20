import { Fragment, useState } from "react";
import { loginUser } from "../../../context/auth/actions";
import { useAuthDispatch } from "../../../context/auth/context";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  let history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useAuthDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    const data = { username: email, password: password, token: 1001 };
    console.log(data);
    loginUser(dispatch, data);
    history.push("/profile");
  };
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center d-flex aligns-items-center justify-content-center">
        <Card className="col-md-7">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <br />
                      <button
                        onClick={loginHandler}
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fragment>

    // <Fragment>
    //   <form>
    //     <div>
    //       <div>
    //         <label htmlFor="email">Username</label>
    //         <input
    //           type="text"
    //           id="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <button onClick={handleLogin}>login</button>
    //   </form>
    // </Fragment>
  );
}
export default Login;
