

var answers = ["js","potato","own","plumbis","hot","data","42","dance","crabCore","hi","Plumbis"];


var audioElement1 = document.createElement("audio");
audioElement1.setAttribute("src", "assets/hi.mp3");

var audioElement2 = document.createElement("audio");
audioElement2.setAttribute("src", "assets/CD.mp3");


$("#start").on("click", function(){
    startTimer();
    audioElement1.play()
});


var timeLeft = 126;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;

function startTimer() {
    
    intervalID = setInterval(count, 1000);
    $("#timeLeft").text(timeLeft);
    $("#buttons").hide()
    $("#questions").show()
}

function count(){
    timeLeft--;
    
    $("#timeLeft").text(timeLeft);
    if(timeLeft === 60||timeLeft===15||timeLeft===5||timeLeft===3){
        $("body").css("background-image", "url(https://78.media.tumblr.com/be5282deb7246c88281bf137efd33cd7/tumblr_ni4kiqzYgE1rnq3cto1_500.gif)");
    }
    if(timeLeft===30||timeLeft===10||timeLeft===4||timeLeft===2||timeLeft===1){
        $("body").css("background-image", "url(https://giant.gfycat.com/HarshDetailedFieldspaniel.gif)");
    }

    

    if(timeLeft === 0){
        clearInterval(intervalID);
        $("#timer").hide()
        $("#questions").hide()
        $("#end").show()
        $("#correct").text(correct)
        $("#wrong").text(wrong)
        $("#unanswered").text(unanswered)
        $("body").css("background-image", "url(https://78.media.tumblr.com/be5282deb7246c88281bf137efd33cd7/tumblr_ni4kiqzYgE1rnq3cto1_500.gif)");
    }
}

function gameOver(){
    clearInterval(intervalID);
        $("#timer").hide()
        $("#questions").hide()
        $("#end").show()
        $("#correct").append('<h1> '+ +correct +'</h1>')
        $("#wrong").append('<h1> ' + wrong +'</h1>')   
          if(unanswered=11){
            unanswered=10;
        }
        $("#unanswered").append('<h1> ' + unanswered +'</h1>')
   
        console.log(correct);
        console.log(wrong)
        console.log(unanswered)
}

$(document).on('click', '#submit', function(event){
    event.preventDefault();
    audioElement2.play()
    audioElement1.pause()
    for (let i = 0; i < answers.length; i++) {

        
        if($(`input[name=q${i}]:checked`).attr("ans") == answers[i]){
            correct++;
            // unanswered--;
        } 
        else if($(`input[name=q${i}]:checked`).length == 0){
            unanswered++;
        }
        else {    // TODO: Incorrect syntax- look at syntax for line 40 and compare it to this. 
            wrong++;
            // unanswered--;
        }
    }
     gameOver();


})




