/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('Invoice')
    .factory("invoiceService", [function () {
        return({
           invoiceList:new Array(),
            addInvoice : function(invoicedetail) {
                this.invoiceList.push(invoicedetail);
            }

        })
    }]);

angular.module('Invoice').factory('itemService',[function(){
    return({
        itemlist : new Array(),
        totalcst:0,
        additemlist : function(itemdetails){
            this.itemlist.push(itemdetails);
        },
        clearlist : function(){
            this.itemlist=[];
            this.totalcst=0;
        }
    })
}]);