import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard/Dashboard"
import Document from "../pages/Document/Document"
import GPA from "../pages/GPA/GPA"
import Help from "../pages/Help/Help"
import Login from "../pages/Login/Login"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import PrintOut from "../pages/PrintOut/PrintOut"
import Profile from "../pages/Profile/Profile" 
import Registartion from "../pages/Registration/Registration"
import Result from "../pages/Result/Result"
import SchoolMap from "../pages/SchoolMap/SchoolMap"
import Signup from "../pages/Signup/Signup"

import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />

        <PrivateRoute exact path="/document" component={Document} />

        <PrivateRoute exact path="/gpa" component={GPA} />

        <PrivateRoute exact path="/help" component={Help} />

        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/print" component={PrintOut} />

        <PrivateRoute exact path="/profile" component={Profile} />

        <PrivateRoute exact path="/registration" component={Registartion} />

        <PrivateRoute exact path="/result" component={Result} />

        <PrivateRoute exact path="/school-map" component={SchoolMap} />

        <Route exact path="/signup" component={Signup} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default AppRouter