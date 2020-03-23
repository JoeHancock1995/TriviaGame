var card = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
    question: "Where was the first nuclear bomb exploded?",
    answers: ["White Sands, NM", "Nagasaki, Japan", "Hiroshima, Japan", "Nevada Proving Grounds, NV"],
    correctAnswer: "White Sands, NM",
    image: "assets/images/trinity_site.jpg"
}, {
    question: "Based on estimates, about how many nuclear weapons does the United States have?'(In 1967 their was 31,255 nuclear weapons in the US arsenal)'",
    answers: ["22,000", "10,000", "38,000", "4,000"],
    correctAnswer: "4,000",
    image: "assets/images/atomic_annie.jpg"
}, {
    question: "About how many nuclear weapons does North Korea have based on tests undertaken and intelligence gathered?",
    answers: ["755", "105" ,"25" ,"475"],
    correctAnswer: "25",
    image: "assets/images/NK_weapons.jpg"
}, {
    question: "Since the test of the first nuclear bomb in 1945 the US has conducted 1,053 more tests. Where were most of these tests conducted?",
    answers: ["Pacific Proving Grounds, Marshal Islands", "White Sands Missile Range, NM", "Nevada Proving Grouds, NV", "Rulison Test Site, CO"],
    correctAnswer: "Nevada Proving Grouds, NV",
    image: "assets/images/NVproving2.jpg"
},{
    question: "What rleased more nuclear radiation?",
    answers: ["Chernobyl disaster", "Fukushima disaster", "US nuclear weapons tests", "Three Mile Islnd Disaster"],
    correctAnswer: "US nuclear weapons tests",
    image: "assets/images/radition.jpg"
},{
    question: "The US has spent at least how much on nuclear weapons?",
    answers: [ "$10.4 Billion", "$9.3 Trillion", "$2.6 Billion", "$1.9 Trillion"],
    correctAnswer: "$9.3 Trillion",
    image: "assets/images/trinity2.jpg"
}, {
    question: "What was the most powerful explosive ever detonated?",
    answers: ["M.O.A.B (United States)", "Dong Feng-4 (China)", "Tsar Bomba (Soviet Union)", "Ivy Mike (United States)"],
    correctAnswer: "Tsar Bomba (Soviet Union)",
    image: "assets/images/tsar_bomba.jpg"

}, {
    question: "The US and Russia posses how much of the worlds nuclear weapons?",
    answers: [ "50%", "65%", "75%", "90%"],
    correctAnswer: "90%",
    image: "assets/images/nuclear_stockpiles.png"

}];

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("TIME UP");
            this.timeUp();
        }
    },

    loadQuestion: function () {

        timer = setInterval(this.countdown.bind(this), 1000);

        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {
        this.counter = window.countStartNumber;
        $("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function () {

        clearInterval(window.timer);

        $("#counter-number").text(this.counter);

        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(window.timer);

        card.html("<h2>All done, heres how you did!</h2>");

        $("#counter-number").text(this.counter);

        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        card.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function (e) {
        clearInterval(window.timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {

        this.incorrect++;

        clearInterval(window.timer);

        card.html("<h2>Nope!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    answeredCorrectly: function () {

        clearInterval(window.timer);

        this.correct++;

        card.html("<h2>Correct!</h2>");
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    reset: function () {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function (e) {
    game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});
