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
            options: ["Hogan's comes with beef patty, Woody with fried chicken", "Hogan's comes with chicken breast, Woody with beef patty", "Hogan's comes with fried chicken, Woody with beef patty", "Hogan's comes with fries, Woody doesn't"],
            answer: "Hogan's comes with chicken breast, Woody with beef patty"
        },
        {
            category: "kids",
            question: "How many nuggets between Poseidon, The Welcome Stranger, Dorothy and Scarecrow?",
            options: ["10", "15", "5", "20"],
            answer: "15"
        },
        {
            category: "kids",
            question: "What's the difference between Silver and Scarecrow?",
            options: ["Silver comes with fries, Scarecrow doesn't","Silver comes with rib fillet 100g and Scarecrow with fried chicken", "Silver comes with fries, Scarecrow doesn't", "Silver comes with fried chicken, Scarecrow with rib fillet 100g"],
            answer: "Silver comes with fried chicken, Scarecrow with rib fillet 100g"
        },
        {
            category: "kids",
            question: "What comes with Bell Song?",
            options: ["Waffle, strawberry, caramel sauce","Pancakes, strawberry, caramel sauce", "Waffle, whipped cream, strawberry", "Pancakes, strawberry, maple syrup"],
            answer: "Waffle, strawberry, caramel sauce"
        },
        {
            category: "kids",
            question: "What meal is: Chicken nuggets (5), hash brown, tomato sauce?",
            options: ["Poseidon", "The Welcome Stranger", "Dorothy", "Lego"],
            answer: "The Welcome Stranger"
        },
        {
            category: "kids",
            question: "BBC comes with baked beans, melted pizza cheese, and...?",
            options: ["Nothing else", "Toast", "Gravy", "Bacon"],
            answer: "Toast"
        },
        {
            category: "kids",
            question: "Lego comes with battered fish, fries, and...?",
            options: ["Nothing else", "Tartare sauce", "Toast", "Lemon wedge"],
            answer: "Nothing else"
        },
        {
            category: "kids",
            question: "How many bacon between Doc, Donald Duck, Naughty, Sail Boat?",
            options: ["4", "3", "2", "1"],
            answer: "3"
        },
        {
            category: "kids",
            question: "What does Snow White come with?",
            options: ["Pasta, mince beef", "Pasta, mince beef, gravy", "Mince beef, toast", "Pasta, mince beef, pizza cheese"],
            answer: "Pasta, mince beef"
        },
        {
            category: "kids",
            question: "How many handfuls of fries between Poseidon, Silver, COT, The Welcome Stranger?",
            options: ["4", "3", "2", "1"],
            answer: "2"
        },
        {
            category: "kids",
            question: "In what meal maple syrup is not served?",
            options: ["Naughty", 'Sleepy', 'Minnie Mouse', 'Bell Song'],
            answer: "Bell Song"
        },
        {
            category: "kids",
            question: "What doesn't come with granola?",
            options: ["12 Meters",'Base Line', 'Dennis Connor', 'Syd Fisher'],
            answer: "Base Line"
        },
        {
            category: "kids",
            question: "What the ingredients of Shooter?",
            options: ['Bircher, berry compote, yoghurt, nuts', 'Granola, berry compote, yoghurt, nuts', 'Bircher, yoghurt, maple syrup, pouring cream', 'Bircher, rasperries, berry compote, yoghurt, nuts'],
            answer: "Bircher, berry compote, yoghurt, nuts"
        },
        {
            category: "kids",
            question: "What doesn't come as a porridge?",
            options: ['Base Line', 'Chris Dixon', 'Syd Fisher', '12 Meters'],
            answer: "Syd Fisher"
        },
        {
            category: "kids",
            question: "Base Line comes with Porridge, berry compote, strawberry, and...?",
            options: ['Pouring cream', 'Maple syrup', 'Yoghurt', 'Nuts'],
            answer: "Pouring cream"
        },
        {
            category: "kids",
            question: "In what of these meals rasperries are served?",
            options: ['Base Line', 'Syd Fisher', 'Shooter', 'Brixton'],
            answer: "Brixton"
        },
        {
            category: "kids",
            question: "What meal is: Bircher, fruit salad, rasperries, berry compote, yoghurt, nuts?",
            options: ['Dennis Connor', '12 Meters', 'Brixton', 'Syd Fisher'],
            answer: "Brixton"
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
            question: "In what meal two hash browns are not served?",
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
            question: "What meal is: 2 bacon, 2 eggs, 2 toast, 2 hash browns?",
            options: ["Farmer", "Kiwi", "ET", "Zinzan"],
            answer: "Zinzan"
        },
        {
            category: "breakfast",
            question: "How many hash browns in total between Zinzan, Test Match, Gateway, Zendaye?",
            options: ["4", "6", "2", "8"],
            answer: "6"
        },
        {
            category: "breakfast",
            question: "In what meal 2 eggs are not served?",
            options: ["Gilbert", "Test Match", "Endeavour", "Emirates"],
            answer: "Emirates"
        },
        {
            category: "breakfast",
            question: "How many toasts between ET, Val, Sheperd's Delight, Mount Hood?",
            options: ['5','8', '7', '3'],
            answer: "5"
        },
        {
            category: "breakfast",
            question: "What meal is: 1 bacon, 1 grilled tomato, 3 sausages, 2 hash browns, grilled mushrooms, 1 egg, relish, 2 toasts?",
            options: ['Winx', 'Jim Hawkins', 'Webb', 'Zendaye'],
            answer: "Winx"
        },
        {
            category: "breakfast",
            question: "In what of these meals grilled onion is served?",
            options: ['Mount Hood', 'Stockmans Treat', "Sheperd's Delight", "Shearer's Classic"],
            answer: "Sheperd's Delight"
        },
        {
            category: "breakfast",
            question: "What is the default cooking for a 100g rib fillet?",
            options: ['Medium rare', 'Medium', 'Rare', 'Well done'],
            answer: "Medium rare"
        },
        {
            category: "breakfast",
            question: "In what of these meals mashed potato is served?",
            options: ['Paddy 0', 'Tahiti', 'Abercorn', 'Police'],
            answer: "Tahiti"
        },
        {
            category: "breakfast",
            question: "Merino comes with Pulled lamb, fried egg, bacon, hash browns, sausages, grilled tomato, toast, and...?",
            options: ['Grilled onion', 'Grilled mushrooms', 'Relish', 'Gravy'],
            answer: "Gravy"
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
            options: ["Buns, mayo, green leaves, tomato, beef patty, cheese, fried egg, hash brown, bacon",
            "Buns peri peri mayo, green leaves, tomato, beef patty, bacon",
            "Buns, mayo, green leaves, tomato, fried chicken, cheese",
            "Buns, mayo, green leaves, tomato, beef patty, cheese, bacon, hash brown"],
            answer : "Buns, mayo, green leaves, tomato, beef patty, cheese, bacon, hash brown"
        },
        {
            category: "burgers",
            question: "How many handfuls of fries between Southern Cross, Jack, Peggy and BBBB?",
            options: ["1","2","3","4"],
            answer : "2"
        },
        {
            category: "burgers",
            question: "What are the same ingredients used for Ross and Monroe?",
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
            image: "assets/img/Tinker.jpeg"
        },
        {
            category: "guess",
            options: ["Zendaye","Winx"],
            answer : "Winx",
            image: "assets/img/Winx.jpeg"
        },
        {
            category: "guess",
            options: ["Disco Ball","Emirates"],
            answer : "Emirates",
            image: "assets/img/Emirates.jpeg"
        },
        {
            category: "guess",
            options: ["Nicole","Fotis"],
            answer : "Nicole",
            image: "assets/img/Nicole.jpeg"
        },
        {
            category: "guess",
            options: ["Ashes","Tuber"],
            answer : "Ashes",
            image: "assets/img/Ashes.jpeg"
        },
        {
            category: "guess",
            options: ["Merino","Test Match"],
            answer : "Merino",
            image: "assets/img/Merino.jpeg"
        },
        {
            category: "guess",
            options: ["ACDC","Red Devon"],
            answer : "ACDC",
            image: "assets/img/ACDC.jpeg"
        },
        {
            category: "guess",
            options: ["Michael Schumacher","Alisha"],
            answer : "Michael Schumacher",
            image: "assets/img/Michael.jpeg"
        },
        {
            category: "guess",
            options: ["Stirling Moss","Mountie"],
            answer : "Mountie",
            image: "assets/img/Mountie.jpeg"
        },
        {
            category: "guess",
            options: ["Ross","Ottoman"],
            answer : "Ottoman",
            image: "assets/img/Ottoman.jpeg"
        },
        {
            category: "guess",
            options: ["Poutine","Sound of Music"],
            answer : "Poutine",
            image: "assets/img/Poutine.jpeg"
        },
        {
            category: "guess",
            options: ["Ripper","Orange Progress"],
            answer : "Ripper",
            image: "assets/img/Ripper.jpeg"
        },
        {
            category: "guess",
            options: ["Police","Snow White"],
            answer : "Snow White",
            image: "assets/img/Snow.jpeg"
        },
        {
            category: "guess",
            options: ["Super Brat","Cathy Freeman"],
            answer : "Super Brat",
            image: "assets/img/SuperBrat.jpeg"
        },
        {
            category: "guess",
            options: ["Wimbledon","Ozzy Open"],
            answer : "Wimbledon",
            image: "assets/img/Wimbledon.jpeg"
        },
        {
            category: "guess",
            options: ["Zendaye","Zinzan"],
            answer : "Zendaye",
            image: "assets/img/Zendaye.jpeg"
        },
        {
            category: "guess",
            options: ["Arctic","Washer"],
            answer : "Arctic",
            image: "assets/img/Arctic.jpeg"
        },
        {
            category: "guess",
            options: ["Disco Ball","Benny Fit"],
            answer : "Disco Ball",
            image: "assets/img/Disco.jpeg"
        },


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




// sistemare home e categorie - inserire domande - media queries