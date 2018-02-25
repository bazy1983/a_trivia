$(document).ready(function (){
    
    var time = 11,
        arrIndex = 0;

    var timeFunction = function () {
        var countdown =  setInterval (function(){
        time --;
        $(".timer").html(time) // pass the value to document
        console.log (time);
        if (time === 0){

            clearInterval(countdown);
            setTimeout ( function() {
            resetTimer();
            }, 2000);

        } 
    }, 1000);}

    function resetTimer (){
        time = 11
        timeFunction();
    }

    timeFunction();
});