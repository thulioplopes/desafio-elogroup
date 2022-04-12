import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './routes';

import './styles/global.css';

const app   = document.getElementById( 'root' );
const root  = createRoot( app );
root.render(<App />)
