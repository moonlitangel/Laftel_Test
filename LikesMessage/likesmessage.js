function likes(arr) {
    var strNum = arr.length;
    if(strNum === 0) return "no one likes this";
    else if(strNum === 1) return arr + " likes this";
    else if(strNum === 2) return arr[0] + " and " + arr[1] + " likes this";
    else if(strNum === 3) return arr[0] + ", " + arr[1] + " and " + arr[2] + " likes this";
    else if(strNum > 3) return arr[0] + ", " + arr[1] + " and " + (strNum-2) + " others likes this";
}

var test1 = ["maplestory", "LOL"];
var test2 = [];
var test3 = ["maplestory", "LOL", "HOS", "hearthstone"];
var test4 = ["maplestory", "LOL", "HOS", "hearthstone", "overwatch"];

document.getElementById('test1').innerText = '{' + test1 +'} : ' + likes(test1);
document.getElementById('test2').innerText = '{' + test2 +'} : ' + likes(test2);
document.getElementById('test3').innerText = '{' + test3 +'} : ' + likes(test3);
document.getElementById('test4').innerText = '{' + test4 +'} : ' + likes(test4);
