import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

function fancyLog() {
  console.log('%c Rendered With 👇👇', 'background: purple; color: #fff');
  console.log(store.getState());
}

render();

store.subscribe(render);
