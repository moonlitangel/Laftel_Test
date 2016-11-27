var isRoyalFlush = 0;
var isStraightFlush = 1;
var isBackStraightFlush = 2;
var isFourOfAKind = 3;
var isFullHouse = 4;
var isFlush = 5;
var isStraight = 6;
var isBackStraight = 7
var isThreeOfAKind = 8;
var isTwoPairs = 9;
var isPair = 10;
var isHighestCard = 11;

function cardSplit(arr) {
  if(((typeof arr != "undefined") && (typeof arr.valueOf() == "string"))) {
    var temp = arr.split(" ");
    var card = [];

    for (var i = 0; i < temp.length; i++) {
      card[i] = [];
      for (var j = 0; j < 2; j++) {
        card[i][j] = temp[i].toString().split("")[j];
      }
    }
    return card;
  }
  else return "No Array";
}

function cardChange(arr) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i][0] === "T") arr[i][0] = 10;
    else if(arr[i][0] === "J") arr[i][0] = 11;
    else if(arr[i][0] === "Q") arr[i][0] = 12;
    else if(arr[i][0] === "K") arr[i][0] = 13;
    else if(arr[i][0] === "A") arr[i][0] = 14;
    else arr[i][0] = parseInt(arr[i][0], 10);
  }
  return arr;
}

function cardSort(arr) {
  for(var i=0; i<arr.length-1; i++) {
    for(var j=0; j<arr.length-1; j++) {
      if(arr[j][0] < arr[j+1][0]) {
        var temp = arr[j][0];
        arr[j][0] = arr[j+1][0];
        arr[j+1][0] = temp;
      }
    }
  }
  return arr;
}

function cardSwap(arr, i, j) {
  var temp = arr[i][0];
  arr[i][0] = arr[j][0];
  arr[j][0] = temp;
  return arr;
}

function playerCompare(arr1, arr2, i) {
  if(arr1[i][0] > arr2[i][0]) return "player1 Win";
  else if(arr1[i][0] < arr2[i][0]) return "player2 Win";
}

function cardCompare(arr) {
  if(arr[1][1] === arr[0][1] && arr[2][1] === arr[0][1] && arr[3][1] === arr[0][1] && arr[4][1] === arr[0][1]) {
    if(arr[0][0] === 14 && arr[1][0] === 13 && arr[2][0] === 12 && arr[3][0] === 11 && arr[4][0] === 10) return isRoyalFlush;
    else if(arr[1][0]+1 === arr[0][0] && arr[2][0]+2 === arr[0][0] && arr[3][0]+3 === arr[0][0] && arr[4][0]+4 === arr[0][0]) return isStraightFlush;
    else if(arr[0][0] === 14 && arr[2][0]+1 === arr[1][0] && arr[3][0]+2 === arr[1][0] && arr[4][0]+3 === arr[1][0]) return isBackStraightFlush;
    else return isFlush;
  }
  else if(arr[0][0] === arr[3][0] || arr[1][0] === arr[4][0]) {
    if(arr[1][0] === arr[4][0]) {
      cardSwap(arr, 0, 4);
    }
    return isFourOfAKind;
  }
  else if(arr[1][0]+1 === arr[0][0] && arr[2][0]+2 === arr[0][0] && arr[3][0]+3 === arr[0][0] && arr[4][0]+4 === arr[0][0]) return isStraight;
  else if(arr[0][0] === 14 && arr[2][0]+1 === arr[1][0] && arr[3][0]+2 === arr[1][0] && arr[4][0]+3 === arr[1][0]) return isBackStraight;
  else if(arr[0][0] === arr[2][0] || arr[1][0] === arr[3][0] || arr[2][0] === arr[4][0]) {
    if(arr[1][0] === arr[3][0]) {
      cardSwap(arr, 0, 3);
    }
    else if(arr[2][0] === arr[4][0]) {
      cardSwap(arr, 0, 3);
      cardSwap(arr, 1, 4);
    }
    if(arr[3][0] === arr[4][0]) return isFullHouse;
    else return isThreeOfAKind;
  }
  else if(arr[0][0] === arr[1][0] || arr[1][0] === arr[2][0] || arr[2][0] === arr[3][0] || arr[3][0] === arr[4][0]) {
    if(arr[2][0] === arr[3][0] || arr[3][0] === arr[4][0]) return isTwoPairs;
    else return isPair;
  }
  else return isHighestCard;
}

