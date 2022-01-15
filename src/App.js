import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import React from 'react';
import store from './store';
import _ from 'lodash';

function App() {
  const { contacts } = store.getState();

  return (
    <div className='App'>
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
