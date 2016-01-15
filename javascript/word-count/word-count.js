// var HelloWorld = function() {};
// 
// HelloWorld.prototype.hello = function(input) {
//   if (input === "") {
//     return "Hello, world!";
//   } else {
//     return "Hello, " + input + "!";
//   };
// };

// module.exports = HelloWorld;


var words = function(input) {
  var collection = {};
  // var split_words = input.split(" ");
    var split_words = input.split(/[$\s]/);

  for(var i = 0; i < split_words.length; i++) {
    if (collection[split_words[i]] === undefined) {
      collection[split_words[i]] = 1; 
    } else {
      collection[split_words[i]]++;
    };
  };
    return collection
};

module.exports = words;