// globally define the player and computer points for counting
let playerPoints = 0;
let computerPoints = 0;

// Grab the button element and its child img
const RPS = document.querySelectorAll("button img");

// Loop through the array and add an event listener to each button
for (const item of RPS) {
    item.addEventListener('click', () => {
        calculateWin(item);
    });
}

// Calculate the player and computer choices and see who won mathematically
function calculateWin(item) {
    // Store the numerical value for each choice
    const userChoice = Number(item.getAttribute("alt"));
    const computerChoice = Math.floor(Math.random() * 3);

    // Dictionary to convert the number to a string for debugging in console.log()
    const Choices = {0 : "Rock", 1 : "Paper", 2 : "Scissors"};

    // console.log() out who picked what for debug purposes only - not needed in the actual game
    console.log(`User has selected: ${Choices[userChoice]}`);
    console.log(`Computer has selected: ${Choices[computerChoice]}`);

    // Calculate the actual win condition mathematically and increase points
    if ((userChoice + 1) % 3 === computerChoice) {
        alert(`The computer has won!`);
        computerPoints++;
        document.querySelector("#computerPoints").textContent = "Computer Total: " + computerPoints;
    } else if (userChoice === computerChoice) {
        alert(`You have tied!`);
    } else {
        alert("Player has won!");
        playerPoints++;
        document.querySelector("#playerPoints").textContent = "Player Total: " + playerPoints;
    }
}


