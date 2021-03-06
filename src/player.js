//import {Game} from './src/game.js';
export class Player {


    // Player's move
    attack(game, flag) {
        let attCard = game.playerDeck.shift();
        game.attackCard.src="images/" + attCard[0] + "_of_" + attCard[1] + ".png";
        game.computerScore.innerHTML = game.computerDeck.length;
        game.playerScore.innerHTML = game.playerDeck.length;
        let rang = attCard[0];
        let count = 0;
        for (let i = 2; i >= 0; i--) {
            console.log(game.computerHand[i][0])
            if(i===2) {
                game.computerCard1.addEventListener("click", function() {
                    if(flag === 0) {
                        if(game.computerHand[i][0] < rang) {
                            game.playerDeck.push(game.computerCard1);
                            count++;
                            alert("First card is added to the deck");
                            //game.computerHand.splice(2,1);
                        } else {
                            game.computerDeck.push(game.attackCard);
                            flag = 1;
                            alert("Your card is added to the computer deck");
                        }
                        game.computerScore.innerHTML = game.computerDeck.length;
                        game.playerScore.innerHTML = game.playerDeck.length;
                    }
                }, {once: true});
            } else if(i===1) {
                game.computerCard2.addEventListener("click", function() {
                    if(flag === 0) {
                        if(game.computerHand[i][0] < rang) {
                            game.playerDeck.push(game.computerCard2);
                            count++;
                            alert("Second card is added to the deck");
                            //game.playerHand.splice(1,1);
                        } else {
                            game.computerDeck.push(game.attackCard);
                            flag = 1;
                            alert("Your card is added to the computer deck");
                        }
                        game.computerScore.innerHTML = game.computerDeck.length;
                        game.playerScore.innerHTML = game.playerDeck.length;
                    }
                }, {once: true});
            } else if( i===0){
                game.computerCard3.addEventListener("click", function() {
                    if(flag === 0) {
                        if(game.computerHand[i][0] < rang) {
                            game.playerDeck.push(game.computerCard3);
                            count++;
                            alert("Third card is added to the deck");
                            //game.playerHand.splice(0,1);
                        } else {
                            game.computerDeck.push(game.attackCard);
                            flag = 1;
                            alert("Your card is added to the computer deck");
                        }
                        game.computerScore.innerHTML = game.computerDeck.length;
                        game.playerScore.innerHTML = game.playerDeck.length;
                    }
                }, {once: true});
            }
            // while(game.computerHand.length > 0) {
            //     game.computerDeck.push(game.computerHand.shift());
            // }
        }
        if(count === 3) {
            game.computerRedCards++;
            alert("The opponent was given a penalty point")
        }
        return 1;
    }
}