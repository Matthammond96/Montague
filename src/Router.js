import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Nav from './View/Core/Navigation';
import Listings from './View/Destinations/Listings';
import e404 from './View/Core/e404';
import Landing from './View/Core/Landing'

class AppRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  authSwitch() {
    return (
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route component={e404}></Route>
      </Switch>
    )
  }

  render() {
    return (
      <div className="page-load">
        {this.authSwitch()}
      </div>
    )
  };
}

export default withRouter(AppRouter);