$(document).ready(function() {

    //MARK:
    // BROKEN GAME. kinda works but difficulty button is broken af.
    var colorArray = ["midnightblue", "mediumaquamarine", "darkslategrey", "peachpuff", "mediumseagreen", "darkorchid", "lightcoral", "lightsteelblue", "honeydew", "lavenderblush", "papayawhip", "mediumspringgreen", "tomato", "mediumvioletred", "darksalmon"];
    var currentColor = "";
    var difficulty = 2;

    function createGameBoard() {
        var color = "red";
        $(".level").text(difficulty);

        colorArray = shuffle(colorArray);
        colorArray.forEach(function(theColor, i) {
            color = theColor;
            gamePiece = "<div id='" + color + "'" + " class='" + "gamePiece" + "' style=\"background-color:" + color + ";\"></div>";
            //could have used forloop logic to be a little cleaner :/
            if (i < difficulty) {
                switch (i) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        $(".row1").append(gamePiece);
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        $(".row2").append(gamePiece);
                        break;
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                        $(".row3").append(gamePiece);
                        break;

                }
            }
        });


        //console.log($(".gameBoard").attr("class"));
        correctColor();
    }

    createGameBoard();


    //clickListener
    $(".gameBoard").on("click", ".gamePiece", function() {
        console.log($(this).attr("id"));

        if ($(this).attr("id") == currentColor) {
            correctColor();
            //
        }
    });

    function correctColor() {
        var correctColor = colorArray[randomNumber(0, 14)];
        $("#currentColor").text(correctColor);
        currentColor = correctColor;

    }

    $("#up").click(function() {
        console.log("clickedup");
        if (difficulty < 15) {
            $(".row1").text("");
            $(".row2").text("");
            $(".row3").text("");

            difficulty++;
            $(".level").text(difficulty);
            createGameBoard();
        }

    });
    $("#down").click(function() {
        console.log("clickeddown");
        if (difficulty > 2) {
            $(".row1").text("");
            $(".row2").text("");
            $(".row3").text("");
            difficulty--;
            $(".level").text(difficulty);
            createGameBoard();

        }
    });

    //spent a bit of time trying to write this myself.. feelsbadman #google.
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }



    //TODO: add up+down arrows to choose amount of colors on screen
    //TODO: add effect on click, 1. wrong color 2. right color

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

});
