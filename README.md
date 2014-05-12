# ngHelpers

This project aims to provide helper services that will...hopefuly...facilitate your development process.

## Linqular

This service tries to mimic LINQ extension methods.

It outputs a filtered array.

### Usage

```javascript

angular.module('myApp',['ngHelpers'])
       .controller('myController',function($scope,linqular){
       
          var myArray = [
             {prop1: 'test', prop2:1, unique:1},
             {prop1: 'test2', prop2:2, unique:2},
             {prop1: 'test', prop2: 1, unique: 3}
          ];
          
          var filtered = linqular.array(myArray)
                                 .where({key:'prop1',value:'test'})
                                 .where({key:'prop2',value:1})
                                 .exec();
       
          // will return a array with the elements with the unique key 1 and 3
       });
