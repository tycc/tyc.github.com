define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'swiper',
    'text!views/home.html'
], function($, _, Backbone, router,Swiper,template) {
    var homeView = Backbone.View.extend({
        events: {

        },
        render: function() {
            var me = this;
            if($("#content").html()){
                $("#content").empty();
            }
            $("#content").append(template);
            me.initSwiper();
        },
        initSwiper:function(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                direction: 'vertical',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                mousewheelControl: true,
                paginationBulletRender: function (index, className) {
                    var btn;
                    switch(index){
                        case 0: btn = "首页"; break;
                        case 1: btn = "222"; break;
                        case 2: btn = "333"; break;
                        case 3: btn = "444"; break;
                        case 4: btn = "555"; break;
                    }
                    return '<span class="' + className + '">' + btn + '</span>';
                },
                onSlideChangeStart:function(element){
                    console.log(element.activeIndex);
                }
            });
        }
    });
    return homeView;
});