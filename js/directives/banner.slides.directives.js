if (!-[1,]) {
  document.createElement('banner');
  document.createElement('slide');
}
profileApp.factory('banners', function() {
    return {
      items: [],
      arrow: true
    };
  }).directive('banner', ['banners', function(bannerManager) {
    'use strict';

    if (typeof jQuery === 'undefined') {
      console.warn('This directive is depend on jQuery ($.animate).');
    }

    return {
      restrict: 'E',
      controller: function($scope, $timeout, $element, $attrs) {
        var banner = this;
          banner.showingId = 0;
          banner.playing = true;
          banner.slides = [];
          banner.$attrs = $attrs;
        var curSlide;
        
        if ($attrs.name) {
          bannerManager[$attrs.name] = banner;
        }

        bannerManager.items.push(banner);

        banner.play = function() {
          banner.playing = true;
          banner.interval();
        };

        banner.pasue = function() {
          banner.playing = false;
          $timeout.cancel(banner.timeoutId);
        };

        banner.interval = function() {
          $timeout.cancel(banner.timeoutId);
          if (banner.playing !== true) return;
          banner.timeoutId = $timeout(function() {
              banner.next();
              banner.interval();
            }, curSlide.props.interval);
        };

        banner.next = function() {
          $timeout.cancel(banner.timeoutId);
          if (banner.showingId === banner.slides.length -1) {
            // When lasest:
            banner.slidSlides(-$attrs.width);
            banner.curSlideFirst();
            curSlide.element.fadeIn(500);
          }
          else {
            // When not lasest:
            banner.slidSlides(-$attrs.width);
            banner.curSlideNext();
            curSlide.element.fadeIn(500);
          }

          if (jQuery.isFunction(banner.afterSlid)) {
            banner.afterSlid(banner.showingId);
          }
        };

        banner.prev = function() {
          $timeout.cancel(banner.timeoutId);
          if (banner.showingId === 0) {
            // When first:
            banner.slidSlides(+$attrs.width);
            banner.curSlideLasest();
            curSlide.element.fadeIn(500);
          }
          else {
            // When not first:
            banner.slidSlides(+$attrs.width);
            banner.curSlidePrev();
            curSlide.element.fadeIn(500);
          }

          if (jQuery.isFunction(banner.afterSlid)) banner.afterSlid(banner.showingId);
        };

        banner.goto = function(id) {
          var lasestId = banner.slides.length-1;
          if (id === 0) {
            banner.showingId = lasestId;
            banner.next();
          }
          else if (id <= lasestId) {
            banner.showingId = id-1;
            banner.next();
          }
          else {
            banner.showingId = lasestId;
            banner.next();
          }

          banner.interval();
        };

        banner.slidSlides = function(opt) {
          curSlide.element.animate({left: opt}, function complete() {
              jQuery(this).hide().css('left', 0);
            });
        };

        banner.afterSlid = function() {
          /* Waiting for developer manual register callback function */
        };

        banner.curSlideFirst = function() {
          banner.showingId = 0;
          curSlide = banner.slides[0];
        };

        banner.curSlideLasest = function() {
          banner.showingId = banner.slides.length -1;
          curSlide = banner.slides[banner.showingId];
        };

        banner.curSlideNext = function() {
          curSlide = banner.slides[++banner.showingId];
        };

        banner.curSlidePrev = function() {
          curSlide = banner.slides[--banner.showingId];
        };

        banner.linkSlide = function(scope, element) {
          var slide = {
            scope: scope,
            props: scope.slide,
            element: element
          };
          banner.slides.push(slide);
          if (angular.isArray(banner.slides) && banner.slides.length === 1) {
            banner.curSlideFirst();
            curSlide.element.show();
            banner.play();
          }
        };
      },
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs, bannerCtrl) {

          var opt = {
            height: attrs.height || 240,
            width: attrs.width || 360
            //  height: attrs.height || auto,
            // width: attrs.width || auto
          };

          // if (!bannerManager[attrs.name] || bannerManager[attrs.name].arrow === true) {
          //   element.append('<div class="arrow-left"></div>').find('.arrow-left').on('click', function doPrev() {
          //     bannerCtrl.prev();
          //   });

          //   element.append('<div class="arrow-right"></div>').find('.arrow-right').on('click', function doNext() {
          //     bannerCtrl.next();
          //   });
          // }
          if (!bannerManager[attrs.name] || bannerManager[attrs.name].arrow === true) {
            element.append('<span class="glyphicon glyphicon-chevron-left arrow-left"></span>').find('.arrow-left').on('click', function doPrev() {
              bannerCtrl.prev();
            });

            element.append('<span class="glyphicon glyphicon-chevron-right arrow-right"></span>').find('.arrow-right').on('click', function doNext() {
              bannerCtrl.next();
            });
          }

          element.on('mouseenter', function pasueSliding(event) {
            bannerCtrl.pasue();
          });

          element.on('mouseleave', function continueSliding(event) {
            bannerCtrl.play();
          });

          // Banners outer size
          //element.css(opt);
        };
      }
    };
  }])
  .directive('slide', function() {
    'use strict';

    return {
      restrict: 'E',
      require: '^banner',
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs, bannerCtrl) {
          
          var opt = {
            interval: 5000
          }

          // Extend two times in case of overwrite
          angular.extend(opt, scope.slide);
          angular.extend(scope.slide, opt);

          // Slide element default hidden
          element.css({display : 'none'})

          // Fetch slide to banner controller 
          bannerCtrl.linkSlide(scope, element);
        };
      }
    };
  });