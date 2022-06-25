'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:navCollapse
 * @description
 * # navCollapse
 * # sidebar navigation dropdown collapse
 */
angular.module('SAPP')
  .directive('navCollapse', function ($timeout) {
    return {
      restrict: 'A',
      link: function ($scope, $el) {

        $timeout(function () {

          var $dropdowns = $el.find('ul').parent('li'),
            $a = $dropdowns.children('a'),
            $notDropdowns = $el.children('li').not($dropdowns),
            $notDropdownsLinks = $notDropdowns.children('a'),
            app = angular.element('.appWrapper'),
            sidebar = angular.element('#sidebar'),
            controls = angular.element('#controls');

          $dropdowns.addClass('dropdown');

          var $submenus = $dropdowns.find('ul >.dropdown');
          $submenus.addClass('submenu');

          $a.append('<i class="fa fa-plus"></i>');

          $a.on('click', function (event) {
            if (app.hasClass('sidebar-sm') || app.hasClass('sidebar-xs') || app.hasClass('hz-menu')) {
              return false;
            }

            var $this = angular.element(this),
              $parent = $this.parent('li'),
              $openSubmenu = angular.element('.submenu.open');

            if (!$parent.hasClass('submenu')) {
              $dropdowns.not($parent).removeClass('open').find('ul').slideUp();
            }

            $openSubmenu.not($this.parents('.submenu')).removeClass('open').find('ul').slideUp();
            $parent.toggleClass('open').find('>ul').stop().slideToggle();
            event.preventDefault();
          });

          $dropdowns.on('mouseenter', function () {
            sidebar.addClass('dropdown-open');
            controls.addClass('dropdown-open');
          });

          $dropdowns.on('mouseleave', function () {
            sidebar.removeClass('dropdown-open');
            controls.removeClass('dropdown-open');
          });

          $notDropdownsLinks.on('click', function () {
            $dropdowns.removeClass('open').find('ul').slideUp();
          });

          var $activeDropdown = angular.element('.dropdown>ul>.active').parent();

          $activeDropdown.css('display', 'block');
        });

      }
    };
  });
'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:slimScroll
 * @description
 * # slimScroll
 */
angular.module('SAPP')
  .directive('slimscroll', function () {
    return {
      restrict: 'A',
      link: function ($scope, $elem, $attr) {
        var off = [];
        var option = {};

        var refresh = function () {
          if ($attr.slimscroll) {
            option = $scope.$eval($attr.slimscroll);
          } else if ($attr.slimscrollOption) {
            option = $scope.$eval($attr.slimscrollOption);
          }

          angular.element($elem).slimScroll({ destroy: true });

          angular.element($elem).slimScroll(option);
        };

        var registerWatch = function () {
          if ($attr.slimscroll && !option.noWatch) {
            off.push($scope.$watchCollection($attr.slimscroll, refresh));
          }

          if ($attr.slimscrollWatch) {
            off.push($scope.$watchCollection($attr.slimscrollWatch, refresh));
          }

          if ($attr.slimscrolllistento) {
            off.push($scope.$on($attr.slimscrolllistento, refresh));
          }
        };

        var destructor = function () {
          angular.element($elem).slimScroll({ destroy: true });
          off.forEach(function (unbind) {
            unbind();
          });
          off = null;
        };

        off.push($scope.$on('$destroy', destructor));

        registerWatch();
      }
    };
  });
'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:sparkline
 * @description
 * # sparkline
 */
angular.module('SAPP')
  .directive('sparkline', [
    function () {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function ($scope, $el) {
          var data = $scope.data,
            options = $scope.options,
            chartResize,
            chartRedraw = function () {
              return $el.sparkline(data, options);
            };
          angular.element(window).resize(function () {
            clearTimeout(chartResize);
            chartResize = setTimeout(chartRedraw, 200);
          });
          return chartRedraw();
        }
      };
    }
  ]);

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:collapseSidebarSm
 * @description
 * # collapseSidebarSm
 */
angular.module('SAPP')
  .directive('collapseSidebar', function ($rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {

        var app = angular.element('.appWrapper'),
          $window = angular.element(window),
          width = $window.width();

        var removeRipple = function () {
          angular.element('#sidebar').find('.ink').remove();
        };

        var collapse = function () {

          width = $window.width();

          if (width < 992) {
            app.addClass('sidebar-sm');
          } else {
            app.removeClass('sidebar-sm sidebar-xs');
          }

          if (width < 768) {
            app.removeClass('sidebar-sm').addClass('sidebar-xs');
          } else if (width > 992) {
            app.removeClass('sidebar-sm sidebar-xs');
          } else {
            app.removeClass('sidebar-xs').addClass('sidebar-sm');
          }

          if (app.hasClass('sidebar-sm-forced')) {
            app.addClass('sidebar-sm');
          }

          if (app.hasClass('sidebar-xs-forced')) {
            app.addClass('sidebar-xs');
          }

        };

        collapse();

        $window.resize(function () {
          if (width !== $window.width()) {
            var t;
            clearTimeout(t);
            t = setTimeout(collapse, 300);
            removeRipple();
          }
        });

        element.on('click', function (e) {
          if (app.hasClass('sidebar-sm')) {
            app.removeClass('sidebar-sm').addClass('sidebar-xs');
          }
          else if (app.hasClass('sidebar-xs')) {
            app.removeClass('sidebar-xs');
          }
          else {
            app.addClass('sidebar-sm');
          }

          app.removeClass('sidebar-sm-forced sidebar-xs-forced');
          app.parent().removeClass('sidebar-sm sidebar-xs');
          removeRipple();
          e.preventDefault();
        });

      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:ripple
 * @description
 * # ripple
 */
angular.module('SAPP')
  .directive('ripple', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var parent, ink, d, x, y;

        angular.element(element).find('>li>a').click(function (e) {
          parent = angular.element(this).parent();

          if (parent.find('.ink').length === 0) {
            parent.prepend('<span class="ink"></span>');
          }

          ink = parent.find('.ink');
          //incase of quick double clicks stop the previous animation
          ink.removeClass('animate');

          //set size of .ink
          if (!ink.height() && !ink.width()) {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({ height: d, width: d });
          }

          //get click coordinates
          //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
          x = e.pageX - parent.offset().left - ink.width() / 2;
          y = e.pageY - parent.offset().top - ink.height() / 2;

          //set the position and add class .animate
          ink.css({ top: y + 'px', left: x + 'px' }).addClass('animate');

          setTimeout(function () {
            angular.element('.ink').remove();
          }, 600);
        });
      }
    };
  });
