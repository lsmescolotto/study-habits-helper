import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Team from "../pages/team";
import Dashboard from "../pages/dashboard";
import Group from "../pages/group";
import AboutUs from "../pages/about";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../providers/user/user";
import { Redirect } from "react-router-dom";

const Routes = () => {
  const { authenticated, setAuthenticated } = useContext(UserContext);

  const token = localStorage.getItem("@Habits:token");
  if (token !== null) {
    setAuthenticated(true);
  }

  return (
    <Switch>
      <Route exact path="/">
        {!authenticated ? <Home /> : <Redirect to="/dashboard" />}
      </Route>
      <Route exact path="/login">
        {!authenticated ? <Login /> : <Redirect to="/dashboard" />}
      </Route>
      <Route exact path="/signup">
        {!authenticated ? <Signup /> : <Redirect to="/dashboard" />}
      </Route>
      <Route exact path="/dashboard">
        {authenticated ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/group/:group_id">
        {authenticated ? <Group /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
    </Switch>
  );
};

export default Routes;
