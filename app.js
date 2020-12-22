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

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);


  

    
    function LunchCheckController($scope,
            $filter,
        $injector)
    {
        LunchCheckController.$inject['$scope'];


        $scope.items = "";
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        
        console.log($injector.annotate(LunchCheckController));

        $scope.checkMessage = function () {
           
            var arr = $scope.items.split(',');
            let newArray = arr.filter(function (e) {
                console.log(e.replaceAll(" ", ""));

                return (e.replaceAll(" ","").replaceAll("'","") != "");
            });
            console.log(newArray);
            console.log("new array count" + newArray.length);
  
            




            console.log(arr);
            $scope.message = arr.length;
            
            if (newArray.length == 0 ) {
                $scope.message = "please enter data first";
                $scope.class = "red";
            } else {
                if (newArray.length > 3) {
                    $scope.message =newArray.length + " is too much!";
                    $scope.class = "green";
                } else {
                    $scope.message = "Enjoy";
                    $scope.class = "green";
                }
               
            }
           
            
        };





    }

  

})();
