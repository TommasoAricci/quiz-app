
// VARIABILI

const kids = document.getElementById('kids');
const breakfast = document.getElementById('breakfast');
const steaks = document.getElementById('steaks');
const pasta = document.getElementById('pasta');
const burgers = document.getElementById('burgers');
const missing = document.getElementById('missing');
const omelette = document.getElementById('omelette')
const fish = document.getElementById('fish');
const sweets = document.getElementById('sweets');
const pork = document.getElementById('pork');

const guess = document.getElementById('guess');

let quizHome = document.querySelector('.quiz-home');

let optionList = document.getElementById('option-list');
let questionText = document.getElementById('questionText');
const categories = document.querySelector('.categories');
const questionCont = document.querySelector('.question-container');
const buttonHome = document.querySelectorAll('.buttonCategory');
const scoreDisplay = document.querySelector(".scoreDisplay");
const title = document.querySelector('.title');

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
    questionCont.style.display = 'flex';
}

// ANSWERS RIGHT AND WRONG

function rightAnswer(){
    let answerOne = document.createElement('p');
    answerOne.textContent = "Correct!";
    answerOne.className = "answer";
    answerOne.style.color = "lightgreen";
    optionList.appendChild(answerOne);
}

function wrongAnswer(){
    let answerTwo = document.createElement('p');
    answerTwo.textContent = "Wrong!";
    answerTwo.className = "answer";
    answerTwo.style.color = "red";
    optionList.appendChild(answerTwo);
}


// NEXT QUESTION

let currentQuestionIndex = 0;

let nextQuestion = document.createElement('button');
nextQuestion.textContent = "NEXT";
nextQuestion.className = "next";                   // creazione pulsante
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
    
    let options = quizzes[currentCategory][currentQuestionIndex].options.slice();       // opzioni random per ogni domanda successiva
    options.sort(() => Math.random() - 0.5);

    let currentQuestionNumber = currentQuestionIndex + 1;
    let questionNumber = document.getElementById("questionNumber");
    questionNumber.textContent = currentQuestionNumber + "/" + quizzes[currentCategory].length;   // aggiornamento numero domnda per domanda successiva

    for (let i = 0; i < optionButton.length; i++){
        optionButton[i].textContent = options[i]; // Aggiorna le opzioni
        optionButton[i].style.backgroundColor = "";                 // Resettare il colore
        optionButton[i].addEventListener('click', checkAnswer);
    }} else if (currentQuestionIndex === quizzes[currentCategory].length)  // se ultima domanda, visualizza punteggio
        showScore();
    else if (currentQuestionIndex === quizzes[currentCategory].length -1) nextQuestion.textContent = "FINISH";
    else currentQuestionIndex = 0;
    
    if(answer) optionList.removeChild(answer);       // elimina wrong o correct per la prossima domanda

    // ripristino valori per domanda successiva

    optionButton.forEach(button => {
        button.style.color = "";
        button.style.border = "";
        });

    // rimozione immagine guess
        
    const currentImage = document.querySelector('.question-image');

    if(currentImage){
        currentImage.parentNode.removeChild(currentImage);
        guessTheMeal();
    }
      
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
        if(motivationText) scoreDisplay.removeChild(motivationText);        // rimuovere elementi punteggio da home

        score = 0;
        quizHome.style.display = 'block';
        questionCont.style.display = 'none';                    // set display home
        title.style.display = 'block';
        scoreDisplay.style.display = 'none';

        let imageContainer = document.querySelector('.question-image');
        if(imageContainer) questionCont.removeChild(imageContainer);              // rimuovere img quando clicco back

        questionCont.style.top = ('45%');

        questionNumber.style.position = ('static');                 // riporto numero posizione originale
        questionNumber.style.transform = ('translate(0%)');

        // rimozione classi aggiuntive

        document.body.classList.remove('no-background');

        backButton.classList.remove('backScore');
    });

    backButton.style.display = 'block';
    questionText.style.display = 'block';
    optionList.style.display = 'block';


