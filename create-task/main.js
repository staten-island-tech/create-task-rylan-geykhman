import {d6} from './diceRolls';

const DOMSelectors = {
  container: document.querySelector(".container"),
  button: document.querySelector(".button"),
  text: document.querySelector(".text"),
  input: document.querySelector(".input"),
  values: document.querySelector(".values"),
  submit: document.querySelector("#submitButton"),
}

DOMSelectors.submit.addEventListener("click", function(event){
  event.preventDefault()
  let times = DOMSelectors.input.value;
  console.log("You want to roll", times, "time(s)!");
  for(let i = 0; i < times; i++){
    rollDice();
    if(dice1 === dice2){
      console.log("You rolled a double!")
    }
  }
})

function rollDice(){
  let random1 = Math.floor(Math.random() * d6.length);
  let random2 = Math.floor(Math.random() * d6.length);
  let dice1 = d6[random1].number;
  let dice2 = d6[random2].number;
  let roll = dice1 + dice2;
  console.log("You rolled a", roll, "!")
  console.log("The two numbers you rolled were", dice1, "and", dice2, ".")
  return(dice1, dice2);
};
