function selectt(opt) {
    let ch = Math.floor(Math.random() * 3);
    let choices = ["p", "k", "n"];
    let computerChoice = choices[ch];

    let result;
    if (opt === computerChoice) {
        result = "It's a tie!";
        document.getElementById("res").style.color='orange'
    } else if ((opt === "n" && computerChoice === "p") ||
               (opt === "p" && computerChoice === "k") ||
               (opt === "k" && computerChoice === "n")) {
        result = "You win!";
        document.getElementById("res").style.color='green'
    } else {
        result = "Computer wins!";
        document.getElementById("res").style.color='red'
    }
    if (opt=='n') {
        opt="scissors"
    }
    if (opt=='k') {
        opt="rock"
    }
    if (opt=='p') {
        opt="paper"
    }

    if (computerChoice=='n') {
        computerChoice="scissors"
    }
    if (computerChoice=='k') {
        computerChoice="rock"
    }
    if (computerChoice=='p') {
        computerChoice="paper"
    }
    document.getElementById("res").innerHTML = `You chose ${opt}, computer chose ${computerChoice}. ${result}`;
    
}
