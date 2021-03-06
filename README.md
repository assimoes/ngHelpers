# ngHelpers

This project aims to provide helper services that will...hopefuly...facilitate your development process.

## Linqular

This service tries to mimic LINQ extension methods.

It outputs a filtered array.

### Methods

##### array

Takes an array as argument. 
This should be the Array you want to filter

Eg.:

```javascript
linqular(myArray)
```

##### where

Takes an object as argument.
The object must contain a key and a value property.

Eg.: 

```javascript
linqular(myArray).where({key: 'property1', value:'some value'})
```

##### exec

This method finalizes the query and returns a filtered array.

eg.:

```javascript
var filtered = linqular(myArray).where({key: 'property1', value:'some value'}).exec();
```

### Usage

```html

<script src="path.to/angular.min.js" />
<script src="path.to/ngHelpers.js" />

```

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
       
          // will return an array with the elements with the unique key 1 and 3
       });
```
