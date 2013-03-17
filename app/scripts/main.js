require.config({
  shim: {
  },

  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
    tabletop: 'vendor/tabletop',
    handlebars: 'vendor/handlebars',
    peity: 'vendor/jquery.peity.min',
    stats: 'generateStatistics'
  }
});
 
require(['jquery', 'tabletop', 'handlebars', 'peity', 'generateStatistics', 'app'], function(app) {
  // use app here
  init();
});
