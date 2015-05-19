/**
 * Created by prasadd on 4/22/2015.
 */
angular.module('common').directive('myList',function(){
    return {
        template: '<ol>\
                         <li ng-repeat="n in customer" ng-bind="n"></li>\
                       </ol>'
    };
});
