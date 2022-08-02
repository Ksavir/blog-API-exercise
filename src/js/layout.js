import React from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './component/navbar'
import Home from './views/home';
import InfoPersonaje from './component/InfoPersonaje';
import injectContext from './store/appContext';
import InfoPlaneta from './component/InfoPlaneta';
import InfoVehiculo from './component/InfoVehiculo';
import Footer from './component/footer'

function Layout() {
  return (<Router>
    <Navbar />
    <Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/planet/:id" component={InfoPlaneta}>
          <InfoPlaneta />
        </Route>
        <Route path="/detail/character/:id" component={InfoPersonaje}>
          <InfoPersonaje />
        </Route>
        <Route path="/detail/vehicle/:id" component={InfoVehiculo}>
          <InfoVehiculo/>
        </Route>
        <Route render={() => <h1> 404 Not found</h1>}></Route>
      </Switch>
      <Footer />
    </Route>
   
  </Router>
  
  );
}

export default injectContext(Layout);
