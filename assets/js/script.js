
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

const scoreDisplay = document.querySelector(".scoreDisplay");

let optionClicked = false;   // controllo clic domanda

logo = document.querySelector('.logo');

let score = 0;


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
    nextQuestion.className = "next ";                   // creazione pulsante
    optionList.appendChild(nextQuestion);

    function theNextQuestion(){

        let answer = document.querySelector('.answer');
    
        if(optionClicked === false){                    // Se l'utente non ha cliccato nessuna opzione, non passa alla domanda successiva
            alert('Please select an option!');
            return;
        }
        optionClicked = false;
    
        currentQuestionIndex++;
    
            if(currentQuestionIndex < quizzes[currentCategory].length){
            questionText.textContent = quizzes[currentCategory][currentQuestionIndex].question;  // visualizza prossima domanda
            
            for (let i = 0; i < optionButton.length; i++){
                optionButton[i].textContent = quizzes[currentCategory][currentQuestionIndex].options[i]; // Aggiorna le opzioni
                optionButton[i].style.backgroundColor = "";                 // Resettare il colore
                optionButton[i].addEventListener('click', checkAnswer);
            }} else if (currentQuestionIndex === quizzes[currentCategory].length){    // se ultima domanda, visualizza punteggio
                showScore();
                nextQuestion.textContent = "FINISH";
            }
         else currentQuestionIndex = 0;
        
    
        if(answer) optionList.removeChild(answer);       // elimina wrong o correct per la prossima domanda

    
        optionButton.forEach(button => {
            button.style.color = "";  
          });
        }

nextQuestion.addEventListener('click', theNextQuestion);


// DISPLAY QUESTIONS

function displayQuestions(category){ // collegamento ad elementi html

    let answer = document.querySelectorAll('.answer');
    answer.forEach(answer => {                             // eliminazione answer inizio domanda
        answer.parentNode.removeChild(answer);
    });
    
    currentCategory = category;
    const activeQuiz = quizzes[currentCategory].sort(() => Math.random() - 0.5);   // domande random

    let previousOptions = document.querySelectorAll('.option');
    previousOptions.forEach(option => {     
        option.remove();
    });

// pulsante back

    let buttonDiv = document.querySelector('.backButtonDiv');

    let backButton = document.querySelector('.back');

        backButton.addEventListener('click', function() {

            let scoreText = document.querySelector('.scoreText');
            let motivationText = document.querySelector('.motivationText');     // variabili punteggio
            let scoreDisplay = document.querySelector('.scoreDisplay');

            if(scoreText) scoreDisplay.removeChild(scoreText);
            if(motivationText) scoreDisplay.removeChild(motivationText);        // rimuovere elementi punteggio

            score = 0;
            quizHome.style.display = 'block';
            questionCont.style.display = 'none';
            logo.style.display = 'block';
            scoreDisplay.style.display = 'none';
        });

        backButton.style.display = 'block';
        questionText.style.display = 'block';
        optionList.style.display = 'block';

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

function checkAnswer() {
    const activeQuiz = quizzes[currentCategory];
    optionClicked = true;
    const optionButtons = document.querySelectorAll('.option'); // Modifica la variabile per mantenere i riferimenti ai pulsanti

    const checked = this.textContent;
    const correctAnswer = activeQuiz[currentQuestionIndex].answer;

    if (checked === correctAnswer) {
        this.style.backgroundColor = "lightgreen";
        this.style.color = "white";
        rightAnswer();              // Funzione per la risposta corretta
        score++;                        // Incremento del punteggio
        console.log("punti: " + score);
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        wrongAnswer();                      // Funzione per la risposta sbagliata
    }

    optionButtons.forEach(button => {               // Rimozione degli eventi click dopo la risposta
        if (button.textContent) {
            button.removeEventListener('click', checkAnswer);
        } else if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "lightgreen";
            button.style.color = "white";
        }
    });
}

// VISUALIZZAZIONE PUNTI

function showScore (){

    scoreDisplay.style.display = 'block';     // visualizzazione punteggio

    const totalQuestions = quizzes[currentCategory].length;
    const currentPoints = score;
    scorePercentage = Math.round((currentPoints/totalQuestions)*100);

    let message = "Your total score is: " + currentPoints + " out of " + totalQuestions;
    message += " (" + scorePercentage + "%)";

    const motivationText = document.createElement('p');
    if(scorePercentage < 50){
        motivationText.textContent = "You need to practice more!";          // primo messaggio
        motivationText.style.color = "red";
    }
    else if(scorePercentage >= 50 && scorePercentage < 100) motivationText.textContent = "Not Bad!";
    else if(scorePercentage === 100) motivationText.textContent =" Amazing!";
    motivationText.className = "motivationText";
    scoreDisplay.appendChild(motivationText);

    const scoreText = document.createElement('p');
    scoreText.textContent = message;                     // secondo messaggio
    scoreText.className = "scoreText";
    scoreDisplay.appendChild(scoreText);

    
    questionText.style.display = 'none';
    optionList.style.display = 'none';

    console.log("punteggio: " + score);
}



/* PROVA INPUT

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

        let answer = document.querySelectorAll('.answer');
    
        if (isCorrect) {
            rightAnswer();
            input.style.backgroundColor = "lightgreen";
            input.style.color = "white";
            checkChecked = true;
        } else if (!isCorrect) {
            wrongAnswer();
            input.style.backgroundColor = "red";
            input.style.color = "white";
        }

    });
}

*/


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

burgers.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("burgers");
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

    burgers: [
        {
            category: "burgers",
            question: "List the ingredients of Green & Gold",
            options: ["Buns, mayo, green leaves, tomato, beef patty, cheese, fried egg, hashbrown, bacon",
            "Buns peri peri mayo, green leaves, tomato, beef patty, bacon",
            "Buns, mayo, green leaves, tomato, fried chicken, cheese",
            "Buns, mayo, green leaves, tomato, beef patty, cheese, bacon, hashbrown"],
            answer : "Buns, mayo, green leaves, tomato, beef patty, cheese, bacon, hashbrown"
        }
    ]
    
}

/* const missingQuiz = {

    missing: [
        {
            category: "missing",
            question: "Zendaye has 2 bacon, grilled tomato, egg, relish, 2 toast and?",
            options: ["Cheese", "Grilled Mushrooms", "2 Hashbrown", "2 Sausages"],
            answer : ["2 Sausages", "sausages",]
        },
        {
            category: "missing",
            question: "Zendaye has three bacon, grilled tomato, egg, relish, 2 toast and?",
            options: ["Cheese", "Grilled Mushrooms", "2 Hashbrown", "2 Sausages"],
            answer : ["2 Sausages", "sausages",]
        }
    ]
}  */