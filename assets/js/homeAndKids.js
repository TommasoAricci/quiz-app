
// VARIABILI

const kids = document.getElementById('kids');
const breakfast = document.getElementById('breakfast');
const steaks = document.getElementById('steaks');
const pasta = document.getElementById('pasta');
const burgers = document.getElementById('burgers');

let quizHome = document.querySelector('.quiz-home');

let optionList = document.getElementById('option-list');
let questionText = document.getElementById('questionText');
const categories = document.querySelector('.categories');
const questionCont = document.querySelector('.question-container');

const buttonHome = document.querySelectorAll('.buttonCategory');

// HIDE HOME

buttonHome.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        startQuestion();
    });
});

function startQuestion(){
    quizHome.style.display = 'none';
    questionCont.style.display = 'block';
}

// ANSWERS RIGHT AND WRONG

function rightAnswer(){
    let answerOne = document.createElement('p');
    answerOne.textContent = "Correct!";
    answerOne.className = "answer";
    optionList.appendChild(answerOne);
}

function wrongAnswer(){
    let answerTwo = document.createElement('p');
    answerTwo.textContent = "Wrong!";
    answerTwo.className = "answer";
    optionList.appendChild(answerTwo);
}

// NEXT QUESTION

let currentQuestionIndex = 0;

    let nextQuestion = document.createElement('button');
    nextQuestion.textContent = "Next Question";
    nextQuestion.className = "next";
    optionList.appendChild(nextQuestion);

    function theNextQuestion(){

        let answer = document.querySelector('.answer');

        currentQuestionIndex++;
        if (currentQuestionIndex < quizzes[currentCategory].length){
            questionText.textContent = quizzes[currentCategory][currentQuestionIndex].question;  // visualizza prossima domanda
            for (let i = 0; i < optionButton.length; i++){
                optionButton[i].textContent = quizzes[currentCategory][currentQuestionIndex].options[i]; // Aggiorna le opzioni
                optionButton[i].style.backgroundColor = ""; // Resettare lo stile dei pulsanti
                optionButton[i].addEventListener('click', checkAnswer); // Aggiunge l'evento click
            }
        } else currentQuestionIndex = 0;

        if(answer) optionList.removeChild(answer);
    }
    
    nextQuestion.addEventListener('click', theNextQuestion);

// KIDS QUIZ

const quizzes = {  // lista domande
    kids: [  
        {
            category: "kids",
            question: "What's inside Woody?",
            options: ["Burger buns, cheddar cheese, beef patty, fries", "Burger buns, BBQ sauce, chicken breast", "Burger buns, fried chicken, fries", "English muffin, Hollandaise sauce, bacon"],
            answer: "Burger buns, cheddar cheese, beef patty, fries"
        },

        {
            category: "kids",
            question: "What's the difference between Sleepy and Minnie?",
            options: ["Sleepy has maple syrup, Minnie has berry compote", "Sleepy has only additional ice cream", "Sleepy has ice cream, Minnie has strawberry", "Sleepy has only additional maple syrup"],
            answer: "Sleepy has ice cream, Minnie has strawberry"
        }
    ],

    breakfast: [
        {
            category: "breakfast",
            question: "What's the difference between Val and Farmer?",
            options: ["Val has only two toast more than Farmer", "Val has one bacon and one toast, Farmer two bacon and two toast", "Val comes with fried egg, Farmer with poached eggs", "Val has two bacon, Farmer only one"],
            answer: "Val has one bacon and one toast, Farmer two bacon and two toast"
        },

        {
            category: "breakfast",
            question: "In what meal two hashbrowns are not served?",
            options: ["Jim Hawkins", "Test Match", "Emirates", "Zinzan"],
            answer: "Emirates"
        },

        {
            category: "breakfast",
            question: "In what meal two hashbrowns are not served?",
            options: ["Jim Haw", "Test Match", "Emirates", "Zinzan"],
            answer: "Emirates"
        }
    ]
}

function displayQuestions(category){ // collegamento ad elementi html
    
    currentCategory = category;

    const activeQuiz = quizzes[currentCategory];

    let previousOptions = document.querySelectorAll('.option');
    previousOptions.forEach(option => {
        option.remove();
    });

  questionText.textContent = activeQuiz[currentQuestionIndex].question;
    for (let i = 0; i < activeQuiz[currentQuestionIndex].options.length; i++) {
        let option = document.createElement('button');
        option.textContent = activeQuiz[currentQuestionIndex].options[i];
        option.className = 'option';
        option.addEventListener('click', checkAnswer);
        optionList.appendChild(option);
    }
    optionButton = document.querySelectorAll('.option');
}

// VERIFICA RISPOSTA

function checkAnswer(){ 

    const activeQuiz = quizzes[currentCategory];
    
    let checked = this.textContent;
    if (checked === activeQuiz[currentQuestionIndex].answer){
        this.style.backgroundColor = "lightgreen";
        rightAnswer();
        optionButton.forEach(button => {
            if(button.textContent !== checked) button.removeEventListener('click', checkAnswer);
        }
    )} else {
        this.style.backgroundColor = "red";
        wrongAnswer();
        optionButton.forEach(button => {
            if(button.textContent === activeQuiz[currentQuestionIndex].answer) button.style.backgroundColor = "lightgreen";
            button.removeEventListener('click', checkAnswer);
        })
    }
}

// CHIAMATA FUNZIONI A CATEGORIE

kids.addEventListener('click', function(){ // collegamento pulsante "kids" alle domande
    currentQuestionIndex = 0 
    displayQuestions("kids");
})

breakfast.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("breakfast");
})