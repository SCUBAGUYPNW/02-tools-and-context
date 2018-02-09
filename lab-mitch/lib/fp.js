// .forEach - executes a function for each item in a collection. Returns nothing.
// .map - turns one list into a new list by passing each element through the callback function and saving each result in the new list.
// .filter - takes all the elements in a list and returns a new list filtered down to only elements that pass some test defined by the callback function.
// .reduce - takes all the elements in a list and reduces them down to a single value, starting from some initial value.

let arr = [12, 23, 43, 67, 39, 52]

const doubleEach = (n) => {return 2 * n}

function mapDemo(arr, cb) {
    let mapResult = []
    for (let i = 0; i < arr.length; i++) {
        let singleElement = arr[i];
        let result = cb(singleElement);
        mapResult.push(result);
    }
    return mapResult;
}
console.log(mapDemo(arr, doubleEach));

module.exports = {};
module.exports.mapDemo = mapDemo;
