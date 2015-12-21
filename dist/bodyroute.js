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
    .factory('fsBodyroute', function ($location) {
 
        return { init: init };

        function init(options) {

            var options = options || {};
            
            if(!options.target)
                throw 'Invalid body route target';

            if(!options.event)
                throw 'Invalid body route event';

            options.target.$on(options.event, function(event, toState) { 
                apply();
            });
        }

        function apply() {
            var parts = $location.path().replace(/^\//,'').split("/");

            if(!parts.length)
                parts = ['index'];

            var body = angular.element(document.querySelector('body'));
            body.attr('id','body-' + parts.join('-'));

            angular.forEach(body.attr('class').split(' '),function(cls) {
                if(cls.match(/^body-/)) {
                    body.removeClass(cls);
                }
            });

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
