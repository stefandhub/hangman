
/*Creating an array of words, each word has a hint*/
class Word {
 constructor (word, hint) { 
  this.word = word;
  this.hint = hint;
}
}
const word1 = new Word ('cat', "It's not the best friend of a dog")
const word2 = new Word ('pizza', 'The favourite food of each Italian')
const word4 = new Word ('hangman', 'The name of this game')
const word5 = new Word ('tokyo', 'The Location of the Olimpyc Games 2020')
const word6 = new Word ('gandalf', 'The name of the grey sorcerer in "Lord of the rings"')
const word7 = new Word ('ferrari', "There is a black horse in it's logo")
const word8 = new Word ('summer', "The season after the spring")

const wordsArray = [word1, word2, word3, word4, word5, word6, word7, word8]
const displayWord = document.getElementById("word");

/*pick a random word from "wordsAr ray" and return it as the word to be guessed*/
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/images/hangman/hangman_2.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/images/hangman/hangman_3.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/images/hangman/hangman_4.png';

imgArray[3] = new Image();
imgArray[3].src = 'assets/images/hangman/hangman_5.png';


const input = document.getElementById("input");
let k = 1;
let correctCounter = 0;
const randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

function wordToGuess(){
 
  const wordCharacters = Array.from(randomWord.word);
  console.log(wordCharacters);

  for (i = 0; i < wordCharacters.length; i++) {
    const createSpace = document.createElement("span");
    createSpace.className = "word__character";
    document.getElementById("word").appendChild(createSpace);
    createSpace.innerHTML = "^";
  }

  const character = document.getElementsByClassName("word__character");

test(wordCharacters, input, character);
 }

function test(wordCharacters, input, character) {
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13){
    checkInput();
    input.value = "" }
  });


function checkInput(){
  if (wordCharacters.includes(input.value)){
      for (let j = 0; j < wordCharacters.length; j++) {
        if (input.value == wordCharacters[j]){
          correctCounter++;
          console.log(correctCounter);
          character[j].innerHTML = input.value;
         delete wordCharacters[j];
         console.log(wordCharacters);
          youWin(correctCounter, wordCharacters);

        }}} else {
          k++;
          document.getElementById("img").src = "/assets/images/hangman/hangman_" + k + ".png" ;
          youLost(displayWord, input);
          if (k == 4) {
            const hint = document.createElement("div");
            hint.className = "hint";
            hint.innerHTML = "Hint:" + "<br>" + randomWord.hint;
           document.getElementById("hangman__img").appendChild(hint);
          }
        }}}

const tryAgain = document.createElement("button");
tryAgain.className = "try__again";
tryAgain.innerHTML = "Try Again";
tryAgain.addEventListener("click", function reload(){location.reload()})

function youLost(displayWord, input) {
  if (k === 5) {
    displayWord.style.display = "none";
    document.getElementById("input__and__info").style.display = "none";
    const youLost = document.createElement("div");
    youLost.className = "you__lost";
    youLost.innerHTML = "Oh no..." + "<br>" + "You Lost!";
    document.getElementById("input__zone").appendChild(youLost)
    document.getElementById("input__zone").appendChild(tryAgain);

  }
}

function youWin(correctCounter, wordCharacters){
  if (correctCounter === wordCharacters.length) {
    document.getElementById("input__and__info").style.display = "none";
    const youLost = document.createElement("div");
    youLost.className = "you__lost";
    youLost.innerHTML = "Nice!" + "<br>" + "You Win!";
    document.getElementById("input__zone").appendChild(youLost);
    document.getElementById("input__zone").appendChild(tryAgain);
  }
}
wordToGuess();



