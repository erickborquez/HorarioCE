import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "./views/Main";
import Preferences from "./views/Preferences";
import Landing from "./views/Landing";
const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
          {/* <Main/> */}
          <Landing/>
      </Route>
      <Route exact={true} path={"/create"}>
        <MainLayout>
          <Preferences />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
