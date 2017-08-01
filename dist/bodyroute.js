


(function () {

    'use strict';


    /**

     * @ngdoc service

     * @name fs.fsBodyroute

    */

    angular.module('fs-angular-bodyroute',[])

    .factory('fsBodyroute', function ($location,$rootScope) {


        return { init: init };


        /**

         * @ngdoc method

         * @name init

         * @methodOf fs.fsBodyroute

         * @param {object} options The options to configure the body route

         * @param {object} options.target ie: $rootScope

         * @param {string} options.event ie: $routeChangeSuccess

         */

        function init(options) {


            var options = options || {};


            if(!options.target)

                options.target = $rootScope;


            if(!options.event)

                options.event = '$stateChangeSuccess';


            options.target.$on(options.event, function(event, state) {

                apply(state);

            });

        }


        function apply(state) {


            if(state.data && state.data.bodyRoute && state.data.bodyRoute.name) {

                var parts = state.data.bodyRoute.name.split('-');

            } else {

                var parts = $location.path().replace(/\/\d+(\/|$)/g,'/').replace(/(^\/|\/$)/,'').split("/");

            }


            if(!parts.length)

                parts = ['index'];


            var body = angular.element(document.querySelector('body'));

            body.attr('id','body-' + parts.join('-'));


            angular.forEach(body.attr('class').split(' '),function(cls) {

                if(cls.match(/^body-/)) {

                    body.removeClass(cls);

                }

            });

            if(state.data.bodyClass) {
                body.addClass(state.data.bodyClass);
            }
            
            var namespace = 'body-';

            angular.forEach(parts,function(name) {

                body.addClass(namespace + name);

                namespace += name + '-';

            });

        }


    });


})();
angular.module('fs-angular-bodyroute').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/directive.html',
    ""
  );

}]);
