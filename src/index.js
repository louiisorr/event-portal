import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/plus-jakarta-sans/200.css'; // Extra Light weight
import '@fontsource/plus-jakarta-sans/300.css'; // Light weight
import '@fontsource/plus-jakarta-sans/400.css'; // Normal weight
import '@fontsource/plus-jakarta-sans/500.css'; // Medium weight
import '@fontsource/plus-jakarta-sans/600.css'; // Semi Bold weight
import '@fontsource/plus-jakarta-sans/700.css'; // Bold weight
import '@fontsource/plus-jakarta-sans/800.css'; // Extra Bold weight



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();