$(document).ready(); {




    //The player clicks a crystal

    //each crystal has a random value each game

    //There will be a random "target number" the player has to get to each round. 

    //The players current number will be changing on the html

    //If the players score goes over the random value, if else you win if the user value was === to the target number

    //once the round has ended, everything except the wins/losses div should reset.
    function startgame() {
        var targetNum = Math.floor(Math.random() * 120) + 20;

        var playerScore = 0;
        var wins = 0;
        var losses = 0;
        var counter = 0;

    }
    startgame();

    for (var i = 1; i < 2; i++) {
        var imgOne = Math.floor(Math.random() * 12) + 1;
        var imgTwo = Math.floor(Math.random() * 12) + 1;
        var imgThree = Math.floor(Math.random() * 12) + 1;

        var imageCrystal1 = $("<img>");
        var imageCrystal2 = $("<img>");
        var imageCrystal3 = $("<img>");

        imageCrystal1.addClass("crystal-image");
        imageCrystal2.addClass("crystal-image");
        imageCrystal3.addClass("crystal-image");
        imageCrystal1.attr("src", "https://gamepedia.cursecdn.com/feheroes_gamepedia_en/c/c3/Scarlet_Crystal.png?version=560e3ee719d44f4e219287ab681456aa");
        imageCrystal2.attr("src", "https://gamepedia.cursecdn.com/feheroes_gamepedia_en/thumb/0/01/Universal_Crystal.png/200px-Universal_Crystal.png?version=7817f30046e7a4bd75ccfaca26175020");
        imageCrystal3.attr("src", "https://gamepedia.cursecdn.com/paladins_gamepedia/thumb/a/a5/DailyReward_e.png/200px-DailyReward_e.png?version=9635fb7b3d8e131e75d9e21b824f9c0d");
        $("#crystals").append(imageCrystal1)
        $("#crystals").append(imageCrystal2)
        $("#crystals").append(imageCrystal3)
        imageCrystal1.attr("data-crystalvalue", imgOne);
        imageCrystal2.attr("data-crystalvalue", imgTwo);
        imageCrystal3.attr("data-crystalvalue", imgThree);

    }
    $(".crystal-image").click(function () {
        counter = 0;
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#randomNum").text(crystalValue);
        // var currentValue = (parseInt($("#randomNumber").text()));
        // var result = crystalValue + currentValue;
        // $("#randomNum").text(result);

    });
    $("#hiButton").click(function () {
        console.log("HI");
    });

    // $(".pictures").click = function(){
    //     console.log("Hello world");

    //     playerScore = $((".pictures").this);
    //     $("#scoreNum").append(playerScore);
    //     console.log(playerScore);


};
if (playerScore === targetNum) {
    alert("You Win!");
    wins++;

}
else {
    losses++;
    alert("You Lose");
    // $(".pictures").click = function () {
    //     console.log("Hello world");

    //     playerScore = $((".pictures").this);
    //     $("#scoreNum").append(playerScore);
    //     console.log(playerScore);
    //     
}