// pulsanti opzioni

    let options = activeQuiz[currentQuestionIndex].options.slice();             // variabile per opzioni random (slice è per creare una copia senza influenzare l'originale)
    options.sort(() => Math.random() - 0.5);

    questionText.textContent = activeQuiz[currentQuestionIndex].question;

    for (let i = 0; i < activeQuiz[currentQuestionIndex].options.length; i++) {
        let option = document.createElement('button');
        option.textContent = options[i];
        option.className = 'option';                                            // assegnazione domanda e risposte
        optionList.appendChild(option);

        option.addEventListener('click', checkAnswer);
    }

    optionButton = document.querySelectorAll('.option');
    if(title) title.style.display = 'none';

    // numero domande

    let questionNumber = document.getElementById("questionNumber")
    let currentQuestionNumber = currentQuestionIndex + 1;

    questionNumber.style.display = "block";
    questionNumber.textContent = currentQuestionNumber + "/" + quizzes[currentCategory].length;

    // nascondere immagine background

    document.body.classList.add('no-background');
}

// CHECK ANSWER

function checkAnswer() {
    const activeQuiz = quizzes[currentCategory];
    optionClicked = true;
    const optionButtons = document.querySelectorAll('.option'); // Modifica la variabile per mantenere i riferimenti ai pulsanti

    const checked = this.textContent;
    const correctAnswer = activeQuiz[currentQuestionIndex].answer;

    if (checked === correctAnswer) {
        this.style.backgroundColor = "lightgreen";
        this.style.color = "white";
        this.style.border = 'none';
        rightAnswer();              // Funzione per la risposta corretta
        score++;                        // Incremento del punteggio
        console.log("punti: " + score);
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        this.style.border = 'none';
        wrongAnswer();                      // Funzione per la risposta sbagliata
    }

    optionButtons.forEach(button => {               
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "lightgreen";        // risposta corretta anche se scelgo quella sbagliata
            button.style.color = "white";
            button.style.border = 'none';
        }
    });

    optionButtons.forEach(button => {
        button.removeEventListener('click', checkAnswer);        //// Rimozione degli eventi click dopo la risposta
    });
}

// VISUALIZZAZIONE PUNTI

function showScore (){

    scoreDisplay.style.display = 'block';     // visualizzazione punteggio

    questionNumber.style.display = "none";

    const totalQuestions = quizzes[currentCategory].length;
    const currentPoints = score;
    scorePercentage = Math.round((currentPoints/totalQuestions)*100);

    let message = "Your total score is: " + currentPoints + " out of " + totalQuestions;
    message += " (" + scorePercentage + "%)";

    // primo messaggio

    const motivationText = document.createElement('p');
    if(scorePercentage < 50){
        motivationText.textContent = "You need to practice more!";
        motivationText.style.color = "red";
    }
    else if(scorePercentage >= 50 && scorePercentage < 100) motivationText.textContent = "Not Bad!";
    else if(scorePercentage === 100) motivationText.textContent =" Amazing!";
    motivationText.className = "motivationText";
    scoreDisplay.appendChild(motivationText);

    // secondo messaggio

    const scoreText = document.createElement('p');
    scoreText.textContent = message;
    scoreText.className = "scoreText";
    scoreDisplay.appendChild(scoreText);

    // rimozione e modifica elementi
    
    questionText.style.display = 'none';
    optionList.style.display = 'none';

    let backButton = document.querySelector('.back');

// distanza pulsante back da schermata punteggio

    backButton.classList.add('backScore');

    console.log("punteggio: " + score);

    let imageContainer = document.querySelector('.question-image');
    if(imageContainer) questionCont.removeChild(imageContainer);       // rimuovere img dal punteggio
    
    questionCont.style.top = ('45%');     // ritorno alla posizione originale
}

// GUESS THE MEAL

function guessTheMeal(){

    const activeQuiz = quizzes[currentCategory];

    let imageContainer = document.createElement('img');
    imageContainer.src = activeQuiz[currentQuestionIndex].image;
    imageContainer.className = 'question-image';
    questionCont.appendChild(imageContainer);

    questionCont.style.top = ('60%');

    let backButton = document.querySelector('.back');

    if (imageContainer){
        questionNumber.style.position = ('absolute');
        questionNumber.style.top = ('-280px');
        questionNumber.style.left = ('50%');
        questionNumber.style.transform = ('translate(-50%)');
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

omelette.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("omelette");
})

fish.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("fish");
})

sweets.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("sweets");
})

pork.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("pork");
})

guess.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("guess");
    guessTheMeal();
})

// rimuovere border none su check answer