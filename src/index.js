import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BookProvider } from './context'

ReactDOM.render(
  <BookProvider>
    <App />
  </BookProvider>, document.getElementById('root'));
serviceWorker.unregister();
