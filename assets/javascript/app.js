var triviaGame = {
    triviaQuestions: [],
    answeredCorrectly: 0,
    answeredIncorrectly: 0,
    questionsUnanswered: 0,
    timer: 0,
    questionNumber: 0,

}


function createsTriviaQuestion(question, answer, choices) {
    return {
        question: question,
        answer: answer,
        choices: choices,
    }
}

triviaGame.triviaQuestions.push(createsTriviaQuestion("Batman", 1, ["Matt Murdock", "Bruce Wayne", "Scott Summers"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Hulk", 0, ["Bruce Banner", "Steve Rogers", "Dick Grayson"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Professor X", 1, ["Matt Murdock", "Charles Xavier", "Arthur Curry"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Captain America", 2, ["James Howlet", "Clark Kent", "Steve Rogers"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Wolverine", 1, ["Charles Xavier", "James Howlet", "Scott Summers"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Robin", 0, ["Dick Grayson", "John Stewart", "Peter Parker"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Cyclops", 1, ["Arthur Curry", "Scott Summers", "Clark Kent"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Aquaman", 0, ["Arthur Curry", "Bruce Wayne", "Scott Summers"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Green Lantern", 2, ["Matt Murdock", "Steve Rogers", "John Stewart"]));
triviaGame.triviaQuestions.push(createsTriviaQuestion("Daredevil", 0, ["Matt Murdock", "Steve Rogers", "John Stewart"]));


// display question and choices hide answer
function DisplayQuestion(question) {


    $("#question").text(question.question);
    $("#option1").text(question.choices[0]);
    $("#option2").text(question.choices[1]);
    $("#option3").text(question.choices[2]);
    $("#questionContainer").css("display", "initial");
    $("#timerContainer").css("display", "initial");
}

function handleAnswerClick(index) {

    var questionNumber = triviaGame["questionNumber"];
    var currentQuestion = triviaGame.triviaQuestions[questionNumber];
    var correctIndex = currentQuestion.answer;
     

    if (correctIndex === index) {
        $("#questionContainer").css("display", "none");
        $("#gameResult").css("display", "initial");
        $("#correctOrIncorrect").text("Correct!");


    } else {
        $("#questionContainer").css("display", "none");
        $("#gameResult").css("display", "initial");
        $("#correctOrIncorrect").text("Nope!");
        $("#displayCorrect").text(currentQuestion.choices[correctIndex]);
    }

    triviaGame.questionNumber++;
    stop()
}

var time = 30;
var intervalId;

function timer(){
 intervalId = setInterval(decrement, 1000);
}
function decrement(){
    time--;

    $("#timer").text(time);
     if (time === 0){
        stop();
     }
}

function stop(){
    clearInterval(intervalId)
}
timer();

$(function() {


    $("#start").on("click", function() {
        $('#start').css("display", "none");
        DisplayQuestion(triviaGame.triviaQuestions[0]);
    });

    $("#option1").on("click", function() {
        handleAnswerClick(0);
        
    });

    $("#option2").on("click", function() {
        handleAnswerClick(1);
        
    });

    $("#option3").on("click", function() {
        handleAnswerClick(2);
        
    });

})