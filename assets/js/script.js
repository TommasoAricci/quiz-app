
// VARIABILI

const kids = document.getElementById('kids');
const breakfast = document.getElementById('breakfast');
const steaks = document.getElementById('steaks');
const pasta = document.getElementById('pasta');
const burgers = document.getElementById('burgers');

let quizHome = document.querySelector('.quiz-home');
const buttonCategory = document.querySelectorAll('.buttonCategory');

let optionList = document.getElementById('option-list');
let questionText = document.getElementById('questionText');
const categories = document.querySelector('.categories');
const questionCont = document.querySelector('.question-container');
let buttonList = document.querySelector('.button');

// DOMANDE
const quiz = {
    kids: [  
        {
            category: "kids",
            question: "What's inside Woody?",
            options: ["Burger buns, cheddar cheese, beef patty, fries", "Burger buns, BBQ sauce, chicken breast", "Burger buns, fried chicken, fries"],
            answer: "Burger buns, cheddar cheese, beef patty, fries"
        },

        {
            category: "kids",
            question: "What's the difference between Sleepy and Minnie?",
            options: ["Sleepy has maple syrup, Minnie has berry compote", "Sleepy has only additional ice cream", "Sleepy has ice cream, Minnie has strawberry"],
            answer: "Sleepy has ice cream, Minnie has strawberry"
        }
    ],

    breakfast: [
        {
            category: "breakfast",
            question: "What's the difference between Val and Farmer?",
            options: ["Burger buns, cheddar cheese, beef patty, fries", "Burger buns, BBQ sauce, chicken breast", "Burger buns, fried chicken, fries"],
            answer: "Burger buns, cheddar cheese, beef patty, fries"
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

    function displayQuestion(category){
        
        currentCategory = category;

        questionText.textContent = quiz[currentCategory].question;
        for(let i = 0; i < quiz[currentCategory].options.length; i++){
            buttonList.textContent = quiz[currentCategory].options[i];
        }
    }

    kids.addEventListener('click', function(){ // collegamento pulsante "kids" alle domande
        displayQuestion("kids");
    })