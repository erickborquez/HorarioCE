import { Switch, Route } from "react-router-dom";
import mainLayout from "./layouts/mainLayout"
import SideBar from "./layouts/components/SideBar"


const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <mainLayout>
          <SideBar/>
        </mainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
