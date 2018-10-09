$(document).ready(function () {
    //Set your variables...Adjust the values later.

    $("#message").html("Please choose your character!");
    //Sets all variables to start the game. Each card has its own hp, attack and counter attack.
    //these will be called when they are in the challenger position and defender position.
    //I have to figure out how to reference the players that were chosen.
    //Use objects for players

    var playerA = {
        hp: 200,
        attack: 10,
        attackCon: 10,
        counter: 10,
    }
    var playerB = {
        hp: 200,
        attack: 10,
        counter: 10,
    }
    var playerC = {
        hp: 200,
        attack: 10,
        counter: 10,
    }
    var playerD = {
        hp: 200,
        attack: 10,
        counter: 10,
    }
    console.log(playerB.hp - playerA.attack);

    var challenger;
    var defender;
    var playerChosen = false;
    var defenderChosen = false;
    var wins = 0;
    var losses = 0;




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
            $(".defenderBody").append('<p class="card-text name">Alpha</p><p class="card-text hp">HP:<span id="hpA">' + playerA.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "a";


            console.log("defender: " + defender);
        }
        //the bottom of each function sends player to CHALLENGER spot.
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Alpha</p><p class="card-text hp">HP:<span id="hpA">' + playerA.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "a";
            //console.log("challenger: " + challenger);
            //this line stops player from doing anything to cards if both above conditions were met.
        } else {
            return;
        }
    });
    $(".benchCardB").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Beta</p><p class="card-text hp">HP:<span id="hpB">' + playerB.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "b";
            //console.log("defender: " + defender);

        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Beta</p><p class="card-tex hp">HP:<span id="hpB">' + playerB.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "b";
            //console.log("challenger: " + challenger);

        } else {
            return;
        }
    });


    $(".benchCardC").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Cappa</p><p class="card-text hp" id="hpC">HP:' + playerC.hp + '</p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "c";
            //console.log("defender: " + defender);
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Cappa</p><p class="card-text hp" id="hpC">HP:' + playerC.hp + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "c";
            //console.log("challenger: " + challenger);

        } else {
            return;
        }

    });
    $(".benchCardD").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text name">Delta</p><p class="card-text hp" id="hpA">HP:' + playerD.hp + '</p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = "d";
            //console.log("defender: " + defender);
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text name">Delta</p><p class="card-text hp" id="hpA">HP:' + playerD.hp + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = "d";
            //console.log("challenger: " + challenger);

        } else {
            return;
        }
    });
    //This function calls on the two characters. It says if a challenger and a defender were chosen and the player
    //hits the A key (capital or lower) it will do what we tell it to do.
    $(document).keyup(function (event) {
        //the letter 'a' is 65 on the keyboard, so this says if the event (or key) is 'a', do this.
        if ((event.which == 65) && (playerChosen) && (defenderChosen)) {
            //I'm sure there's a much more concise way to do this with objects but I can't figure it out right now.
            //This matches challenger to defender and when A is hit, take attack points away from defender, then
            //take that plus itself every time (first 10, then 20, then 30, etc.) then wait for a fraction of a sec
            //and do the same to challenger but only the attack points every time.


            if ((challenger == "a") &&
                (defender == "b") &&
                (playerA.hp > 0) &&
                (playerB.hp > 0)) {
                    return;
                playerB.hp -= (playerA.attack);
                playerA.attack += playerA.attackCon; //the con version is always worth the original value.
                $("#hpB").html(playerB.hp);
                setTimeout(function () {
                    $("#message").html("Player B fights back!");
                }, 1000); //waits 1000 miliseconds (1 sec)
                playerA.hp -= playerB.attack;
                setTimeout(function () {
                    $("#hpA").html(playerA.hp);
                }, 2000);
            } else {
                return;
            }
        }
        if ((challenger == "a") && (defender == "c")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "a") && (defender == "d")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "b") && (defender == "a")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "b") && (defender == "c")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "b") && (defender == "d")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "c") && (defender == "a")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "c") && (defender == "b")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "c") && (defender == "d")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "d") && (defender == "a")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "d") && (defender == "b")) {
            score = (player.hp - player.attack)
        }
        if ((challenger == "d") && (defender == "c")) {
            score = (player.hp - player.attack)
        }



        //     console.log("slow-jam " + challenger);
        //     console.log("funky " + defender);
        //     } else {
        //         console.log("nope")
        //     }
        // });





        //     
        // }

    });



});


        //$elect the player from challenger position by saying 'when attack button is pressed, remove 10 from defender's
       //hp, then after something, maybe a second or maybe after user clicks something, take the defender's attack point value
        //away from challenger. Allow user to click button to attack until his/her hp == 0; If hp==0, return, you lose.
        // if defender hp ==0, hide defender, message user to choose another player.















