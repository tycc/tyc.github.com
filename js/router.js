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
      // var transition = $.mobile.defaultPageTransition;
      // if (!this.firstPage) {
      //   $.mobile.changePage($(page.el),{
      //     changeHash:false,
      //   })
      // }else{
      //   this.firstPage = false;
      // }
    }
  });

  return new Router();
})
