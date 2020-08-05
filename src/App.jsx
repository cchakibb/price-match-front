import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import FooterMain from "./components/FooterMain";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
//import Test from "./pages/Test";
import ProfileUpdate from "./pages/ProfileUpdate";
import Data from "./pages/Data";
import Database from "./pages/Database";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavMain />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/data" component={Data} />
          <ProtectedRoute exact path="/profile/settings" component={ProfileUpdate} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/db" component={Database} />
          <Route exact path="/contact" component={Contact} />

          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
      <FooterMain />
    </div>
  );
}

export default App;
