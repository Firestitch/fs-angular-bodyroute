(function () {
    'use strict';
    
	angular.module('fs-angular-bodyroute',[]);

})();
(function () {
    'use strict';


})();

(function () {
    'use strict';

    /**
     * @ngdoc interface
     * @name fs-angular-bodyroute.services:fsBodyroute
    */
    angular.module('fs-angular-bodyroute')
    .factory('fsBodyroute', function ($rootScope, $location) {
 
        return { init: init };

        function init() {

            $rootScope.$on('$routeChangeSuccess', function(ev, data) {

                if (data.$$route) {
                    
                    var parts = $location.path().replace(/^\//,'').split("/");

                    if(!parts.length)
                        parts = ['index'];

                    var body = angular.element(document.querySelector('body'));
                    body.attr('id','body-' + parts.join('-'));

                    var namespace = 'body-';
                    angular.forEach(parts,function(name) {
                        body.addClass(namespace + name);
                        namespace += name + '-';
                    });
                }
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
