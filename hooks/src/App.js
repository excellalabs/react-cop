import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import FutureForm from './FutureForm';
import FormC from './FormC';
import FormD from './FormD';
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
                    <Route path="/futured" component={FormD} />
                </div>
            </Router>
        </LocaleProvider>
        

    );
  }
}

export default App;
