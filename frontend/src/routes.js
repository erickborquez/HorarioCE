import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
