# Multilevel Object.hasOwnProperty

### Usage

```js
var person = {
  name: 'John Doe',
  age: 32,
  spouse: {
    name: 'Jane',
    age: 'she lied about her age'
  },
  dogs: [
    {
      name: 'Rex',
      breed: 'Rottweiler'
    },
    {
      name: 'Kiddo',
      breed: 'German Dog',
      pedigree: true
    }
  ]
};

var hasProperty = require('hasproperty');

console.log(hasProperty('name', person)); // true

console.log(hasProperty('spouse.name', person)); // true

console.log(hasProperty('dogs', person)); // true

console.log(hasProperty('dogs.0.name', person)); // true

console.log(hasProperty('dogs.0.pedigree', person)); // false
console.log(hasProperty('dogs.1.pedigree', person)); // true

```

### Adding `hasproperty` to `Object`'s prototype

```js
Object.prototype.recursiveHasOwnProperty = function (prop) {
  return require('hasproperty')(prop, this);
};

var person = {
  dog: {
    name: 'Rex'
  }
};

console.log(person.recursiveHasOwnProperty('dog.name')); // true
```

### TODO
Write some tests.
