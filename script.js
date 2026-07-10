let userscore=0;
let compsscore=0;


const resultdiv = document.getElementById("result");
const scorediv = document.getElementById("score");

const stonebtn = document.getElementById("stonebtn");
const paperbtn = document.getElementById("paperbtn");
const scissorbtn = document.getElementById("scissorbtn");

function stone(){
    return play ("stone")
}
function paper(){
    return play ("paper")
}
function scissor(){
    return play ("scissor")
}



stonebtn.addEventListener("click", stone);
paperbtn.addEventListener("click", paper);
scissorbtn.addEventListener("click", scissor);

function play(userchoice){

    let compChoice;
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum === 0){
        compChoice = "stone";
    }
    else if(randomNum === 1){
        compChoice="paper";
    }
    else{
        compChoice="scissor";
    }
    if(userchoice===compChoice){

        resultdiv.textContent="match Draw! you chose" + userchoice + ", computer chose" + compChoice;
    }
        else if(
         (userchoice ==="stone" && compChoice==="scissor")  ||
          (userchoice ==="paper" && compChoice==="stone")  ||
           (userchoice ==="scissor" && compChoice==="paper") 
        ){
            userscore++;
            resultdiv.textContent = "You Win! you chose" + userchoice + ",computer chose" + compChoice;}
       else {
        resultdiv.textContent="you lose! you chose" + userchoice +",computer chose" + compChoice;
     compsscore++;
    }
    scorediv.textContent="you:" + userscore + " |computer :" + compsscore;
}

    
