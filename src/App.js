import { Fragment } from "react";
import MainRouter from "./routes/index";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Fragment>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <MainRouter />
    </Fragment>
  );
}

export default App;
