import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/App/App';
import Login from './containers/Login/Login'

import { AuthProvider } from './contexts/auth'

import registerServiceWorker from './registerServiceWorker';

const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
