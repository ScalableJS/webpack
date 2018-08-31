import welcome from './welcome.js';

//welcome('home');

document.body.insertAdjacentHTML('beforeEnd', '<a href="javascript:void(0)">Get script1</a>');

document.querySelector('a').addEventListener('click', function(){
    require.ensure([], function(require) {
        var c = require('./dynamicImports.js');
        c();
        
      });
    // import('./dynamicImports.js').then(function(){
    //     alert('done');
    // })
});   
// import React from 'react';
// import ReactDOM from 'react-dom';
// module.exports = function (message) {
//     const title = 'My Minimal React Webpack Babel Setup';
//     ReactDOM.render(
//         <div>{message}</div>,
//         document.getElementById('app')
//     );
// }