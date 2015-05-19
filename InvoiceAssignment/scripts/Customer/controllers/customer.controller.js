/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('Customer').controller('customerCntrl',['$scope','customerService','invoiceService', '$stateParams',function($scope, nameService,invoiceService, $stateParams){
    $scope.addCust =function() {
        //var cust = $scope.selectedcust;
        $scope.custid = $scope.custlist.length+1;
        nameService.addCustomer({'custid':$scope.custid,'name':$scope.name,'address':$scope.address});
        $scope.name = '';
        $scope.address='';
        $scope.custid=0;
    };
    $scope.custlist=nameService.customers;
    $scope.custid = $stateParams.custid;

    //$scope.custidtemp = $stateParams.custid;
 /*  $scope.outStanding=function(custid1) {
       // console.log('custId :',$scope.custid);*/
       $scope.totalOutStanding = 0;
       angular.forEach(invoiceService.invoiceList, function (invoice) {

           if (invoice.paid != true && invoice.custInvoiceId == $scope.custid)
           {
               //console.log('in if');
               $scope.totalOutStanding = $scope.totalOutStanding + invoice.totalcost;
           }
       });
       //return $scope.totalOutStanding;
       //}
    //console.log('List :',invoiceService.invoiceList);
    //console.log('totalcost :',$scope.totalOutStanding);
         //return totalOutStanding;

}]);

