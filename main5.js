
function addNumbers(numberA, numberB) {
  return (numberA + numberB);
  console.log(addNumbers);
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);

function yell(result){
  var upper =result.toUpperCase();
  console.log(upper);
}

function yell10(x){
  for (i = 0; i < 10; i++) {
    yell(x);
  }
}

var allCaps = yell("Text in all uppercase feels like yelling");
var y = yell10("yell 10 times");


function longest(a,b){
var aLength = a.length;
var bLength = b.length;
  var longest;
  if(a>b) {
    longest = a;
  } else {
    longest = b;
  }
  return longest;
}

var test = longest("first string", "second string");
console.log(test);

function isVowel(x){
  if (x =="a"|| x=="A" || x=="e" || x=="E" || x=="i" ||x=="I"||x=="o"|| x=="O"||x=="u"||x=="U")
    return true;
  else return false;
}

var test1 = isVowel("t");
console.log(test1);
var test2=isVowel("a");
console.log(test2);
var test3=isVowel("E");
console.log(test3);
