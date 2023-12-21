let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msge=document.querySelector("#msge");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
	let options=["rock","paper","scissors"];
	const randIndex=Math.floor(Math.random()*3);
	return options[randIndex];
}

const drawGame =()=>{
	console.log("Game was draw");
	msge.innerText="Game was draw. Play again.";
}

const showWinner =(userWin,userChoice,compChoice)=>{
	if(userWin){
		userScore++;
		userScorePara.innerText=userScore;
		console.log("you win");
		msge.innerText=`You win! your ${userChoice} beats ${compChoice}`;
		msge.style.backgroundColor="green";
	}
	else{
		compScore++
		compScorePara.innerText=compScore;
		console.log("you lose");
		msge.innerText=`You lose! ${compChoice} beats ${userChoice}`;
		msge.style.backgroundColor="red";
	}
}

const playGame=(userChoice)=>{
	console.log("user choice = ",userChoice);
	const compChoice=genCompChoice();
	console.log("comp choice = ",compChoice);
	if(userChoice===compChoice){
		drawGame();
	}
	else{
		let userWin=true;
		if(userChoice==="rock"){
			userWin= compChoice==="paper"? false:true;
		}
		else if(userChoice==="paper"){
			userWin= compChoice==="scissors"?false:true;
		}
		else{
			userWin= compChoice==="rock"?false:true;
		}
		showWinner(userWin,userChoice,compChoice);
	}
};

choices.forEach(
	(choice)=>{
		choice.addEventListener("click",()=>{
			const userChoice=choice.getAttribute("id");
			playGame(userChoice);
		});
	});