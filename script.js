function darkmode() {
    document.body.classList.toggle("dark-mode")
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0; 


    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const playerOption = [rockBtn,paperBtn,scissorBtn];
        const computerOption = ['✊', '🖐️', '✌️'];

        playerOption.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Move Left: ${10-moves}`;
                console.log(moves)

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOption[choiceNumber];
                console.log(computerChoice);
                // Function to check who wins
                winner(this.innerText,computerChoice);
                if(moves == 10) {
                    gameOver(playerOption, movesLeft);
                }
            })
        })
    }
    //function winner
    const winner = (player, computer) => {
        const result = document.querySelector(".result");
        const playerScoreBoard = document.querySelector(".p-count");
        const computerScoreBoard = document.querySelector(".c-count");
        const background = document.querySelector('.container__middle');
        const PCvai = document.querySelector('.PC');
        const Youvai = document.querySelector('.You');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        PCvai.textContent = `${computer}`;
        Youvai.textContent = `${player}`;
        if(player == computer) {
            result.textContent = 'Tie'
            background.style.backgroundColor = "#D1D1D1";
            
        }
        else if(player == '✊') {
            if(computer == '🖐️') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                background.style.backgroundColor = "#C74B50";
                
            } else {
                result.textContent = 'player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                background.style.backgroundColor = "#39AEA9";
            }
        }
        else if(player == '✌️') {
            if(computer == '✊') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                background.style.backgroundColor = "#C74B50";
            } else {
                result.textContent = 'player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                background.style.backgroundColor = "#39AEA9";
            }
        }
        else if(player == '🖐️') {
            if(computer == '🖐️') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                background.style.backgroundColor = "#C74B50";
            } else {
                result.textContent = 'player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                background.style.backgroundColor = "#39AEA9";
            }
        }
    }
    //function game over
    const gameOver = (playerOption, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        const background = document.querySelector('.container__middle');
        playerOption.forEach(option => {
            option.style.display = 'none';
        })
        chooseMove,innerText = "Game Over!!"
        movesLeft.style.display = 'none';

        
        if(playerScore > computerScore){
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        background.style.backgroundColor = "whitesmoke";
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'inline-block'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    playGame();
}

game();