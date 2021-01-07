import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Discount from "./screens/Discount";
import ForgotPassword from "./screens/ForgotPassword";
import LoginScreen from "./screens/LoginScreen";
import PageNotFound from "./screens/PageNotFound";
import Price from "./screens/Price";
import SignUp from "./screens/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgotpwd" exact component={ForgotPassword} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/price" exact component={Price} />
        <Route path="/discount" exact component={Discount} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