'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:pageLoader
 * @description
 * # pageLoader
 */
angular.module('SAPP')
  .directive('pageLoader', [
    '$timeout',
    function ($timeout) {
      return {
        restrict: 'AE',
        template: '<div class="dot1"></div><div class="dot2"></div>',
        link: function (scope, element) {
          element.addClass('hide');
          scope.$on('$stateChangeStart', function () {
            element.toggleClass('hide animate');
          });
          scope.$on('$stateChangeSuccess', function (event, toState) {
            event.targetScope.$watch('$viewContentLoaded', function () {
              $timeout(function () {
                element.toggleClass('hide animate');
              }, 600);
            });
          });
        }
      };
    }
  ]);
'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:TileControlClose
 * @description
 * # TileControlClose
 */
angular.module('SAPP')
  .directive('tileControlClose', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');

        element.on('click', function () {
          tile.addClass('closed').fadeOut();
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:tileControlFullscreen
 * @description
 * # tileControlFullscreen
 */
angular.module('SAPP')
  .directive('tileControlFullscreen', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var dropdown = element.parents('.dropdown');

        element.on('click', function () {
          dropdown.trigger('click');
        });

      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:tileControlRefresh
 * @description
 * # tileControlRefresh
 */
angular.module('SAPP')
  .directive('tileControlRefresh', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');
        var dropdown = element.parents('.dropdown');

        element.on('click', function () {
          tile.addClass('refreshing');
          dropdown.trigger('click');
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:tileControlToggle
 * @description
 * # tileControlToggle
 */
angular.module('SAPP')
  .directive('tileControlToggle', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');

        element.on('click', function () {
          tile.toggleClass('collapsed');
          tile.children().not('.tile-header').slideToggle(150);
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:wrapOwlcarousel
 * @description
 * # wrapOwlcarousel
 */
angular.module('SAPP')
  .directive('wrapOwlcarousel', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        var options = scope.$eval(angular.element(element).attr('data-options'));

        angular.element(element).owlCarousel(options);
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:daterangepicker
 * @description
 * # daterangepicker
 */
angular.module('SAPP')
  .directive('daterangepicker', function () {
    return {
      restrict: 'A',
      scope: {
        options: '=daterangepicker',
        start: '=dateBegin',
        end: '=dateEnd'
      },
      link: function (scope, element) {
        element.daterangepicker(scope.options, function (start, end) {
          scope.start = start.format('MMMM D, YYYY');
          scope.end = end.format('MMMM D, YYYY');
          scope.$apply();
        });
      }
    };
  });


'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:activateButton
 * @description
 * # activateButton
 */
angular.module('SAPP')
  .directive('activateButton', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var activatedClass = 'btn-activated';
        var status = attrs.activateButton;
        var activate = function () {
          element.addClass(activatedClass);
          setTimeout(function () {
            element.removeClass(activatedClass);
          }, 1000);
        };

        element.on('click', function () {
          if (!element.hasClass(activatedClass) && status === 'success') {
            element.addClass('btn-activated-success');
            setTimeout(function () {
              element.removeClass('btn-activated-success');
            }, 1000);
          } else if (!element.hasClass(activatedClass) && status === 'error') {
            element.addClass('btn-activated-error');
            setTimeout(function () {
              element.removeClass('btn-activated-error');
            }, 1000);
          } else if (!element.hasClass(activatedClass)) {
            activate();
          }
        });
      }
    };
  });
'use strict';
angular.module('SAPP')
  .directive('mayus', function () {
    return {
      restrict: 'A', // only activate on element attribute
      require: 'ngModel',
      link: function (scope, element, attrs, modelCtrl) {
        var capitalize = function (inputValue) {
          if (inputValue) {
            var capitalized = inputValue.toUpperCase();
            if (capitalized !== inputValue) {
              modelCtrl.$setViewValue(capitalized);
              modelCtrl.$render();
            }
            return capitalized;
          } else { return ""; }
        };
        modelCtrl.$parsers.push(capitalize);
        capitalize(scope[attrs.ngModel]);
      }
    };
  });
