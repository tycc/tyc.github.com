define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!views/ContactView.html'
], function($, _, Backbone, router,template) {
    var homeView = Backbone.View.extend({
        events: {

        },
        render: function() {
            if($("#content").html()){
                $("#content").empty();
            }
            $("#content").append(template);
        }
    });
    return homeView;
});