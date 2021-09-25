import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard/Dashboard"
import Login from "../pages/Login/Login"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import Profile from "../pages/Profile/Profile" 
import Signup from "../pages/Signup/Signup"

import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />

        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/profile" component={Profile} />

        <Route exact path="/signup" component={Signup} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default AppRouter