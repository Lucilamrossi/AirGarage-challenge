import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
