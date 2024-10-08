import React from 'react';
import './index.scss';
import App from './App'
import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<HashRouter>
  <App />
</HashRouter>);