function playerResult(arr1, arr2) {
  var player1 = cardSort(cardChange(cardSplit(arr1)));
  var player2 = cardSort(cardChange(cardSplit(arr2)));

  if(cardCompare(player1) > cardCompare(player2)) {
    return "player2 Win";
  }
  else if(cardCompare(player1) < cardCompare(player2)) {
    return "player1 Win";
  }
  else if(cardCompare(player1) === cardCompare(player2)) {
    if(cardCompare(player1) === 3) {
      if(playerCompare(player1, player2, 4)) return playerCompare(player1, player2, 4);
      else return "Draw!";
    }
    else if(cardCompare(player1) === 4) {
      if(playerCompare(player1, player2, 3)) return playerCompare(player1, player2, 3);
      else return "Draw!";
    }
    else if(cardCompare(player1) === 5) {
      for(var i=0; i<player1.length; i++) {
        if(playerCompare(player1, player2, i)){
          return playerCompare(player1, player2, i);
          break;
        }
      }
      if(!playerCompare(player1, player2, 4)) return "Draw!";
    }
    else if(cardCompare(player1) === 6) {
      for(var i=0; i<player1.length; i++) {
        if(playerCompare(player1, player2, i)){
          return playerCompare(player1, player2, i);
          break;
        }
        if(!playerCompare(player1, player2, 4)) return "Draw!";
      }
    }
    else if(cardCompare(player1) === 8) {
      if(playerCompare(player1, player2, 3)) return playerCompare(player1, player2, 3);
      else if(playerCompare(player1, player2, 4)) return playerCompare(player1, player2, 4);
      else return "Draw!";
    }
    else if(cardCompare(player1) === 9) {
      if(playerCompare(player1, player2, 0)) return playerCompare(player1, player2, 0);
      else if(playerCompare(player1, player2, 3)) return playerCompare(player1, player2, 3);
      else if(playerCompare(player1, player2, 4)) return playerCompare(player1, player2, 4);
      else return "Draw!";
    }
    else if(cardCompare(player1) === 10) {
      if(playerCompare(player1, player2, 2)) return playerCompare(player1, player2, 2);
      else if(playerCompare(player1, player2, 3)) return playerCompare(player1, player2, 3);
      else if(playerCompare(player1, player2, 4)) return playerCompare(player1, player2, 4);
      else return "Draw!";
    }
    else if(cardCompare(player1) === 11) {
      for(var i=0; i<player1.length; i++) {
        if(playerCompare(player1, player2, i)){
          return playerCompare(player1, player2, i);
          break;
        };
      }
      if(!playerCompare(player1, player2, 4)) return "Draw!";
    }
    else return "Draw!";
  }
}

var test1_Player1 = 'As 8d Ad 8c 5d';
var test1_Player2 = 'Jh Js Jd Kd Jc';
var test2_Player1 = 'Ks Kc Jd Kd Jc';
var test2_Player2 = 'Jh Js Jd Kd Jc';
var test3_Player1 = 'Ad Kh Ac 7h 7d';
var test3_Player2 = 'Ad Kh Ac 7h 7d';
var test4_Player1 = '7s As Ks 4s 3s';
var test4_Player2 = 'Ad 7d 2d 3d Kd';

document.getElementById('PH_test1').innerText = '{ player1 :' + test1_Player1 + ' } { player2 :'+ test1_Player2 + '} :' + playerResult(test1_Player1, test1_Player2);
document.getElementById('PH_test2').innerText = '{ player1 :' + test2_Player1 + ' } { player2 :'+ test2_Player2 + '} :' + playerResult(test2_Player1, test2_Player2);
document.getElementById('PH_test3').innerText = '{ player1 :' + test3_Player1 + ' } { player2 :'+ test3_Player2 + '} :' + playerResult(test3_Player1, test3_Player2);
document.getElementById('PH_test4').innerText = '{ player1 :' + test4_Player1 + ' } { player2 :'+ test4_Player2 + '} :' + playerResult(test4_Player1, test4_Player2);

console.log("3. Poker Hand");
console.log(playerResult(test1_Player1, test1_Player2));
console.log(playerResult(test2_Player1, test2_Player2));
console.log(playerResult(test3_Player1, test3_Player2));
console.log(playerResult(test4_Player1, test4_Player2));
