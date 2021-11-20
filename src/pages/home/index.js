import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useAuthState } from "../../context/auth/context";
function Home() {
  const userDetails = useAuthState();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Admin Panel</Card.Title>
            <Card.Text>
              Hello <strong> {userDetails.username} </strong> Welcome to our
              website.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Home;
