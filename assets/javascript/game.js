$(document).ready(function () {
    //Set your variables...Adjust the values later.

    $("#message").html("Please choose your character!");
//Sets all variables to start the game. Each card has its own hp, attack and counter attack.
//these will be called when they are in the challenger position and defender position.
//I have to figure out how to reference the players that were chosen.

    var hpA = 100;
    var attackA = 10;
    var counterA = 10;

    var hpB = 150;
    var attackB = 10;
    var counterB = 10;

    var hpC = 300;
    var attackC = 10;
    var counterC = 10;

    var hpD = 500;
    var attackD = 10;
    var counterD = 10;

    var challenger;
    var defender;
    var playerChosen = false;
    var defenderChosen = false;
    

    $("#message").html("Choose your player!");

    //Set function to choose player and put player's icon into the ring in the challenger position.
    //After player is chosen, player chooses opponent. Repeat functions but for defender position.
    //These functions will say 'if player was chosen, send to defender position, if not, send to 
    //challenger position. If neither, don't do anything.
//function myBattle() {
    $(".benchCardA").click(function () {
        //the top of each function sends player to DEFENDER spot. This function is for A, next for B and so on.
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Alpha</p><p class="card-text hp" id="hpA">HP:' + hpA + '</p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "a";
            
        console.log("defender: " + defender);
        }
        //the bottom of each function sends player to CHALLENGER spot.
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Alpha</p><p class="card-text hp" id="hpA">HP:' + hpA + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "a";
            console.log("challenger: " + challenger);
        //this line stops player from doing anything to cards if both above conditions were met.
        } else {
            return;
        }
    });
    $(".benchCardB").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Beta</p><p class="card-text" hp id="hpB">HP:' + hpB + '</p>'); 
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "b";
            console.log("defender: " + defender);
            
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Beta</p><p class="card-text" hp id="hpB">HP:' + hpB + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "b";
            console.log("challenger: " + challenger);

        } else {
            return;
        }
    });
    

    $(".benchCardC").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Cappa</p><p class="card-text hp" id="hpC">HP:' + hpC + '</p>');   
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "c";
            console.log("defender: " + defender);
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Cappa</p><p class="card-text hp" id="hpC">HP:' + hpC + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "c";
            console.log("challenger: " + challenger);

        } else {
            return;
        }

    });
    $(".benchCardD").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Delta</p><p class="card-text hp" id="hpA">HP:' + hpD + '</p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "d";
            console.log("defender: " + defender);
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Delta</p><p class="card-text hp" id="hpA">HP:' + hpD + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "d";
            console.log("challenger: " + challenger);

        } else {
            return;
        }
        
    });
    //console.log("aaa " + defender);

//myBattle();

    $(document).keyup(function (event) {
        if ((event.which == 65) && (playerChosen == true) && (defenderChosen == true)){
        
        
        
        
        console.log("slow-jam " + challenger);
        console.log("funky " + defender);
        } else {
            console.log("nope")
        }
    });



  

    //     
    // }

});






        //$elect the player from challenger position by saying 'when attack button is pressed, remove 10 from defender's
       //hp, then after something, maybe a second or maybe after user clicks something, take the defender's attack point value
        //away from challenger. Allow user to click button to attack until his/her hp == 0; If hp==0, return, you lose.
        // if defender hp ==0, hide defender, message user to choose another player.















