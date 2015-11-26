$(document).ready(function() {

    var questions = [{
        question: "Where is the Suez Canal?",
        options: ["Egypt", "Australia", "China", "Peru"],
        qNum: 1,
        answer: 0
    }, {
        question: "Which planet is closest to the sun?",
        options: ["Sun", "Earth", "Mercury", "Venus"],
        qNum: 2,
        answer: 2
    }, {
        question: "What is the most widely eaten fish in the world?",
        options: ["Cod", "Salmon", "Herring", "Cuddle Fish"],
        qNum: 3,
        answer: 2
    }, {
        question: "What sticky sweetener was traditionally used as an antiseptic ointment for cuts and burns?",
        options: ["Sugar", "Honey", "Agave", "Molasses"],
        qNum: 4,
        answer: 1
    }, {
        question: "What continent is subjected to the world's largest ozone hole?",
        options: ["Africa", "Asia", "North America", "Antartica"],
        qNum: 5,
        answer: 3
    }, {
        question: "How many planets are in the solar system?",
        options: ["4", "9", "8", "7"],
        qNum: 6,
        answer: 2
    }, {
        question: "Who averaged one patent for every three weeks of his life?",
        options: ["Thomas Edison", "Albert Einstein", "Henry Ford", "Nikola Tesla"],
        qNum: 7,
        answer: 0
    }];

    var score = 0;
    var questionNumber = 0;

    function newSet() {
        //load question
        $("#question h3").remove();
        if (questionNumber < 7) {
            $("#question").prepend("<h3 class='h3_question'>" + questions[questionNumber].question + "</h3>");
        } else {
            $("#question").prepend("<h3>Thank You for Playing!!!</h3>");
        }

        //remove current options
        $("ul li:nth-child(1) h3").remove();
        $("ul li:nth-child(2) h3").remove();
        $("ul li:nth-child(3) h3").remove();
        $("ul li:nth-child(4) h3").remove();

        //load options
        $("ul li:nth-child(1)").prepend("<h3>" + questions[questionNumber].options[0] + "</h3>");
        $("ul li:nth-child(2)").prepend("<h3>" + questions[questionNumber].options[1] + "</h3>");
        $("ul li:nth-child(3)").prepend("<h3>" + questions[questionNumber].options[2] + "</h3>");
        $("ul li:nth-child(4)").prepend("<h3>" + questions[questionNumber].options[3] + "</h3>");

    };

    function selection() {
        $("li").click(function() {
            var qAnswer = questions[questionNumber].answer;
            if ($("h3", this).text() === questions[questionNumber].options[qAnswer]) {
                alert("You are correct");
                score++;
                $("#score h3").remove();
                $("#score").prepend("<h3>" + "Score: " + score + "</h3>")
            } else {
                alert("You are incorrect!!!");
            }

            questionNumber++;
            newSet();
            $("#questNum h3").remove();
            $("#questNum").prepend("<h3>" + "Question " + (questionNumber + 1) + " of 7" + "</h3>");

        });
    };

    newSet();
    selection();

});
