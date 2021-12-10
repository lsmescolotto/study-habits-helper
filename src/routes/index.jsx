import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Team from "../pages/team";
import Dashboard from "../pages/dashboard";
import Group from "../pages/group";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/groups_list">
        <h1>Groups List</h1>
      </Route>
      <Route exact path="/group/:group_id">
        <Group />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
    </Switch>
  );
};

export default Routes;
