define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/contact'
], function($, _, Backbone,home,contact) {
  var Router = Backbone.Router.extend({
    routes: {
        "":                 "home",
        "contact":          "contact"
    },
    initialize: function () {
       console.log("router");
    },

    home: function () {
      this.changePage(new home());
    },
    contact: function () {
      this.changePage(new contact());
    },
    changePage:function(page){
      page.render();
      $(page.el).attr('data-role','page');
      $('body').append($(page.el));
    }
  });

  return new Router();
})
