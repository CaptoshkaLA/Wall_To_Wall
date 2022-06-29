export class Game {

    values = [0, 1, 2, 3, 4];
    suits = ["clubs", "diamonds", "hearts", "spades"];
    cards = [];
    playerHand = [];
    computerHand = [];
    playerDeck = [];
    computerDeck = [];

    playerWon = false;
    computerWon = false;

    playerRedCards = 0;
    computerRedCards = 0;

    actionDiv = document.getElementById("action");
    playerScore = document.getElementById("player_score");
    computerScore = document.getElementById("computer_score");
    playerCard1 = document.getElementById("playerCard1");
    computerCard1 = document.getElementById("computerCard1");
    playerCard2 = document.getElementById("playerCard2");
    computerCard2 = document.getElementById("computerCard2");
    playerCard3 = document.getElementById("playerCard3");
    computerCard3 = document.getElementById("computerCard3");

    attackCard = document.getElementById("attack_card");

    Game() {}

    // Building an array of all kinds of playing cards
    build() {
        for (let i = 0; i < this.values.length; i++){
            for (let j = 0; j < this.suits.length; j++) {
                this.cards.push([this.values[i], this.suits[j]]);
            }
        }
    }

    // Shuffle the array based on the Fisher — Yates Shuffle algorithm
    shuffle() {
        let m = this.cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this.cards;
    }

    // Auxiliary function
    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    // We determine who will walk on this move
    whoGoesFirst() {
        let randInt = this.randomInteger(1,10);
        if(randInt > 5) {
            alert("This is your move")
            return 0;
        } else {
            alert("Now its computer time!");
            return 1;
        }
    }

    // Fill the players' hands with randomly shuffled cards
    gameStart() {
        this.actionDiv.innerHTML = "FLIP!";
        this.build();
        this.shuffle();
        this.playerDeck = this.cards;
        this.shuffle();
        this.computerDeck = this.cards;
    }

    tableInitialize() {
        this.actionDiv.style.height = "40px";
        this.actionDiv.innerHTML = "FLIP!";

        this.playerHand.push(this.playerDeck.shift());
        this.playerHand.push(this.playerDeck.shift());
        this.playerHand.push(this.playerDeck.shift());

        this.computerHand.push(this.computerDeck.shift());
        this.computerHand.push(this.computerDeck.shift());
        this.computerHand.push(this.computerDeck.shift());

        this.playerCard1.src="images/" + this.playerHand[this.playerHand.length-1][0] + "_of_" + this.playerHand[this.playerHand.length-1][1] + ".png";
        this.playerCard2.src="images/" + this.playerHand[this.playerHand.length-2][0] + "_of_" + this.playerHand[this.playerHand.length-2][1] + ".png";
        this.playerCard3.src="images/" + this.playerHand[this.playerHand.length-3][0] + "_of_" + this.playerHand[this.playerHand.length-3][1] + ".png";

        this.computerCard1.src="images/" + this.computerHand[this.computerHand.length-1][0] + "_of_" + this.computerHand[this.computerHand.length-1][1] + ".png";
        this.computerCard2.src="images/" + this.computerHand[this.computerHand.length-2][0] + "_of_" + this.computerHand[this.computerHand.length-2][1] + ".png";
        this.computerCard3.src="images/" + this.computerHand[this.computerHand.length-3][0] + "_of_" + this.computerHand[this.computerHand.length-3][1] + ".png";
        this.computerScore.innerHTML = this.computerDeck.length;
        this.playerScore.innerHTML = this.playerDeck.length;
    }

    defeat() {
        if(this.playerRedCards === 3) {
            alert("You've lost");
            return 1;
        }
        if(this.computerRedCards === 3) {
            alert("You beat the computer");
            return 1;
        }
        return 0;
    }
}
