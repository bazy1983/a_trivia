$(document).ready(function (){
    
    var time = 10,
        arrIndex = 0,
        arrAnswer = [];
        $(".circle_animation").css("stroke-dashoffset", 0);
        $("h3").text(time);
        

        for (var i = 0; i <myQuestions.length; i++){ //adds empty string values to array
            arrAnswer[i] = "";
        }

        // ##### load aquestion and choices to document #####
    function passQuestion (i) {
        $(".question").html(myQuestions[i].question); 

        for (var ai = 0; ai < myQuestions[i].answers.length; ai++){ 
            var myAnswers = $("<button class = 'btn btn-success' value = '"+myQuestions[i].name+"'>" + myQuestions[i].answers[ai] + "</button><br>");
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
            $(".circle_animation").css("stroke-dashoffset", (10-time)*189/10)
            console.log($(".circle_animation").css("stroke-dashoffset"))
            $("h3").text(time); // pass the time to document
                if (time === 0){ //when time is up
                    questionExpired();
                } 
        }, 1000);
        console.log(interval) 
}

    // ##### question get expired or an answer is clicked #####
    questionExpired = function () { 
        clearInterval(interval);
        
        $(".choices").empty();
        $(".choices").html("<p class ='lead'>The correct answer is: <span class = 'correct'>" + myQuestions[arrIndex].correct +"</span></p>");
        
        setTimeout ( function() {
        $(".circle_animation").css("stroke-dashoffset", 0);
           
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
            
            $("h3").text(time); 
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