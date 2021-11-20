import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
function Home() {
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
            <Card.Text>Welcome to our website.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Home;
