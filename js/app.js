define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, router) {
    var directory = {

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
    return directory;
});