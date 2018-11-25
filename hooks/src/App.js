import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import FutureForm from './FutureForm';
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Form} />
                <Route path="/future" component={FutureForm} />
            </div>

        </Router>

    );
  }
}

export default App;
