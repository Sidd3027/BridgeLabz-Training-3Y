// Q8: Custom Array.prototype.myMap()
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("myMap called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const source = Object(this);
    const result = [];
    for (let index = 0; index < source.length; index++) {
      if (index in source) {
        result[index] = callback.call(thisArg, source[index], index, source);
      }
    }
    return result;
  };
}

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
