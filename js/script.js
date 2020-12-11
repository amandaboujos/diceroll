// This imports the custom function getRandomDiceRoll(), written in the file "dice.js" (go see!), so it can be used in this file to generate a random number. You can ignore this statement.



// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"



// 2) Use the resulting number to update the image you created in HTML
//    Ask yourself questions like: 
//       - "What about an <img> can I change, given that its an element?"
//       - "How would the resulting number above affect which image is shown?"



// 3) Also use the number to update the label "You rolled: #" (replacing # with the roll)

let theRollMsg = document.querySelector(`.msg`)
let theDiceFace = document.querySelector(`.face`)

function rollTheDice() {

let getDiceRoll = getRandomDiceRoll()

theRollMsg.textContent = `You rolled: ${getDiceRoll}`

theDiceFace.setAttribute(`alt`, `Rolled ${getDiceRoll}`)
theDiceFace.setAttribute(`src`, `img/dice${getDiceRoll}.svg`)

return getDiceRoll
}








