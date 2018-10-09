$(document).ready(function () {
    //Set your variables...Adjust the values later.

    $("#message").html("Please choose your character!");


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
    var playerChosen = false;
    var defenderChosen = false;

    //startGame();
    //splayerChoice();
    //         $('.gallerythumbnail').on('click', function() {
    //         var img = $('<img />', {src    : this.src,
    //                             'class': 'fullImage'
    //               });

    //         $('.showimagediv').html(img).show();
    // });
    $("#message").html("Choose your player!");

    console.log(playerChosen);

    //Set function to choose player and put player's icon into the ring in the challenger position.



    $(".benchCardA").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text">Alpha</p><p class="card-text" id="hpA">HP:' + hpA + '</p>');
            $("#message").html("Prepare to battle!");
            defenderChosen = true;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text">Alpha</p><p class="card-text" id="hpA">HP:' + hpA + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;

        } else {
return;
        }

    });
    $(".benchCardB").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text">Beta</p><p class="card-text" id="hpB">HP:' + hpB + '</p>');
            $("#message").html("Prepare to battle!");
            defenderChosen = true;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text">Beta</p><p class="card-text" id="hpB">HP:' + hpB + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;

        } else {
            return;
        }

    });
    $(".benchCardC").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text">Cappa</p><p class="card-text" id="hpC">HP:' + hpC + '</p>');
            $("#message").html("Prepare to battle!");
            defenderChosen = true;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text">Cappa</p><p class="card-text" id="hpC">HP:' + hpC + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;

        } else {
            return;
                }

    });
    $(".benchCardD").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".defenderBody").append('<p class="card-text">Delta</p><p class="card-text" id="hpA">HP:' + hpD + '</p>');
            $("#message").html("Prepare to battle!");
            defenderChosen = true;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="a">');
            $(".challengerBody").append('<p class="card-text">Delta</p><p class="card-text" id="hpA">HP:' + hpD + '</p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;

        } else {
            return;
        }

    });

    //     //After player is chosen, player chooses opponent. Repeat functions but for defender position.
    // }

});






        //$elect the player from challenger position by saying 'when attack button is pressed, remove 10 from defender's
       //hp, then after something, maybe a second or maybe after user clicks something, take the defender's attack point value
        //away from challenger. Allow user to click button to attack until his/her hp == 0; If hp==0, return, you lose.
        // if defender hp ==0, hide defender, message user to choose another player.















