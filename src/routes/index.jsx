import { Route, Switch } from "react-router-dom";

import AboutUs from "../pages/aboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/signup">
        <h1>Signup</h1>
      </Route>
      <Route path="/dashboard">
        <h1>Dashboard</h1>
      </Route>
      <Route path="/groups_list">
        <h1>Groups List</h1>
      </Route>
      <Route path="/group/:group_id">
        <h1>Group</h1>
      </Route>





      <Route path="/aboutus">
        <AboutUs />
      </Route>
    </Switch>
  );
};

export default Routes;
