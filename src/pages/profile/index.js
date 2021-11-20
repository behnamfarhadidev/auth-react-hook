import { useHistory } from "react-router";
import { logout } from "../../context/auth/actions";
import { useAuthDispatch, useAuthState } from "../../context/auth/context";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card className="text-center">
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Card.Title>Admin Panel Profile</Card.Title>
          <Card.Text>
            Hello <strong>{userDetails.username}</strong> Welcome to your
            profile.
          </Card.Text>
          <Button variant="primary" onClick={logoutHandler}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
