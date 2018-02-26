$(document).ready(function (){
    
    var time = 11,
        arrIndex = 0,
        arrAnswer = [];

        for (var i = 0; i <myQuestions.length; i++){ //adds empty string values to array
            arrAnswer[i] = "";
        }

    function passQuestion (i) {// pass aquestion and choices to document
        $(".question").html(myQuestions[i].question); 

        for (var ai = 0; ai < myQuestions[i].answers.length; ai++){ 
            var myAnswers = $("<p class = 'lead' value = '"+myQuestions[i].name+"'>" + myQuestions[i].answers[ai] + "</p>");
            $(".choices").append(myAnswers);
        }
    };

    passQuestion(arrIndex); // after loading the page pass the first question

    var countdown,
        questionExpired,
        interval;

    function countdown() {
       interval = setInterval (function(){ //counter for each question
            time --;

            $(".timer").html(time) // pass the time to document
                if (time === 0){ //when time is up
                    questionExpired();
                } 
        }, 1000);
        console.log(interval) 
}


    questionExpired = function () { //question get expired or an answer is clicked
        clearInterval(interval);
        $(".choices").empty();
        $(".choices").html("<p class ='lead'>The correct answer is: " + myQuestions[arrIndex].correct +"</p>");
        
        setTimeout ( function() {
            resetAll();
        }, 2000);
    };

   
    $(".choices").on("click", "p", function(){ // ###### ON CLICK EVENT
        arrAnswer[$(this).attr("value")] = $(this).text(); // add that answer to array
        questionExpired();
    });


    function resetAll (){

        arrIndex++ //increase the index to get the next question object
        if (arrIndex < myQuestions.length) {
            $(".choices").empty();
            passQuestion(arrIndex);
            time = 10
            $(".timer").html(time)
            countdown()
        } else { // when run out of questions
            $(".choices").empty();
            $(".question").html("<p class = 'lead'>no more questions</p>");
            console.log(arrAnswer)
            //here goes the final calculations
        };
    };

    countdown()
    
});