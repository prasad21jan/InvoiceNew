/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('Customer').factory('customerService',[function(){
    return({

        customers: new Array(),
        addCustomer : function(customerdetail){
            this.customers.push(customerdetail);
        }
    })
}]);
