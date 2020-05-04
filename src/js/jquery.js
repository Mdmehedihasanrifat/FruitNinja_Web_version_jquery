var playing;
var score=0;
var life;
var furits=['A','b','G','M','O','p'];
var action;
var step;

$(function () {

    $("#start").click(function () {


        if (playing == true) {
            //reload the page
            location.reload();

        }
        //we are not playing
        else {

            playing = true;//game start
            score = 0;// set score value

            $("#scorevalue").html(score);//score value show in id
            //show life

            $("#life").show();
            life = 3;
            addheart();

            $("#gameover").hide();

            $("#start").html("reset");
            startaction();
          slice();


        }
    })

});

function slice(){
    $("#furits1").mouseover(function () {
        score++;
        $("#scorevalue").html(score);

        $("#audio")[0].play();
   clearInterval(action);

      $("#furits1").hide("explode",500);


setTimeout(startaction,500);


    });


}


        function addheart() {
            $("#lifevalue").empty();
            for (i = 0; i < life; i++) {

                $("#lifevalue").append('<img src="img/heart.png">');
            }

        }

        function startaction() {
            $("#furits1").show();
            chosefurits();
            $("#furits1").css({'left': Math.round(500 * Math.random()), 'top': -100});
            step = 2+ Math.round(5* Math.random());

            action = setInterval(function () {
                $("#furits1").css('top', $("#furits1").position().top + step)

             if( $("#furits1").position().top>$("#Question").height()){

            if(life>1){
                $("#furits1").show();
                chosefurits();
                $("#furits1").css({'left': Math.round(500 * Math.random()), 'top': -100});
                step = 1 + Math.round(15* Math.random());
                life--;
                addheart();


            }
            else {
                playing =false;
                $("#start").html("start");
                $("#life").hide();
                    $("#gameover").show();
                $("#gameover").html('<p>your core:'+score+'</p>');


                stopaction();
            }

             }
            }, 10)


        }

        function chosefurits() {

            $("#furits1").attr('src', 'img/' + furits[Math.round(5 * Math.random())] + '.png')

        }
 function stopaction() {

        clearInterval(action);
        $("#furits1").hide();

 }

