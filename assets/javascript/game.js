$(document).ready(); {




    //The player clicks a crystal

    //each crystal has a random value each game

    //There will be a random "target number" the player has to get to each round. 

    //The players current number will be changing on the html

    //If the players score goes over the random value, if else you win if the user value was === to the target number

    //once the round has ended, everything except the wins/losses div should reset.
    function startgame() {
        var targetNum = Math.floor(Math.random() * 120) + 20;
        var imgOne = Math.floor(Math.random() * 12) + 1;
        var imgTwo = Math.floor(Math.random() * 12) + 1;
        var imgThree = Math.floor(Math.random() * 12) + 1;
        var playerScore = 0;
        $("#imgOne") = imgOne;
        $("#imgTwo") = imgTwo;
        $("#imgThree") = imgThree;

    }

    $(".pictures").click = function () {

        playerScore = $((".pictures").this);
        $("#scoreNum").append(playerScore);
        console.log(playerScore);


    }
}