require.config({
  shim: {
  },

  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
    tabletop: 'vendor/tabletop',
    handlebars: 'vendor/handlebars'
  }
});
 
require(['jquery', 'tabletop', 'handlebars', 'app'], function(app) {
  // use app here
  init();
});
