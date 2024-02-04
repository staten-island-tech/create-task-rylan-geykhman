const d6 = [1,2,3,4,5,6]

const DOMSelectors = {
  container: document.querySelector(".container"),
  input: document.querySelector(".input"),
  values: document.querySelector(".values"),
  submit: document.querySelector("#submitButton"),
}

const allRolls = [];

function rollDice(){
  let random1 = Math.floor(Math.random() * d6.length);
  let random2 = Math.floor(Math.random() * d6.length);
  let dice1 = d6[random1];
  let dice2 = d6[random2];
  let roll = dice1 + dice2;
  return{
    roll: roll,
    dice1: dice1,
    dice2: dice2
  };
};

DOMSelectors.submit.addEventListener("click", function(event){
  event.preventDefault()
  DOMSelectors.container.innerHTML = '';
  let times = DOMSelectors.input.value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `You want to roll ${times} time(s)!`);
  for(let i = 0; i < times; i++){
    let result = rollDice();
    allRolls.push(result.roll);
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h2>You rolled ${result.roll}!</h2>`
    )
    if(result.dice1 === result.dice2){
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<h3>You rolled a double!</h3>`
      )
    }
  }
  DOMSelectors.values.innerHTML = 'All of your previous rolls:';
  allRolls.forEach((roll)=>{
    DOMSelectors.values.insertAdjacentHTML(
      "beforeend",
      `<h3>${roll}</h3>`
    )
  })
})
