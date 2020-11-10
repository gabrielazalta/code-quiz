
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

//start timer once user clicks start

//display questions on a loop
//after user selects answer, alert if correct or incorrect

//once timer is done OR user finishes questions end game

//end game function
//display final score
//allow user to enter initials to save score
 

//remove 12 seconds every time user selects the wrong answer choice
//add 5 points every time the user answers correctly
//score = total points + time left




/*var time = document.querySelector("#time");
var seconds = document.querySelector("#timeStart")
var timeStart = 0;
var timeLeft = 60;


//time begins
seconds.addEventListener("click", function () {

    if(timeStart === 0) {
        timeStart = setInterval(function () {
            timeLeft--;
            time.textContent = "time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timeStart);
                endGame ();
                time.textContent = "time's up!";
            }
        }, 1000)
    }
    questionStart ();
})

function questionStart() {

    quizWrapper.innerHTML = "";
    multipleChoice.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var questionContent = questions[questionStart].q;
        var questionChoice = questions[questionStart].ch;

        quizWrapper.textContent = questionContent;
    }

    questionChoice.forEach(function(nextQuestion) {
        var choices = document.createElement("li");
        choices.textContent = nextQuestion;

        quizWrapper.appendChild(multipleChoice);
        multipleChoice.appendChild(choices);
        choices.addEventListener("click", (compare));
    })
}


