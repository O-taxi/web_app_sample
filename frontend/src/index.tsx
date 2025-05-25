import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css'; // 必要なら

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);