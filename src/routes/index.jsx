import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";

import Signup from "../pages/signup";
import Team from "../pages/team";
import Dashboard from "../pages/dashboard";
import Group from "../pages/group";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups_list">
        <h1>Groups List</h1>
      </Route>
      <Route path="/group/:group_id">
        <Group />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
    </Switch>
  );
};

export default Routes;
