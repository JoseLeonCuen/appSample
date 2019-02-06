// dependencies
import * as React from 'react';
import { render } from 'react-dom';

// files
import Login from './login';

const root = document.getElementById('root');
console.log(root);
console.log("HELLO");
render(
    <div><Login/><span>Hello world</span></div>,root
);