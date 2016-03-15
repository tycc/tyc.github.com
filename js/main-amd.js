require.config({

  paths: {
    'jquery':'vendor/jquery-2.1.1.min',
    'underscore':'vendor/underscore-1.6.0.min',
    'backbone':'vendor/backbone-1.1.2.min',
    'then': 'vendor/then-0.1.0.min',
    'text': 'vendor/text'
  }

});

require([
  'app'
], function(directory){
  directory.initialize();
});
