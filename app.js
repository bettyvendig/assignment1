(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();


(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    function DIController($scope,
        $filter,
        $injector) {
        $scope.name = "Yaakov";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(DIController));
    }

    function AnnonateMe(name, job, blah) {
        return "Blah!";
    }
    console.log(AnnonateMe());
    console.log(DIController.toString());

})();
