function reverse(str) {
  var tag = str.split(" ");
  var arr = [];
  var num = 0;
  var tempNum = 0;
  for(var i=0;i<tag.length;i++) {
    if(tag[i].charAt(0) === "<") {
      var tagName = tag[i].replace("<", "</");
      for(var j=i+1;j<tag.length;j++) {
        if(tag[j].match(tagName)) {
          var temp = [];
          temp = tag.slice(i, j+1);
          tag[i] = temp.join(" ");
          tag.splice(i+1, j-i);
        }
      }
    }
  }
  return tag.reverse().join(" ");
}

var test1 = 'The quick <font color="brown">brown in hi</font> fox jumps over the lazy dog';
var test2 = 'This is <sub> subscript</sub> and <sup>superscript</sup>';
var test3 = 'The <font size="2" color="blue">font element</font> is not supported in HTML5. Use CSS instead';
var test4 = 'The <font size="2" color="blue">font element</font> is <font color="red">not supported</font> in HTML5. Use CSS instead'

document.getElementById('test1').innerText = '{' + test1 +'} : ' + reverse(test1);
document.getElementById('test2').innerText = '{' + test2 +'} : ' + reverse(test2);
document.getElementById('test3').innerText = '{' + test3 +'} : ' + reverse(test3);
document.getElementById('test4').innerText = '{' + test4 +'} : ' + reverse(test4);
