//let welcome = require('./welcome.js');
import welcome from './welcome.js';
import css from './file.scss';
//css.unuse()
welcome('home');

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);