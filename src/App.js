import { Fragment } from "react";
import MainRouter from "./routes/index";
import { AuthProvider } from "./context/auth/context";
function App() {
  return (
    <Fragment>
      <MainRouter />
    </Fragment>
  );
}

export default App;
