
// VARIABILI

const kids = document.getElementById('kids');
const breakfast = document.getElementById('breakfast');
const steaks = document.getElementById('steaks');
const pasta = document.getElementById('pasta');
const burgers = document.getElementById('burgers');
const missing = document.getElementById('missing');
const guess = document.getElementById('guess');

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

    optionButton.forEach(button => {
        button.style.color = "";  
        });


        
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
            logo.style.display = 'block';
            scoreDisplay.style.display = 'none';

            let imageContainer = document.querySelector('.question-image');
            if(imageContainer) document.body.removeChild(imageContainer);              // rimuovere img quando clicco back

            questionCont.style.top = ('45%');

            questionNumber.style.position = ('static');                 // riporto numero posizione originale
            questionNumber.style.transform = ('translate(0%)');


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
    if(logo) logo.style.display = 'none';

    // numero domande

    let questionNumber = document.getElementById("questionNumber")
    let currentQuestionNumber = currentQuestionIndex + 1;

    questionNumber.style.display = "block";
    questionNumber.textContent = currentQuestionNumber + "/" + quizzes[currentCategory].length;
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
        rightAnswer();              // Funzione per la risposta corretta
        score++;                        // Incremento del punteggio
        console.log("punti: " + score);
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        wrongAnswer();                      // Funzione per la risposta sbagliata
    }

    optionButtons.forEach(button => {               
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "lightgreen";        // risposta corretta anche se scelgo quella sbagliata
            button.style.color = "white";
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

    let backButton = document.querySelector('.back');

    backButton.style.bottom = '30px';     // distanza pulsante back da schermata punteggio

    console.log("punteggio: " + score);

    let imageContainer = document.querySelector('.question-image');
    if(imageContainer) document.body.removeChild(imageContainer);        // rimuovere img dal punteggio

    questionCont.style.top = ('45%');     // ritorno alla posizione originale
}

// GUESS THE MEAL

function guessTheMeal(){

    const activeQuiz = quizzes[currentCategory];

    let imageContainer = document.createElement('img');
    imageContainer.src = activeQuiz[currentQuestionIndex].image;
    imageContainer.className = 'question-image';
    document.body.appendChild(imageContainer);

    questionCont.style.top = ('60%');

    if (imageContainer){
        questionNumber.style.position = ('absolute');
        questionNumber.style.top = ('-250px');
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

guess.addEventListener('click', function(){
    currentQuestionIndex = 0
    displayQuestions("guess");
    guessTheMeal();
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
            options: ["Yes", "No", "Yes except the sweets", "It's up to me"],
            answer: "No"
        },
        {
            category: "kids",
            question: "What's the difference between Hogan's Heroes and Woody?",
            options: ["Hogan's comes with beef patty, Woody with fried chicken", "Hogan's comes with chicken breast, Woody with beef patty", "Hogan's comes with fried chicken, Woddy with beef patty", "Hogan's comes with fries, Woody doesn't"],
            answer: "Hogan's comes with chicken breast, Woody with beef patty"
        },
        {
            category: "kids",
            question: "How many nuggests in total between Poseidon, The Welcome Stranger, Dorothy and Scarecrow?",
            options: ["10", "15", "5", "20"],
            answer: "15"
        },
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
            question: "In what meal sausages are not served?",
            options: ["Winx", "Zendaye", "Jim Hawkins", "Tony"],
            answer: "Jim Hawkins"
        },
        {
            category: "breakfast",
            question: "What meal is: 2 bacon, 2 eggs, 2 toast, 2 hashbrowns?",
            options: ["Farmer", "Kiwi", "ET", "Zinzan"],
            answer: "Zinzan"
        },
        {
            category: "breakfast",
            question: "How many hashbrown in total between Zinzan, Test Match, Gateway, Zendaye?",
            options: ["4", "6", "2", "8"],
            answer: "6"
        },
        {
            category: "breakfast",
            question: "In what meal 2 eggs are not served?",
            options: ["Gilbert", "Test Match", "Endeavour", "Emirates"],
            answer: "Emirates"
        },
    ],

    steaks: [
        {
            category: "steaks",
            question: "In what meals creamy mushrooms are not served?",
            options: ["Hillary", "Highfields", "HammerThrow", "King Charles"],
            answer : "King Charles"
        },
        {
            category: "steaks",
            question: "What's the difference between Bradman and Warney?",
            options: ["Bradman has bacon, Warney has prawns","Bradman has prawns, Warney has bacon", "Bradman comes with additional creamy mushrooms", "Warney has salad, Bradman hasn't"],
            answer : "Bradman has prawns, Warney has bacon"
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
        },
        {
            category: "burgers",
            question: "How many handful of fries between Southern Cross, Jack, Peggy and BBBB?",
            options: ["1","2","3","4"],
            answer : "2"
        },
        {
            category: "burgers",
            question: "What are the same ingredient used for Ross an Monroe?",
            options: ["Mayo, leaves, tomato, rib fillet 100g, grilled onion","Leaves, tomato, rib fillet 100g, grilled onion", "Buns, leaves, tomato, rib fillet 100g, bacon", "Buns, leaves, tomato, rib fillet 100g, bacon, grilled onion"],
            answer : "Leaves, tomato, rib fillet 100g, grilled onion"
        },
    ],

    guess: [

        {
            category: "guess",
            questionGuess: "What's the meal?",
            options: ["Zest", "Tinker Bell"],
            answer : "Tinker Bell",
            image: "assets/img/different/Tinker.jpeg"
        },

        {
            category: "guess",
            options: ["Zendaye","Winx"],
            answer : "Winx",
            image: "assets/img/different/Winx.jpeg"
        },

        {
            category: "guess",
            options: ["Disco Ball","Emirates"],
            answer : "Emirates",
            image: "assets/img/different/Emirates.jpeg"
        },

        {
            category: "guess",
            options: ["Disco Ball","Emirates"],
            answer : "Emirates",
            image: "assets/img/Nicole.jpeg"
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




// spostare numero domanda sopra su guess, modificare dimensione foto