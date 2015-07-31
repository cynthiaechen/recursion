// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 console.log(typeof obj);
 console.log(Array.isArray(obj));
  //base case:
  if (typeof obj === "number") {
    return obj.toString();
  }
  if (obj === null) {
     return "null";
  }

  if (typeof obj === "boolean") {
      return obj.toString();
  }

  if (typeof obj === "string") {
     return "\"" + obj + "\"";
  }
    if (Array.isArray(obj)) {
    var result = [];
    _.each(obj, function(item) {
      result.push(stringifyJSON(item));
    });
    return "[" + result.join(",") + "]";
  } else {
    var str = [];
    for (var prop in obj) {
      if (obj[prop] === "undefined" || typeof obj[prop] === "function") {
        return "{}";
      } else {
      str.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
      }
    }
    return "{" + str.join(",") + "}";
  }

};
