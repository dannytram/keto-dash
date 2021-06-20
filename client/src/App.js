import React from "react";
import HomePage from "./pages/HomePage/HomePage"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./Auth"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

