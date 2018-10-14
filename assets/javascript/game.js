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
        hp: 180,
        attack: 8,
        attackCon: 8,
        counter: 5,
    }
    var playerB = {
        hp: 160,
        attack: 7,
        attackCon: 7,
        counter: 6,
    }
    var playerC = {
        hp: 130,
        attack: 10,
        attackCon: 10,
        counter: 6,
    }
    var playerD = {
        hp: 150,
        attack: 6,
        attackCon: 6,
        counter: 8,
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
        $("#play-again").html("");
        $("#message").html("* PICK YOUR POOTER *");
        $(".benchCardA").show();
        $(".benchCardB").show();
        $(".benchCardC").show();
        $(".benchCardD").show();
        $(".challengerCard").html('<div class="card-body challengerBody"></div>');
            playerA = {
            hp: 180,
            attack: 8,
            attackCon: 8,
            counter: 5,
        }
            playerB = {
            hp: 160,
            attack: 7,
            attackCon: 7,
            counter: 6,
        }
            playerC = {
            hp: 130,
            attack: 10,
            attackCon: 10,
            counter: 6,
        }
            playerD = {
            hp: 150,
            attack: 6,
            attackCon: 6,
            counter: 8,
        }
        challenger = {};
        defender = {};
        playerChosen = false;
        defenderChosen = false;
        points = 0;
        //busy = false;
        // resetVars();
        

    };





    $("#message").html("* PICK YOUR POOTER *");

    function change() {
        var imageChal = document.getElementById('imgSwitch');
        if (challenger == playerA) {
            imageChal.src = "assets/images/abig2.png";
            setTimeout(function () {
                imageChal.src = "assets/images/abig.png";
            }, 1000);
        }
        if (challenger == playerB) {
            imageChal.src = "assets/images/bbig2.png"
            setTimeout(function () {
                imageChal.src = "assets/images/bbig.png";
            }, 1000);
        }
        if (challenger == playerC) {
            imageChal.src = "assets/images/cbig2.png";
            setTimeout(function () {
                imageChal.src = "assets/images/cbig.png";
            }, 1000);
        }
        if (challenger == playerD) {
            imageChal.src = "assets/images/dbig2.png"
            setTimeout(function () {
                imageChal.src = "assets/images/dbig.png";
            }, 1000);
        }
    }

    function changeDefender() {
        if (defender.hp > 0) {
            var imageDef = document.getElementById('imgSwitchD');
            if (defender == playerA) {
                imageDef.src = "assets/images/abig2def.png";
                setTimeout(function () {
                    imageDef.src = "assets/images/abigdef.png";
                }, 1000);
            }
            if (defender == playerB) {
                imageDef.src = "assets/images/bbig2def.png"
                setTimeout(function () {
                    imageDef.src = "assets/images/bbigdef.png";
                }, 1000);
            }
            if (defender == playerC) {
                imageDef.src = "assets/images/cbig2def.png";
                setTimeout(function () {
                    imageDef.src = "assets/images/cbigdef.png";
                }, 1000);
            }
            if (defender == playerD) {
                imageDef.src = "assets/images/dbig2def.png"
                setTimeout(function () {
                    imageDef.src = "assets/images/dbigdef.png";
                }, 1000);
            }
        }
    }
    // && (canClick)
    
    var x = document.getElementById("myAudio"); 

    function playAudio() { 
        x.play(); 
    } 
    $(document).ready(function(){
        $("#play-again").click(function(){
            resetAll();
        });
    });
    
    function addHp(challenger, defender) {
        if ((challenger.hp > 0) && (defender.hp > 0)) {
            canClick = false;
            defender.hp -= challenger.attack;
            challenger.attack += challenger.attackCon; //the con version is always worth the original value.
            challenger.hp -= defender.attack;
            playAudio();
            $(".challenger-attack-points").html(challenger.attack);
            $(".defender-attack-points").html(defender.attack);
            $(".clouds").append('<img class="fixed-bottom clouds" src="assets/images/poot.png">');
            setTimeout(function () {
                $(".challenger-attack-points").html("");
                $(".defender-attack-points").html("");
                $(".clouds").html("");
            }, 1000);
            $(".challengerHp").html(challenger.hp);
            $(".defenderHp").html(defender.hp);
            change();
            // setTimeout(function () { 
                changeDefender();
            // }, 3000);

        }

        if ((challenger.hp > 0) && (defender.hp <= 0)) {
            $(".defenderCard").html('<div class="card-body defenderBody"></div>');
            defenderChosen = false;
            
            // challenger.attack = 10;
            points++;
            if (points == 3) {
                wins++;
                $("#message").html("YOU WIN!!!");
                $("#play-again").html("PLAY AGAIN");
                //resetAll();
                if (wins < 10) {
                    $("#wins").html("WINS:0" + wins);
                } else {
                    $("#wins").html("WINS:" + wins);
                }
                return;
            }
            else {
                return;
            }
            return;
        }
        else if ((challenger.hp <= 0) && (defender.hp > 0)) {
            $(".defenderCard").html('<div class="card-body defenderBody"></div>');

            $("#message").html("GAME OVER");
            losses++
            resetAll();
            if (losses < 10) {
                $("#loss").html("LOSSES:0" + losses);
            } else {
                $("#loss").html("LOSSES:" + losses);
            }
            return;
        }
    }


    $(".benchCardA").click(function () {
        if ((playerChosen == true) && (defenderChosen == false)) {
            $("#message").html("");
            $(this).hide();
            $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/abigdef.png" alt="Card image cap" value="a" id="imgSwitchD" onclick="change();">');
            $(".defenderBody").append('<p class="card-text name">Coney</p><p class="card-text hp">HP:<span class="defenderHp">' + playerA.hp + '</span></p>');
            defenderChosen = true;
            $("#message").html("Press <b>F</b> to attack!");
            defender = playerA;
            return;
        }
        else if ((playerChosen == false) && (defenderChosen == false)) {
            $("#message").html("");
            $(this).hide();
            $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/abig.png" alt="Card image cap" value="a" id="imgSwitch" onclick="change();">');
            $(".challengerBody").append('<p class="card-text name">Coney</p><p class="card-text hp">HP:<span class="challengerHp">' + playerA.hp + '</span></p>');
            $("#message").html("Choose your opponent!");
            playerChosen = true;
            challenger = playerA;
        } else {
            return;
        }
    });
        $(".benchCardB").click(function () {
            //the top of each function sends player to DEFENDER spot. This function is for A, next for B and so on.
            if ((playerChosen == true) && (defenderChosen == false)) {
                $("#message").html("");
                $(this).hide();
                $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/bbigdef.png" alt="Card image cap" value="b" id="imgSwitchD" onclick="change();">');
                $(".defenderBody").append('<p class="card-text name">Gregory</p><p class="card-text hp">HP:<span class="defenderHp">' + playerB.hp + '</span></p>');
                defenderChosen = true;
                $("#message").html("Press <b>F</b> to attack!");
                defender = playerB;
                return;
            }
            //the bottom of each function sends player to CHALLENGER spot.
            else if ((playerChosen == false) && (defenderChosen == false)) {
                $("#message").html("");
                $(this).hide();
                $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/bbig.png" alt="Card image cap" value="b" id="imgSwitch" onclick="change();">');
                $(".challengerBody").append('<p class="card-text name">Gregory</p><p class="card-text hp">HP:<span class="challengerHp">' + playerB.hp + '</span></p>');
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
                $("#message").html("");
                $(this).hide();
                $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/cbigdef.png" alt="Card image cap" value="c" id="imgSwitchD" onclick="change();">');
                $(".defenderBody").append('<p class="card-text name">Chloe</p><p class="card-text hp">HP:<span class="defenderHp">' + playerC.hp + '</span></p>');
                defenderChosen = true;
                $("#message").html("Press <b>F</b> to attack!");
                defender = playerC;
                return;
            }
            else if ((playerChosen == false) && (defenderChosen == false)) {
                $("#message").html("");
                $(this).hide();
                $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/cbig.png" alt="Card image cap" value="c" id="imgSwitch" onclick="change();">');
                $(".challengerBody").append('<p class="card-text name">Chloe</p><p class="card-text hp">HP:<span class="challengerHp">' + playerC.hp + '</span></p>');
                $("#message").html("Choose your opponent!");
                playerChosen = true;
                challenger = playerC;
            } else {
                return;
            }
        });
        $(".benchCardD").click(function () {
            if ((playerChosen == true) && (defenderChosen == false)) {
                $("#message").html("");
                $(this).hide();
                $(".defenderCard").prepend('<img class="card-img-top" src="assets/images/dbigdef.png" alt="Card image cap" value="c" id="imgSwitchD" onclick="change();">');
                $(".defenderBody").append('<p class="card-text name">Inna</p><p class="card-text hp">HP:<span class="defenderHp">' + playerD.hp + '</span></p>');
                defenderChosen = true;
                $("#message").html("Press <b>F</b> to attack!");
                defender = playerD;
                return;
            }
            else if ((playerChosen == false) && (defenderChosen == false)) {
                $("#message").html("");
                $(this).hide();
                $(".challengerCard").prepend('<img class="card-img-top" src="assets/images/dbig.png" alt="Card image cap" value="c" id="imgSwitch" onclick="change();">');
                $(".challengerBody").append('<p class="card-text name">Inna</p><p class="card-text hp">HP:<span class="challengerHp">' + playerD.hp + '</span></p>');
                $("#message").html("Choose your opponent!");
                playerChosen = true;
                challenger = playerD;
            } else {
                return;
            }
        });

        $(document).keyup(function (event) {
            if ((event.which == 70) && (playerChosen) && (defenderChosen)) {
                
                addHp(challenger, defender);
            }
        });




    });

    //This function calls on the two characters. It says if a challenger and a defender were chosen and the player
    //hits the A key (capital or lower) it will do what we tell it to do.













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















