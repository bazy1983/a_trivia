$(document).ready(function (){
    
    var time = 11,
        arrIndex = 0;

    function passQuestion (i) {
        $(".question").html(myQuestions[i].question);

        for (var ai = 0; ai < myQuestions[i].answers.length; ai++){
            var myAnswers = $("<p>" + myQuestions[i].answers[ai] + "</p>");
            $(".choices").append(myAnswers);
        }
      
    };
    passQuestion(arrIndex);

    var timeFunction = function () {
        var countdown =  setInterval (function(){
        time --;
        $(".timer").html(time) // pass the value to document
            if (time === 0){ //when time is up

                clearInterval(countdown);
                setTimeout ( function() {
                resetTimer();
                }, 2000);

            } 
        }, 1000);
    }

    function resetTimer (){
        arrIndex++
        if (arrIndex < myQuestions.length) {
            $(".choices").empty();
            passQuestion(arrIndex);
            time = 11
            timeFunction();
        } else { // when run out of questions
            $(".question").html("no more questions");
        }
    };

    timeFunction();
});