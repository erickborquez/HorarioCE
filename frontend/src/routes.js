import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "./views/Main";
import Preferences from "./views/Preferences";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <MainLayout>
          {/* <Main/> */}
          <Preferences/>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
