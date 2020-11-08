//variable 

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


var time = document.querySelector("#time");
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


