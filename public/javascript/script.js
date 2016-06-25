/*
  Image sources:
  "circle.png" -> https://www.thinglink.com/scene/487249257363931138
  "cork-wallet.png" -> http://subtlepatterns.com/cork-wallet/
  "cross.png" -> http://www.clker.com/clipart-28652.html
*/

var divs = document.querySelectorAll(".col-xs-4");
var i = 0;
var turn = true;
var winner = 0;

var playerOne = { id:"1" };
var playerTwo = { id:"2" };

var game = [3];

game[0] = [3];
game[1] = [3];
game[2] = [3];

game[0][0] = "";
game[0][1] = "";
game[0][2] = "";

game[1][0] = "";
game[1][1] = "";
game[1][2] = "";

game[2][0] = "";
game[2][1] = "";
game[2][2] = "";


for(i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function(e) {
    var targetId = "#" + e.target.id;

    var element = document.querySelector(targetId);

    var child = element.childNodes[1];

    var imageSource = (turn) ? "cross.png" : "circle.png";

    var classList = child.setAttribute("src", imageSource);

    console.log(RegisterGameBoard(e.target.id+""));

    turn = !turn;

    if (CheckForWin()) {
      alert("Player " + winner + " won!");
    }

  });
}

function RegisterGameBoard(targetName) {
  switch (targetName) {
    case "topLeft":
      return game[0][0] = (turn) ? playerOne.id : playerTwo.id;

    case "topMiddle":
      return game[0][1] = (turn) ? playerOne.id : playerTwo.id;

    case "topRight":
      return game[0][2] = (turn) ? playerOne.id : playerTwo.id;

    case "middleLeft":
      return game[1][0] = (turn) ? playerOne.id : playerTwo.id;

    case "middleMiddle":
      return game[1][1] = (turn) ? playerOne.id : playerTwo.id;

    case "middleRight":
      return game[1][2] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomLeft":
      return game[2][0] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomMiddle":
      return game[2][1] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomRight":
      return game[2][2] = (turn) ? playerOne.id : playerTwo.id;

    default:
      return "";
  }
}

//string
//combine
//convert integer
//compare strings

function CheckForWin() {
  return CheckColumns() || CheckRows() || CheckDiagonals();
}

function CheckColumns() {
  var i = 0;
  for (i = 0; i < 3; i++) {

    if (game[0][i].concat(game[1][i]).concat(game[2][i]) === "111" || game[0][i].concat(game[1][i]).concat(game[2][i]) === "222") {
      winner = game[0][i];
      return true;
    }
  }
  return false;
}

function CheckRows() {
  var i = 0;

  for (i = 0; i < 3; i++) {
    console.log("game["+ i + "][0]: " + game[i][0] + " game["+ i + "][1]: " + game[i][1] + " game["+ i + "][2]: " + game[i][2]);
    if (game[i][0].concat(game[i][1]).concat(game[i][2]) === "111" || game[i][0].concat(game[i][1]).concat(game[i][2]) === "222") {
      winner = game[i][0];
      return true;
    }
  }
  return false;
}

function CheckDiagonals() {

  /*
  game[0][0]
  game[1][1]
  game[2][2]
  */

  if ((game[0][0].concat(game[1][1]).concat(game[2][2]) === "111")
  || ((game[0][0].concat(game[1][1]).concat(game[2][2])) === "222")) {
        winner = game[0][0];
        return true;
  }

  /*
  game[0][2]
  game[1][1]
  game[2][0]
  */

  if (  (game[0][2].concat(game[1][1]).concat(game[2][0]) === "111")
    || ((game[0][2] && game[1][1] && game[2][0]) === "222")) {
    winner = game[0][2];
    return true;
  }
  return false;
}
