/**
 * Created by prasadd on 4/23/2015.
 */

angular.module('Customer').config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/customer");

    $stateProvider
        /*.state('invoiceList', {
            url: "invoiceList",
            templateUrl: "scripts/Invoice/view/invoiceList.html"
        })
*/
        .state('customer', {
            url: "customer",
            templateUrl: "scripts/Customer/view/customers.html"
        })

        .state('addCustomer', {
            url: "addCustomer",
            templateUrl: "scripts/Customer/view/addCustomer.html"

        })
        .state('customer.customerDetail', {
            url: "/customer/:custid",
            templateUrl: "scripts/Customer/view/customerDetail.html",
            controller: "invoiceCntrl"
        })

});
