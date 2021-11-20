import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./config";
import LoggedIn from "../helpers/LoggedIn";
const Login = lazy(() => import("../pages/auth/login/index"));
const Home = lazy(() => import("../pages/home/index"));
const Profile = lazy(() => import("../pages/profile/index"));
const NotFoundPage = lazy(() => import("../pages/notFound/index"));
const MainRouter = () => {
  const isAuthenticated = LoggedIn();
  return (
    <Router>
      <Suspense fallback={<p>Lodaing...</p>}>
        <Switch>
          <PublicRoute exact path="/" isAuthenticated={isAuthenticated}>
            <Home />
          </PublicRoute>
          <PublicRoute
            path="/login"
            exact
            isAuthenticated={isAuthenticated}
            restricted={isAuthenticated}
          >
            <Login />
          </PublicRoute>
          <PrivateRoute path="/profile" exact isAuthenticated={isAuthenticated}>
            <Profile />
          </PrivateRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default MainRouter;
