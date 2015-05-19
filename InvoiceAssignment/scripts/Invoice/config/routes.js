/**
 * Created by prasadd on 4/23/2015.
 */

angular.module('Invoice').config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/invoicelist");

    $stateProvider.state('invoice',{
            url:"invoice",
            templateUrl:"scripts/Invoice/view/invoice.html"
        })
        .state('addInvoice', {
            url: "addInvoice",
            templateUrl: "scripts/Invoice/view/addInvoice.html"
        })
        .state('invoiceDetail', {
            url: "invoiceDetail",
            templateUrl: "scripts/Invoice/view/invoiceDetail.html",
			controller: "invoiceCntrl"
        })
        .state('invoiceList', {
            url: "invoiceList",
            templateUrl: "scripts/Invoice/view/invoiceList.html"
        })
        .state('invoiceList.invoiceDetail', {
            url: "/invoiceList/:id",
            templateUrl: "scripts/Invoice/view/invoiceDetail.html",
            controller: "invoiceCntrl"
        })

});
