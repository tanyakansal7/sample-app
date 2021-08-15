import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WebAppPage from "./pages/WebAppPage/WebAppPage";
import LoginForm from "./components/LoginForm/LoginFom";
import Tracker from "./pages/Tracker/tracker";
import Answers from "./pages/answers/answers";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <NavigationBar />

      <Switch>
        <Route path={ROUTES.SIGNUP} component={SignUpForm} />
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <Route path={ROUTES.TRACKER} component={Tracker} />
        <Route path={ROUTES.ANSWERS} component={Answers} />
        <PrivateRoute path={ROUTES.WEBAPP}>
          <WebAppPage />
        </PrivateRoute>
        <Route path={ROUTES.HOME} component={Hero} />
      </Switch>
    </Router>
  );
};

export default App;