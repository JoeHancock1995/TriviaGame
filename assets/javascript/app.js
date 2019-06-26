var questions = [{
    "question": "Where was the first nuclear bomb exploded?",
    "option1":"White Sands, NM",
    "option2":"Nagasaki, Japan",
    "option3":"Hiroshima, Japan",
    "option4":"Nevada Proving Grounds, NV",
    "answer":"1",
}, {
    "question": "2.Based on estimates, about how many nuclear weapons does the United States have?'(In 1967 their was 31,255 nuclear weapons in the US arsenal)'",
    "option1":"22,000",
    "option2":"10,000",
    "option3":"38,000",
    "option4":"4,000",
    "answer":"4",
}, {
    "question": "3.About how many nuclear weapons does North Korea have based on tests undertaken and intelligence gathered?",
    "option1":"755",
    "option2":"105",
    "option3":"25",
    "option4":"475",
    "answer":"3",
}, {
    "question": "4.Since the test of the first nuclear bomb in 1945 the US has conducted 1,053 more tests. Where were most of these tests conducted?",
    "option1":"Pacific Proving Grounds, Marshal Islands",
    "option2":"White Sands Missile Range, NM",
    "option3":"Nevada Proving Grouds, NV",
    "option4":"Rulison Test Site, CO",
    "answer":"3",
},{
    "question": "5.Chernobyl is the worst nuclear accident in history. A series of events leading up to an explosion resulted in the reaktor core being completely exposed allowing massive amounts of radiation to be released. Chernobyl released more radioactive contamination into the atmosphere than was released from nuclear weapons testing?",
    "option1":"True",
    "option2":"False",
    "answer":"2",
} {
    "question": "6.The US has spent at least how much on nuclear weapons?",
    "option1":"$10.4 Billion",
    "option2":"$9.3 Trillion",
    "option3":"$2.6 Billion",
    "option4":"$1.9 Trillion",
    "answer":"2",
}, {
    "question": "7.What was the most powerful explosive ever detonated?",
    "option1":"M.O.A.B (United States)",
    "option2":"Dong Feng-4 (China)",
    "option3":"Tsar Bomba (Soviet Union)",
    "option4":"Ivy Mike (United State)",
    "answer":"3",
}, {
    "question": "8.The US and Russia posses how much of the worlds nuclear weapons?",
    "option1":"50%",
    "option2":"65%",
    "option3":"75%",
    "option4":"90%",
    "answer":"4",
},]
var question = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

function loadQuestion (questionIndex) {
    var q = question[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}