var wordCount = function(text) {
  var arr = text.replace(/\W+/g, " ").trim().split(' ');
  var counts = {};

  for(var i = 0; i< arr.length; i++) {
      var word = arr[i];
      counts[word] = counts[word] ? counts[word]+1 : 1;
  }

  return counts;
};

$(document).ready(function(){
  $('form# FORM ').submit(function(event){

    // stuff

  });
});
