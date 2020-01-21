import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import './styles/normalize.css';
import './styles/variables.css';
import './styles/global.css';
import './App.css';

import Home from './component/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
