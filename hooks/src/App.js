import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import FutureForm from './FutureForm';
import FormC from './FormC';
import ContextForm from './ContextForm';
import CleanerForm from './CleanerForm';
import LocaleProvider from './context';
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {

  render() {
    return (
        <LocaleProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Form} />
                    <Route path="/future" component={FutureForm} />
                    <Route path="/futurec" component={FormC} />
                    <Route path="/futured" component={ContextForm} />
                    <Route path="/futuree" component={CleanerForm} />
                </div>
            </Router>
        </LocaleProvider>
        

    );
  }
}

export default App;
