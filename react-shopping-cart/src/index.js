import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/App/App';
import Login from './containers/Login/Login'
import registerServiceWorker from './registerServiceWorker';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
