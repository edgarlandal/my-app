/**
 * React Imports
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Style Imports
 */
import './index.css';

/**
 * Others Import
 */
import reportWebVitals from './reportWebVitals';

/**
 * Components Imports
 */
import NavComponent from "./NavComponent/NavComponent.jsx";
import MainComponent from "./MainComponent/MainComponent.jsx"
import FooterComponent from "./FooterComponent/FooterComponent.jsx";

/**
 * Header Content
 */
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <NavComponent />
  </React.StrictMode>
);


/**
 * Main Content
 */
const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <MainComponent/>
  </React.StrictMode>
);


/**
 * Footer Content
 */
const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <FooterComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
