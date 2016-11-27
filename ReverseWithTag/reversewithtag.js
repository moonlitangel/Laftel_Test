function reverse(str) {
  if(((typeof str != "undefined") && (typeof str.valueOf() == "string")) && (str.length > 0)) {
    var tag = str.split(" ");

    for (var i = 0; i < tag.length; i++) {
      if (tag[i].charAt(0) === "<") {
        var tagName = tag[i].replace("<", "</");
        for (var j = i + 1; j < tag.length; j++) {
          if (tag[j].match(tagName)) {
            var temp = [];
            temp = tag.slice(i, j + 1);
            tag[i] = temp.join(" ");
            tag.splice(i + 1, j - i);
          }
        }
      }
    }
    return tag.reverse().join(" ");
  }
  else return "Not String";
}

var test1 = 'The quick <font color="brown">brown in hi</font> fox jumps over the lazy dog';
var test2 = 'This is <sub> subscript</sub> and <sup>superscript</sup>';
var test3 = 'The <font size="2" color="blue">font element</font> is not supported in HTML5. Use CSS instead';
var test4 = 'The <font size="2" color="blue">font element</font> is <font color="red">not supported</font> in HTML5. Use CSS instead';

document.getElementById('RT_test1').innerText = '{' + test1 +'} :\n' + reverse(test1);
document.getElementById('RT_test2').innerText = '{' + test2 +'} : \n' + reverse(test2);
document.getElementById('RT_test3').innerText = '{' + test3 +'} : \n' + reverse(test3);
document.getElementById('RT_test4').innerText = '{' + test4 +'} : \n' + reverse(test4);

console.log("2. Reverse with Tag");
console.log(reverse(test1));
console.log(reverse(test2));
console.log(reverse(test3));
console.log(reverse(test4));
