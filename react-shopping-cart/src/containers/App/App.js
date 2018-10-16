import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

import Shelf from '../../components/shelf/Shelf';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import FloatCart from '../../components/floatCart/FloatCart';

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <main>
            <Shelf />
          </main>
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
