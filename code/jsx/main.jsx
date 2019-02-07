// dependencies
import * as React from 'react';
import { render } from 'react-dom';

// files
import App from './app';

const root = document.getElementById('root');
render(
    <App/>,root // This will only append the root of the app into the DOM
);