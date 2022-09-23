let name = prompt("Enter your name ");
console.log(`Welcome! ${name}`);
console.log("Let starts the Game \n");
let n = Math.random();
let num = Math.floor((n*100))+1;

function game(num){
    
let guess = prompt("Enter guessing number from 1-100 ");
guess = Number.parseInt(guess);
if(guess==num)
{
    console.log("Yo! You win the Game.");
  return 1;
}

else
{
    console.log("Oops! you are wrong\n");
    if(guess>num){
        console.log(`${guess} is greater than the number.`);
    }
    else {
        console.log(`${guess} is lesser than the number.`);
    }
    let yn = prompt("Do you want to play ? y/n ");
    if(yn=='y'){
      game(num);
    }
  else{
    console.log("you lose the game!");
  }
    
}


}

game(num)



