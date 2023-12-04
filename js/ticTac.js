// initalize each it should:
// 1. check if game-section is empty or not. if it is not and it's not tic tac toe, an alert box should come up saying do you want to leave your game and go to that game. yes or confirm.
//2. It should create create a p tag, saying what game it is.
//3. It should create a div where the gameboard will be populated.
//4. It should create a button start that will start the game through a function not yet created.
//5. It should create a button that resets to the main screen with only the select boxes.

// selectors

const gameSection = document.getElementById("game-section");

export function intTic() {
  console.log("starting Tic");
  // if another game is loaded, create alert box
  const newP = document.createElement("p");
  newP.innerText = "Now Playing Tic Tac Toe";
  gameSection.append(newP);
}
