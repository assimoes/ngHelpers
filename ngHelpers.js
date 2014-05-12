
(function () {
    'use strict'
    angular.module('ngHelpers', [])
           .factory('linqular', function () {

               var originalArray = [];

               function array(arr) {
                   originalArray = arr.slice();
                   return this;
               }

               function where(clause) {
                   var f = originalArray.filter(function (elem) {
                       if (elem[clause.key] === clause.value) {
                           return true;
                       }
                       return false;
                   });
                   originalArray = f.slice();
                   return this;
               }

               function exec() {
                   return originalArray;
               }

               return {
                   where: where,
                   exec: exec,
                   array: array
               }
           });
})();
