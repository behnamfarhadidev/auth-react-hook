import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <p>Hello World</p>
    </div>
  );
}
export default Home;
