require.config({

  paths: {
    'jquery': [
      '//cdn.staticfile.org/jquery/2.1.1-rc2/jquery.min',
      'lib/jquery-2.1.1.min'
    ],
    'underscore': [
      '//cdn.staticfile.org/underscore.js/1.6.0/underscore-min',
      'vendor/underscore-1.6.0.min'
    ],
    'backbone': [
      '//cdn.staticfile.org/backbone.js/1.1.2/backbone-min',
      'vendor/backbone-1.1.2.min'
    ],
    'then': 'vendor/then-0.1.0.min',
    'text': 'vendor/text'
  }

});

require([
  'app'
], function(directory){
  directory.initialize();
});
