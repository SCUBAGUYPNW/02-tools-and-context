// .forEach - executes a function for each item in a collection. Returns nothing.
// .map - turns one list into a new list by passing each element through the callback function and saving each result in the new list.
// .filter - takes all the elements in a list and returns a new list filtered down to only elements that pass some test defined by the callback function.
// .reduce - takes all the elements in a list and reduces them down to a single value, starting from some initial value.


'use strict';

const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}


const map = (array, cb) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let result = cb(element);
    results.push(result);
  }
  return results;
}


const filter = (array, cb) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let result = cb(element);
    if(result === true)  {
      results.push(element);
    }   
  }
  return results;
}

const reduce = (array, cb, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = cb.call(undefined, result, array[i], i, array);
    }
    return result;
}


module.exports = {};
module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;

