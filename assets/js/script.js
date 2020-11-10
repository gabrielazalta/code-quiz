
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

//start timer once user clicks start

function countdown () {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
       if (timeLeft <= 0) {
           clearInterval(timeInterval);
            timerEl.textContent = "time's up!'";
       } else {
           timerEl.textContent = "time: " + timeLeft;
           startQuiz ();
       }
       timeLeft --;
    }, 1000);
}

function startQuiz () {

}
startBtn.onclick = countdown;

//display questions on a loop
//after user selects answer, alert if correct or incorrect

//once timer is done OR user finishes questions end game

//end game function
//display final score
//allow user to enter initials to save score
 

//remove 12 seconds every time user selects the wrong answer choice
//add 5 points every time the user answers correctly
//score = total points + time left




