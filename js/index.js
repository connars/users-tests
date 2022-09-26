const header = $('header');
const headerWidth = $('.header__wrapper');
const btnTop = $('.main__button-wrapper');

$(window).on('scroll', function () {   
    if ($(window).scrollTop() > 0) { 
        header.addClass('scrolled');
        headerWidth.addClass('resize-header')
        btnTop.addClass('button-scroll')
    } else { 
        header.removeClass('scrolled'); 
        headerWidth.removeClass('resize-header')
        btnTop.removeClass('button-scroll')
    } 
});

$(window).bind('mousewheel', function(e) {
    if (e.originalEvent.wheelDelta /120 > 0)  {
        header.removeClass('scrolled1');
    } else {
         header.addClass('scrolled1');
    }
 });

$(".card__icon").mouseover(function(){
    $(this).addClass('rotate');
});
$('.card__icon').mouseleave(function() {
    $(this).removeClass('rotate');
});

$(".header__logo").mouseover(function(){
    $('.logo').addClass('logo-hover');
});
$('.header__logo').mouseleave(function() {
    $('.logo').removeClass('logo-hover');
});

const rabbitThree = $('.rabbit-three');
const rabbitTwo = $('.rabbit-two');

$(".magnetic-button").mouseover(function(){
    rabbitTwo.addClass('rabbit-two-hover');
    rabbitThree.addClass('rabbit-three-hover');
});
$('.magnetic-button').mouseleave(function() {
    rabbitTwo.removeClass('rabbit-two-hover');
    rabbitThree.removeClass('rabbit-three-hover');
});




// magnetic button

var hoverMouse = function($el) {
    $el.each(function() {
        var $self = $(this);
        var hover = false;
        var offsetHoverMax = $self.attr("offset-hover-max") || 1;
        var offsetHoverMin = $self.attr("offset-hover-min") || 0.75;

        var attachEventsListener = function() {
            $(window).on("mousemove", function(e) {
                var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

                var cursor = {
                    x: e.clientX,
                    y: e.clientY + $(window).scrollTop()
                };

                var width = $self.outerWidth();
                var height = $self.outerHeight();

                var offset = $self.offset();
                var elPos = {
                    x: offset.left + width / 2,
                    y: offset.top + height / 2
                };

                var x = cursor.x - elPos.x;
                var y = cursor.y - elPos.y;

                var dist = Math.sqrt(x * x + y * y);

                var mutHover = false;

                if (dist < width * hoverArea) {
                    mutHover = true;
                    if (!hover) {
                        hover = true;
                    }
                    onHover(x, y);
                }

                if (!mutHover && hover) {
                    onLeave();
                    hover = false;
                }
            });
        };

        var onHover = function(x, y) {
            TweenMax.to($self, 0.4, {
                x: x * 0.8,
                y: y * 0.8,
                rotation: x * 0.05,
                ease: Power2.easeOut
            });
        };
        var onLeave = function() {
            TweenMax.to($self, 0.7, {
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                ease: Elastic.easeOut.config(1.2, 0.4)
            });
        };

        attachEventsListener();
    });
};

hoverMouse($(".magnetic-button"));