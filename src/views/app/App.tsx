import React from 'react';
import styles from './App.module.scss';
import { PrivateRoute } from 'components/common';
import Login from 'views/login/Login';
import Dashboard from 'views/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const App = () => (
  <div className={styles.AppWrapper}>
    <header className="App-header"></header>
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <PrivateRoute
            path="/admin"
            roles={[]}
            component={AdminPanel}
          />*/}
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
