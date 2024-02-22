let userScore = 0;
let compScore = 0;
let draws = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");
const draw_Score = document.querySelector("#draw-score");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})
const genCompChoice = () => {
    const opt = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // 0, 1, 2
    return opt[randIdx];
}
const playGame = (userChoice) => {
    console.log("User choice- "+userChoice);
    // generate computer choice ->
    const compChoice = genCompChoice();
    console.log("Computer choice- "+compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper ->
            userWin = compChoice === "paper" ? false : true;    
        } else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "rock" ? true : false;
        } else if(userChoice === "scissors"){
            // rock paper ->
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
const showWinner = (userWin) => {
    if(userWin) {
        console.log("You win");
        msg.innerHTML = "You Win !"
        userScore++;
        user_Score.innerText = userScore;
        comp_Score.innerText = compScore; 
        draw_Score.innerText = draws;
    }
    else{
        console.log("You lose");
        msg.innerHTML = "You Lose";
        compScore++;
        user_Score.innerText = userScore;
        comp_Score.innerText = compScore;
        draw_Score.innerText = draws;
    } 
}
const drawGame = () => {
    console.log("Game was drawn.");
    msg.innerText = "Game Drawn";
    draws++;
    user_Score.innerText = userScore;
    comp_Score.innerText = compScore;
    draw_Score.innerText = draws;
}