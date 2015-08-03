// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var result = [];
  var body = document.body;

  var classcheck = function (collection) {
    if (collection.className && collection.classList.contains(className)) {
      result.push(collection);
    }
    if (collection.childNodes) {
      var children = collection.childNodes;
      for (var i = 0; i < children.length; i++) {
        classcheck(children[i]);
      }
    }
  };
  classcheck(body);
  return result;
};
