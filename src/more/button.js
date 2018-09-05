document.body.insertAdjacentHTML('beforeEnd', '<a href="javascript:void(0)">Get script1</a>');

document.querySelector('a').addEventListener('click', function(){
    require.ensure([], function(require) {
        var c = require('./dynamicImports.js');
        c();
      });
});