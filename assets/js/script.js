
// VARIABILI

const kids = document.getElementById('kids');
const breakfast = document.getElementById('breakfast');
const steaks = document.getElementById('steaks');
const pasta = document.getElementById('pasta');
const burgers = document.getElementById('burgers');
const missing = document.getElementById('missing');

let quizHome = document.querySelector('.quiz-home');

let optionList = document.getElementById('option-list');
let questionText = document.getElementById('questionText');
const categories = document.querySelector('.categories');
const questionCont = document.querySelector('.question-container');

const buttonHome = document.querySelectorAll('.buttonCategory');

let optionClicked = false;   // controllo clic domanda

logo = document.querySelector('.logo');

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
    nextQuestion.textContent = "NEXT";
    nextQuestion.className = "next ";   // creazione pulsante
    optionList.appendChild(nextQuestion);

function theNextQuestion(){

    let answer = document.querySelector('.answer');

    if(optionClicked === false){    // Se l'utente non ha cliccato nessuna opzione, non passa alla domanda successiva
        alert('Please select an option!');
        return;
    }
    optionClicked = false;

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


// DISPLAY QUESTIONS

function displayQuestions(category){ // collegamento ad elementi html

    let answer = document.querySelectorAll('.answer');
    answer.forEach(answer => {                             // eliminazione answer inizio domanda
        answer.parentNode.removeChild(answer);
    });
    
    currentCategory = category;
    const activeQuiz = quizzes[currentCategory];

    let previousOptions = document.querySelectorAll('.option');
    previousOptions.forEach(option => {
        option.remove();
    });

// pulsante back

    let buttonDiv = document.querySelector('.backButtonDiv');

    let backButton = document.querySelector('.back');

        backButton.addEventListener('click', function() {
            quizHome.style.display = 'block';
            questionCont.style.display = 'none';
            logo.style.display = 'block';
        });

        backButton.style.display = 'block';


// pulsanti opzioni

    questionText.textContent = activeQuiz[currentQuestionIndex].question;

    for (let i = 0; i < activeQuiz[currentQuestionIndex].options.length; i++) {
        let option = document.createElement('button');
        option.textContent = activeQuiz[currentQuestionIndex].options[i];
        option.className = 'option';                                            // assegnazione domanda e risposte
        optionList.appendChild(option);

        option.addEventListener('click', checkAnswer);
    }

    optionButton = document.querySelectorAll('.option');

    if(logo) logo.style.display = 'none';
}

// AL CLIC DELLA RISPOSTA

function checkAnswer(){ 

const activeQuiz = quizzes[currentCategory];
optionClicked = true;
    
let checked = this.textContent;
    if (checked === activeQuiz[currentQuestionIndex].answer){
        this.style.backgroundColor = "lightgreen";
        rightAnswer();                                              // risposta giusta
        optionButton.forEach(button => {
            if(button.textContent !== checked) button.removeEventListener('click', checkAnswer);
        }
    )} else {
        this.style.backgroundColor = "red";
        wrongAnswer();                                                  // risposta sbagliata
        optionButton.forEach(button => {
            if(button.textContent === activeQuiz[currentQuestionIndex].answer) button.style.backgroundColor = "lightgreen";
            button.removeEventListener('click', checkAnswer);
        })
    }
}

// PROVA INPUT

function missingIngredients(category){

    let answer = document.querySelectorAll('.answer');
    answer.forEach(answer => {                             // eliminazione answer inizio domanda
        answer.parentNode.removeChild(answer);
    });

    let buttonDiv = document.querySelector('.backButtonDiv');
    let backButton = document.querySelector('.back');
        backButton.addEventListener('click', function() {
            quizHome.style.display = 'block';                      // pulsante back
            questionCont.style.display = 'none';
            logo.style.display = 'block';
            input.remove();
            check.remove();
        });
        backButton.style.display = 'block';

        // rimozione pulsanti

    currentCategory = category;

    let previousOptions = document.querySelectorAll('.option');
    previousOptions.forEach(option => {
        option.remove();
    });

    // creazione input e invio
    
    questionText.textContent = missingQuiz[currentCategory][currentQuestionIndex].question;
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'input';
    input.placeholder = 'Type here';
    optionList.appendChild(input);

    let check = document.createElement('button');
    check.textContent = 'Check';
    check.className = 'check';
    optionList.appendChild(check);

    // controllo risposta

    check.addEventListener('click', function() {
        const userAnswer = input.value.toLowerCase(); 
    
        const correctAnswers = missingQuiz[currentCategory][currentQuestionIndex].answer;
        let isCorrect = false;
    
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswer === correctAnswers[i].toLowerCase()) {
                isCorrect = true;
                break;
            }
        }
    
        if (isCorrect) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });
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

steaks.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("steaks");
})

pasta.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("pasta");
})

missing.addEventListener('click', function(){
    currentQuestionIndex = 0
    missingIngredients("missing");
})

// QUIZ QUESTIONS

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
        },
        {
            category: "kids",
            question: "Is the garnish served in the kids meals?",
            options: ["Yes", "No"],
            answer: "No"
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
        },
        {
            category: "breakfast",
            question: "What's the mi",
            options: ["Jim Haw", "Test Match", "Emirates", "Zinzan"],
            answer: "Emirates"
        }

    ],

    steaks: [
        {
            category: "steaks",
            question: "In what meals creamy mushrooms are not served?",
            options: ["Hillary", "Highfields", "HammerThrow", "King Charles"],
            answer : "King Charles"
        }
    ],

    pasta: [
        {
            category: "pasta",
            question: "What's inside Picasso?",
            options: ["Pasta, prawns, sliced chorizo, onion, chilli, creamy sauce", "Pasta, prawns, spinach, onion, chilli, Haystacks", "Pasta, chorizo, prawns, monet tomatoes, onion, haystacks", "Pasta, grilled mushrooms, crispy bacon, creamy sauce"],
            answer : "Pasta, prawns, spinach, onion, chilli, Haystacks"
        }
    ],
    
}

const missingQuiz = {

    missing: [
        {
            category: "missing",
            question: "Zendaye: 2 bacon, grilled tomato, egg, relish, 2 toast",
            options: ["Cheese", "Grilled Mushrooms", "2 Hashbrown", "2 Sausages"],
            answer : ["2 Sausages", "sausages",]
        }
    ]
}