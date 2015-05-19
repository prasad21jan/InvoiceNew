/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('Invoice').controller('invoiceCntrl',['$scope','invoiceService','customerService','itemService','$stateParams',function($scope ,invoiceService,customerService,itemService,$stateParams){

    $scope.addInvoice = function () {
        $scope.invoiceid = $scope.invoiceList.length + 1;
        var custid=$scope.selectedcust;
        invoiceService.addInvoice(
            {
                invoiceId: $scope.invoiceid,
                itemlist:itemService.itemlist,
                custInvoiceId:$scope.selectedcust,
                totalcost: $scope.totalcost,
                paid : $scope.paid

            });
        $scope.invoiceid=0;

        $scope.itemlist='';
        $scope.totalcost=0;
        $scope.selectedcust=0;
        $scope.custInvoiceId=0;
        $scope.paid=false;
        itemService.clearlist();
        $scope.invoiceList=invoiceService.invoiceList;
    };

    $scope.additem = function()
    {
        itemService.additemlist({itemtitle: $scope.itemtitle,quantity: $scope.quantity,cost: $scope.price});
        itemService.totalcst = itemService.totalcst + $scope.quantity*$scope.price;
        $scope.itemtitle='';
        $scope.quantity='';
        $scope.price='';
        $scope.totalcost=itemService.totalcst;
        $scope.itemlist = itemService.itemlist;
    }
    $scope.itemlist =itemService.itemlist;
    $scope.custlist = customerService.customers;
    $scope.invoiceList=invoiceService.invoiceList;
    $scope.invoicelstid = $stateParams.id;
    $scope.custlstid = $stateParams.custid;



}]);