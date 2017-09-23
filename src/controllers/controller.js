var app=angular.module("FirstApp",[]);

app.controller('AppCtrl',function AppCtrl($scope, $http){
    var refresh=function(){
    $http.get('mongodb://jesse:donthackme@ds051990.mlab.com:51990/mycl123', ['contactlist']).then(successCallback, errorCallback);
    function successCallback(response)
    {
        $scope.contactlist=response.data;
    }
    function errorCallback(error)
    {
        console.log(error);
    }
    };
    
    refresh();

    $scope.addContact=function()
    {
        $http.post('mongodb://jesse:donthackme@ds051990.mlab.com:51990/mycl123', ['contactlist'], $scope.contact).then(successCall, errCall);
        function successCall(response)
        {
            $scope.contact="";
            refresh();
        }
        function errCall(error)
        {
            console.log(error);
        }
    }
});
