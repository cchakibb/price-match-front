import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import FooterMain from './components/FooterMain';
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Test from './pages/Test'

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/test" component={Test} />

        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
      <FooterMain />
    </div>
  );
}

export default App;
