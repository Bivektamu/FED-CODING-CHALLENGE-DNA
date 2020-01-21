import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/normalize.css';
import './styles/variables.css';
import './styles/global.css';
import './App.css';
import './styles/responsive.css';

import Home from './component/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
