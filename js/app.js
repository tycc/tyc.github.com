define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, router) {
    var App = {

        views: {},

        models: {},
        initialize: function() {
            var welcome = 'wolcome';
            console.log(welcome);
            require([
                'views/home'
            ], function() {
                Backbone.history.start();
            });
        }
    };
    return App;
});