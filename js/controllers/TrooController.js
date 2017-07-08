angular
.module('Troosearch')
.controller('TrooController',['$scope',TrooFunction]);

function TrooFunction( $scope ){

  // $scope.search = function(){
  //   return true;
  //   angular.forEach($scope.property, function(sim){
  //     console.log(sim.name);
  //
  //
  //     if('c' == sim.name.charAt(0))
  //     return true;
  //     // else {
  //     //   return false;
  //     // }
  //   });
  // }


  $scope.ser = function( e ){
    if(e.key == undefined)
    $scope.check = false;
    else {
      $scope.check = true;
    }
    // console.log(x);
    // return x;
  }


  $scope.property =[{
    name: 'Chintels Paradiso',
    location: 'Gurgaon',
    type: 'Apartment'
  },{
    name: 'Chintels Serenity',
    location: 'Gurgaon',
    type: 'Apartment'
  },{
    name: 'Chintels International City',
    location: 'Gurgaon',
    type: 'Villa'
  },{
    name: 'Chintels ATS Coocon',
    location: 'Gurgaon',
    type: 'Apartment'
  },{
    name: 'Chintels Cyper Park',
    location: 'Gurgaon',
    type: 'Commercial Space'
  },{
    name: 'Chintels International School',
    location: 'Gurgaon',
    type: 'School'
  }];

  $scope.change = [];
  $scope.cli = function( e ){
    $scope.change.push($scope.searchText);
  }

  // angular.forEach($scope.property, function(simr){
  //   console.log(simr.name);
  // });
}
