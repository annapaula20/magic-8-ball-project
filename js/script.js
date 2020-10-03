$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["no way", "definitely!","try again", "you wish", "ask again later"];

    $("#answer").hide();

    var onClick = function() {
        $("#answer").hide();			 
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout (
            function(){
                var question = prompt("Ask a Yes/No question");
                magic8Ball.askQuestion(question);
            },500);
    };
	
    $("#questionButton").click(onClick);
        
    magic8Ball.askQuestion = function (question) {	
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#answer").hide();
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * magic8Ball.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var randomAnswer = magic8Ball.listOfAnswers[randomIndex];

        $("#answer").text(randomAnswer);
        
        console.log(question);
        console.log(randomAnswer);
    };
});

