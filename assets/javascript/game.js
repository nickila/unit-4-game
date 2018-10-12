$(document).ready(function () {
    //     var canClick = true;

    // $("#message").on("click", function() {
    // if (canClick) {
    //     canClick = false;
    //     doThings();
    //     setTimeout(function(){
    //         canClick = true;
    //     }, 5000);
    // }
    // });

    // function doThings(){
    //     console.log("CLICK");
    // }





    //function resetVars() {
    var playerA = {
        hp: 400,
        attack: 10,
        attackCon: 10,
        counter: 10,
    }
    var playerB = {
        hp: 300,
        attack: 10,
        attackCon: 10,
        counter: 10,
    }
    var playerC = {
        hp: 200,
        attack: 10,
        attackCon: 10,
        counter: 10,
    }
    var playerD = {
        hp: 100,
        attack: 10,
        attackCon: 10,
        counter: 10,
    }
    var challenger = {};
    var defender = {};
    var playerChosen = false;
    var defenderChosen = false;
    var points = 0;
    var wins = 0;
    var losses = 0;
    var canClick = true;
    //var busy = false;

    $("#hpA").html("HP:" + playerA.hp);
    $("#hpB").html("HP:" + playerB.hp);
    $("#hpC").html("HP:" + playerC.hp);
    $("#hpD").html("HP:" + playerD.hp);

    function resetAll() {
        $(".benchCardA").show();
        $(".benchCardB").show();
        $(".benchCardC").show();
        $(".benchCardD").show();
        $(".challengerCard").html('<div class="card-body challengerBody"></div>');
        playerA = {
            hp: 400,
            attack: 10,
            attackCon: 10,
            counter: 10,
            pic2: ('<img class="card-img-top" src="assets/images/a2.png" alt="Card image cap" value="a">'),
        }
        playerB = {
            hp: 300,
            attack: 10,
            attackCon: 10,
            counter: 10,
        }
        playerC = {
            hp: 200,
            attack: 10,
            attackCon: 10,
            counter: 10,
        }
        playerD = {
            hp: 100,
            attack: 10,
            attackCon: 10,
            counter: 10,
        }
        challenger = {};
        defender = {};
        playerChosen = false;
        defenderChosen = false;
        points = 0;
        busy = false;
        // resetVars();
        var image;
        
    };





    $("#message").html("Please choose your character!");
    function change() {
        image = document.getElementById('imgSwitch');
        if (challenger == playerA) {
            image.src = "assets/images/a2.png";
            setTimeout(function(){
           image.src = "assets/images/a.png";
            }, 500);
        }
        if (challenger == playerB) {
            image.src = "assets/images/b2.png"
            setTimeout(function(){
                image.src = "assets/images/b.png";
                 }, 500);
        }
        if (challenger == playerC) {
            image.src = "assets/images/c2.png";
            setTimeout(function(){
                image.src = "assets/images/c.png";
                 }, 500);
        }
        if (challenger == playerD) {
            image.src = "assets/images/d2.png"
            setTimeout(function(){
                image.src = "assets/images/d.png";
                 }, 500);
        }
       
    
    }

    $(document).keyup(function (event) {
        if ((event.which == 65) && (playerChosen) && (defenderChosen) && (canClick)) {
            canClick = false;
            addHp(challenger, defender);
        }
    });



    function addHp(challenger, defender) {


        if ((challenger.hp > 0) && (defender.hp > 0)) {
            // console.log(challenger.pic2);
            // setTimeout(function () {
            //     $(".challengerCard").html('<div class="card-body challengerBody"></div>');
            //     $(".challengerCard").text(challenger.pic2);
            //     }, 1000); //waits 1000 miliseconds (1 sec)
            defender.hp -= challenger.attack;
            challenger.attack += challenger.attackCon; //the con version is always worth the original value.
            challenger.hp -= defender.attack;
            setTimeout (function(){
                canClick = true;
                }, 1000);
            $(".challengerHp").html(challenger.hp);
            $(".defenderHp").html(defender.hp);
            console.log("chp: " + challenger.hp);
            console.log("dhp: " + defender.hp);
            change();
        }
        if ((challenger.hp > 0) && (defender.hp <= 0)) {
            $(".defenderCard").html('<div class="card-body defenderBody"></div>');
            defenderChosen = false;
            challenger.attack = 10;
            points++;
            console.log(points);
            if (points == 3) {
                wins++;
                resetAll();

                if (wins < 10) {
                    $("#wins").html("WINS:0" + wins);
                } else {
                    $("#wins").html("WINS:" + wins);
                }
            }
            else {
                return;
            }
            return;
        }
        else if ((challenger.hp <= 0) && (defender.hp > 0)) {
            $(".defenderCard").html('<div class="card-body defenderBody"></div>');
            $("#message").html("GAME OVER!");
            losses++
            resetAll();
            if (losses < 10) {
                $("#loss").html("LOSS:0" + losses);
            } else {
                $("#loss").html("LOSS:" + losses);
            }
            return;
        }
    }


    $(".benchCardA").click(function () {
        //the top of each function sends player to DEFENDER spot. This function is for A, next for B and so on.
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a" id="imgSwitch" onclick="change();">');
            $(".defenderBody").append('<p class="card-text name">Player A</p><p class="card-text hp">HP:<span class="defenderHp">' + playerA.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = playerA;
        }
        //the bottom of each function sends player to CHALLENGER spot.
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/a.png" alt="Card image cap" value="a" id="imgSwitch" onclick="change();">');
            $(".challengerBody").append('<p class="card-text name">Player A</p><p class="card-text hp">HP:<span class="challengerHp">' + playerA.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = playerA;
            //this line stops player from doing anything to cards if both above conditions were met.
        } else {
            return;
        }
    });
    $(".benchCardB").click(function () {
        //the top of each function sends player to DEFENDER spot. This function is for A, next for B and so on.
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="b" id="imgSwitch" onclick="change();">');
            $(".defenderBody").append('<p class="card-text name">Player B</p><p class="card-text hp">HP:<span class="defenderHp">' + playerB.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = playerB;
        }
        //the bottom of each function sends player to CHALLENGER spot.
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/b.png" alt="Card image cap" value="b" id="imgSwitch" onclick="change();">');
            $(".challengerBody").append('<p class="card-text name">Player B</p><p class="card-text hp">HP:<span class="challengerHp">' + playerB.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = playerB;
            //this line stops player from doing anything to cards if both above conditions were met.
        } else {
            return;
        }
    });


    $(".benchCardC").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="c" id="imgSwitch" onclick="change();">');
            $(".defenderBody").append('<p class="card-text name">Player C</p><p class="card-text hp">HP:<span class="defenderHp">' + playerC.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = playerC;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/c.png" alt="Card image cap" value="c" id="imgSwitch" onclick="change();">');
            $(".challengerBody").append('<p class="card-text name">Player C</p><p class="card-text hp">HP:<span class="challengerHp">' + playerC.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = playerC;
        } else {
            return;
        }
    });
    $(".benchCardD").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="d" id="imgSwitch" onclick="change();">');
            $(".defenderBody").append('<p class="card-text name">Player D</p><p class="card-text hp">HP:<span class="defenderHp">' + playerD.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>A</b> to attack!");
            defender = playerD;
        }
        if ((playerChosen == false) && (defenderChosen == false)) {
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/d.png" alt="Card image cap" value="d" id="imgSwitch" onclick="change();">');
            $(".challengerBody").append('<p class="card-text name">Player D</p><p class="card-text hp">HP:<span class="challengerHp">' + playerD.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = playerD;
        } else {
            return;
        }
    });


   





    //This function calls on the two characters. It says if a challenger and a defender were chosen and the player
    //hits the A key (capital or lower) it will do what we tell it to do.



});









    //         if ((playerA.hp > 0) && (playerB.hp > 0)) {
    //             if ((challenger == "a") && (defender == "b")) {

    //                 playerB.hp -= (playerA.attack);
    //                 playerA.attack += playerA.attackCon; //the con version is always worth the original value.
    //                 $("#hpB").html(playerB.hp);
    //                 setTimeout(function () {
    //                     $("#message").html("Player B fights back!");
    //                 }, 1000); //waits 1000 miliseconds (1 sec)
    //                 playerA.hp -= playerB.attack;
    //                 setTimeout(function () {
    //                     $("#hpA").html(playerA.hp);
    //                 }, 2000);
    //                 setTimeout(function () {
    //                     $("#message").html("Press <b>A</b> to attack!");
    //                 }, 2500);
    //             } else {
    //                 return;
    //             }
    //         }
    //         if ((playerA.hp > 0) && (playerB.hp <= 0)) {
    //             $("#message").html("YOU WIN!");
    //             setTimeout(function () {
    //                 $("#message").html("Fight another!");
    //                 //change character to red X or something.
    //             }, 1000);
    //             $(".defenderCard").html("");
    //             $(".defenderCard").append('<div class="card-body defenderBody">');
    //             defenderChosen = false;
    //             playerA.attack = 10;
    //             return;

    //         }
    //         else if ((playerA.hp <= 0) && (playerB.hp > 0)) {
    //             $("#message").html("GAME OVER!");
    //             return;
    //         }

    //         if ((playerA.hp > 0) && (playerB.hp > 0)) {
    //             if ((challenger == "a") && (defender == "c")) {

    //                 playerC.hp -= (playerA.attack);
    //                 playerA.attack += playerA.attackCon; //the con version is always worth the original value.
    //                 $("#hpC").html(playerB.hp);
    //                 setTimeout(function () {
    //                     $("#message").html("Player C fights back!");
    //                 }, 1000); //waits 1000 miliseconds (1 sec)
    //                 playerA.hp -= playerC.attack;
    //                 setTimeout(function () {
    //                     $("#hpA").html(playerA.hp);
    //                 }, 2000);
    //                 setTimeout(function () {
    //                     $("#message").html("Press <b>A</b> to attack!");
    //                 }, 2500);
    //             } else {
    //                 return;
    //             }
    //         }
    //         if ((playerA.hp > 0) && (playerC.hp <= 0)) {
    //             $("#message").html("YOU WIN!");
    //             setTimeout(function () {
    //                 $("#message").html("Fight another!");
    //                 //change character to red X or something.
    //             }, 1000);
    //             $(".defenderCard").html("");
    //             $(".defenderBody").html("");
    //             defenderChosen = false;
    //             return;
    //         }
    //         else if ((playerA.hp <= 0) && (playerC.hp > 0)) {
    //             $("#message").html("GAME OVER!");
    //             return;
    //         }


    //         if ((playerA.hp > 0) && (playerD.hp > 0)) {
    //             if ((challenger == "a") && (defender == "b")) {

    //                 playerD.hp -= (playerA.attack);
    //                 playerA.attack += playerA.attackCon; //the con version is always worth the original value.
    //                 $("#hpB").html(playerD.hp);
    //                 setTimeout(function () {
    //                     $("#message").html("Player B fights back!");
    //                 }, 1000); //waits 1000 miliseconds (1 sec)
    //                 playerA.hp -= playerD.attack;
    //                 setTimeout(function () {
    //                     $("#hpA").html(playerA.hp);
    //                 }, 2000);
    //                 setTimeout(function () {
    //                     $("#message").html("Press <b>A</b> to attack!");
    //                 }, 2500);
    //             } else {
    //                 return;
    //             }
    //         }
    //         if ((playerA.hp > 0) && (playerD.hp <= 0)) {
    //             $("#message").html("YOU WIN!");
    //             setTimeout(function () {
    //                 $("#message").html("Fight another!");
    //                 //change character to red X or something.
    //             }, 1000);
    //             $(".defenderCard").html("");
    //             $(".defenderBody").html("");
    //             defenderChosen = false;
    //             return;

    //         }
    //         else if ((playerA.hp <= 0) && (playerD.hp > 0)) {
    //             $("#message").html("GAME OVER!");
    //             return;
    //         }
    //     }
    // });
    // if ((challenger == "a") && (defender == "c")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "a") && (defender == "d")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "b") && (defender == "a")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "b") && (defender == "c")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "b") && (defender == "d")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "c") && (defender == "a")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "c") && (defender == "b")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "c") && (defender == "d")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "d") && (defender == "a")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "d") && (defender == "b")) {
    //     score = (player.hp - player.attack)
    // }
    // if ((challenger == "d") && (defender == "c")) {
    //     score = (player.hp - player.attack)
    // }



    //     console.log("slow-jam " + challenger);
    //     console.log("funky " + defender);
    //     } else {
    //         console.log("nope")
    //     }
    // });     




        //$elect the player from challenger position by saying 'when attack button is pressed, remove 10 from defender's
       //hp, then after something, maybe a second or maybe after user clicks something, take the defender's attack point value
        //away from challenger. Allow user to click button to attack until his/her hp == 0; If hp==0, return, you lose.
        // if defender hp ==0, hide defender, message user to choose another player.















