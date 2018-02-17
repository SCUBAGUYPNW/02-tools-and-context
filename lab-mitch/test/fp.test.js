'use strict';

const forEach = require('../lib/fp.js').forEach;
//this line connects to the other file and "picks off" the function containsVowels
const doubler = (n) => {return n * 2};
const isEven = (n) => {return n % 2 === 0};
let array = [5, 16, 22, 7, 12, 8, 33];
describe("forEach function", () => {
  it('it should return undefined since it is not actually defining anything, only runs through the function', () => {
    let result = forEach(array, doubler);
    let expected = undefined;
    expect(result).toBe(expected);
  });
});
const map = require('../lib/fp.js').map;
describe("map function", () => {
  it('it should return an array of all numbers doubled by 2', () => {
    let result = map(array, doubler);
    let expected = [10, 32, 44, 14, 24, 16, 66];
    expect(result).toEqual(expected);
  });
});
const filter = require('../lib/fp.js').filter;
describe("filter function", () => {
  it('it should return ...', () => {
    let result = filter(array, isEven);
    let expected = [16, 22, 12, 8];
    expect(result).toEqual(expected);
  });
});
const reduce = require('../lib/fp.js').reduce;

describe("reduce function", () => {
  it('it should return a single number by adding up the result of the  callback function', () => {
    let result = reduce(array, (acc, curr) => {
        return acc + curr;
    }, 0)
    let expected = 103;
        expect(result).toBe(expected);
    }) 
});


// reduce([1, 2, 3, 4, 5], (result, item) => {
//     result.push(item * 2);
//     return result;
//   }, []); // [ 2, 4, 6, 8, 10 ]