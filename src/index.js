import React from 'react';
import ReactDOM from 'react-dom';
import {configResponsive} from 'ahooks';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@egjs/react-flicking/dist/flicking.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


configResponsive({
     'xs': 0,
     'sm': 375,
     'md': 768,
     'lg': 1024,
     'xl': 1280,
 });

ReactDOM.render (
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
