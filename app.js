let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msgWin=document.querySelector("#msg");

const finaluserScore=document.querySelector("#userScore");
const finalcompScore=document.querySelector("#compScore");


const showWinner=(userWin,userchoice,computerChoice)=>{
    if(userWin)
    {
        msgWin.innerText=`Yeh ! You Win,Your ${userchoice} beats ${computerChoice}`;
        msgWin.style.backgroundColor="green";
        userScore++;
        finaluserScore.innerText=userScore;
    }
    else{
        msgWin.innerText=`Oops ! You lose, ${computerChoice} beats your ${userchoice}`
        msgWin.style.backgroundColor="red"
        comScore++;
        finalcompScore.innerText = comScore;
    }
}


const playGame=(userchoice)=>{
    //gen com choice
    const computerChoice=compChoice();

    if(userchoice===computerChoice)
        {
            drawGame()
        }
        else{
           let userWin=true;
           if(userchoice==="rock"){
            userWin = computerChoice==="paper" ? false : true;
           } 
           else if(userchoice === "paper")
           {
             userWin = computerChoice === "scissors" ? false :true;
           }
           else
           userWin = computerChoice === "rock" ? false : true;
           showWinner(userWin,userchoice,computerChoice);
        }

        
}

const drawGame=()=>{
    msgWin.innerText="Game was Draw. Play Again"
    msgWin.style.backgroundColor="#b84848"
}


///Comp choice
const compChoice=()=>{
    const selectChoices=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return selectChoices[randomIdx];
}


///User Choice 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
       playGame(userchoice);
    });
}) 


