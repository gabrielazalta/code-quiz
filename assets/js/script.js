
//quiz questions
var questions= [
    {
        q: "What is the capital of Australia?",
        ch: ["Canberra", "Sydney", "Brisbane", "Melbourne"],
        a: "Canberra"
    },
    {
        q: "What is the capital of Indonesia?",
        ch: ["Podgorica", "Jakarta", "Bucharest", "Banjul"],
        a: "Jakarta"
    },
    {
        q: "What is the capital of Uzbekistan?",
        ch: ["Thimphu", "Sanaa", "Tashkent", "Djibouti"],
        a: "Tashkent"
    },
    {
        q: "What is the capital of Kenya?",
        ch: ["Tripoli", "Cairo", "Nairobi", "Hanoi"],
        a: "Nairobi"
    },
    {
        q: "What is the capital of Colombia?",
        ch: ["Caracas", "Lima", "Buenos Aires", "Bogota D.C"],
        a: "Bogota D.C"
    }
]

//variables
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("timeStart");
var score = 0;

//start timer once user clicks start

function countdown () {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
       if (timeLeft <= 0) {
           clearInterval(timeInterval);
            timerEl.textContent = "time's up!'";
            endGame();
       } else {
           timerEl.textContent = "time: " + timeLeft;
           startQuiz ();
       }
       timeLeft --;
    }, 1000);
}

startBtn.onclick = countdown;


//display questions on a loop
//after user selects answer, alert if correct or incorrect
function startQuiz () {

    var readyQuestion = document.getElementById("text") = "";
    var userChoice = questions[i].q;
    var promptQuestion = readyQuestion.replace(userChoice);

    if (userChoice === questions[i].a) {
        promptQuestion.textContent = ("Correct!");
        //add 5 points every time the user answers correctly
        score = score + 5;
    } else {
        promptQuestion.textContent = ("Wrong!");
        //remove 12 seconds every time user selects the wrong answer choice
        timeLeft = timeLeft - 12;
    }
}

//end game function
function endGame () {
    //display final score
    //score = total points + time left
    finalScore = score + timeLeft;


    //allow user to enter initials to save score

}
 
//high score






