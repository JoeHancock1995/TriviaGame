var questions = [{
    "question": ". Where was the first nuclear bomb exploded?",
    "option1":"White Sands, NM",
    "option2":"Nagasaki, Japan",
    "option3":"Hiroshima, Japan",
    "option4":"Nevada Proving Grounds, NV",
    "answer":"1",
}, {
    "question": ". Based on estimates, about how many nuclear weapons does the United States have?'(In 1967 their was 31,255 nuclear weapons in the US arsenal)'",
    "option1":"22,000",
    "option2":"10,000",
    "option3":"38,000",
    "option4":"4,000",
    "answer":"4",
}, {
    "question": ". About how many nuclear weapons does North Korea have based on tests undertaken and intelligence gathered?",
    "option1":"755",
    "option2":"105",
    "option3":"25",
    "option4":"475",
    "answer":"3",
}, {
    "question": ". Since the test of the first nuclear bomb in 1945 the US has conducted 1,053 more tests. Where were most of these tests conducted?",
    "option1":"Pacific Proving Grounds, Marshal Islands",
    "option2":"White Sands Missile Range, NM",
    "option3":"Nevada Proving Grouds, NV",
    "option4":"Rulison Test Site, CO",
    "answer":"3",
},{
    "question": ". What rleased more nuclear radiation?",
    "option1":"Chernobyl disaster",
    "option2":"Fukushima disaster",
    "option3":"US nuclear weapons tests",
    "option4":"Three Mile Islnd Disaster",
    "answer":"3",
},{
    "question": ". The US has spent at least how much on nuclear weapons?",
    "option1":"$10.4 Billion",
    "option2":"$9.3 Trillion",
    "option3":"$2.6 Billion",
    "option4":"$1.9 Trillion",
    "answer":"2",
}, {
    "question": ". What was the most powerful explosive ever detonated?",
    "option1":"M.O.A.B (United States)",
    "option2":"Dong Feng-4 (China)",
    "option3":"Tsar Bomba (Soviet Union)",
    "option4":"Ivy Mike (United State)",
    "answer":"3",
}, {
    "question": ". The US and Russia posses how much of the worlds nuclear weapons?",
    "option1":"50%",
    "option2":"65%",
    "option3":"75%",
    "option4":"90%",
    "answer":"4",
},]
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "" + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}


function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 12.5;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);