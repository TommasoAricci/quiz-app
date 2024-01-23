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

        // Oats

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
            question: "What meal is: 1 bacon, 1 grilled tomato, 3 sausages, 2 hash browns, grilled mushrooms, 1 egg, relish, 2 toasts?",
            options: ['Winx', 'Jim Hawkins', 'Webb', 'Zendaye'],
            answer: "Winx"
        },
        {
            category: "breakfast",
            question: "How many bacons between Farmer, Kiwi, Compton's Peak, Jim Hawkins?",
            options: ['5', '8', '3', '6'],
            answer: "5"
        },
        {
            category: "breakfast",
            question: "What meals come with relish?",
            options: ['Zendaye, Jim hawkins,', 'Emirates, Winx', 'Zendaye, Winx', "Compton's Peak, Zendaye"],
            answer: "Zendaye, Winx"
        },
        {
            category: "breakfast",
            question: "Merino comes with Pulled lamb, fried egg, bacon, hash browns, sausages, grilled tomato, toast, and...?",
            options: ['Grilled onion', 'Grilled mushrooms', 'Relish', 'Gravy'],
            answer: "Gravy"
        },
        {
            category: "breakfast",
            question: "What is the default cooking for a 100g rib fillet?",
            options: ['Medium rare', 'Medium', 'Rare', 'Well done'],
            answer: "Medium rare"
        },
        {
            category: "breakfast",
            question: "List the ingredient of Webb",
            options: ['Potato rosti, rib fillet 100g, grilled onion, poached egg, hollandaise sauce, toast','Rib fillet 100g, bacon, fried egg, hash brown, poached egg, toast', 'Vege rosti, rib fillet 100g, grilled onion, poached egg, hollandaise sauce, toast', 'Potato rosti, pork belly, poached eggs, hallandaise sauce, toast'],
            answer: "Potato rosti, rib fillet 100g, grilled onion, poached egg, hollandaise sauce, toast"
        },
        {
            category: "breakfast",
            question: "How many grilled tomatoes between Merino, Winx, Zendaye, Gateway?",
            options: ['3', '4', '1', '2',],
            answer: "3"
        },
        {
            category: "breakfast",
            question: "What meal doesn't come with grilled tomato?",
            options: ['Zendaye', 'Emirates', 'Test Match', 'Webb'],
            answer: "Webb"
        },
        {
            category: "breakfast",
            question: "What's the difference between Peachy and KK?",
            options: ['Peachy comes as a wrap, KK as a burger', 'Peachy coms as a burger, KK as a wrap', 'Peachy has scrambled egg, KK has fried egg', 'Peachy has two bacon, KK has one bacon'],
            answer: "Peachy comes as a wrap, KK as a burger"
        },
        {
            category: "breakfast",
            question: "What are the ingredients of Compton's Peak?",
            options: ['Turkish bread, tomato sauce, cheddar cheese, bacon, onion rings, poached egg, hollandaise sauce', 'Turkish bread, tomato sauce, cheddar cheese, fried egg, bacon, onion rings,', 'Potato rosti, bacon, sausages, onion rings, baked beans, toast', 'Turkish bread, relish, wilted spinach, vege rosti, mash avo, fresh chilli'],
            answer: "Turkish bread, tomato sauce, cheddar cheese, bacon, onion rings, poached egg, hollandaise sauce"
        },
        {
            category: "breakfast",
            question: "What meal doesn't come with bacon?",
            options: ['Kiwi', 'Gateway', 'Gilbert', 'True Blue'],
            answer: "Gilbert"
        },
        {
            category: "breakfast",
            question: "How many scrambled eggs between True Blue, Peachy, 'Test Match', 'Bonza?",
            options: ['Two full', 'One and half', 'One full', 'Two and half'],
            answer: "Two full"
        },
        {
            category: "breakfast",
            question: "How many toasts between ET, KK, Endevour, Compton's Peak?",
            options: ['Kiwi', 'Gateway', 'Gilbert', 'True Blue'],
            answer: "Gilbert"
        },
        {
            category: "breakfast",
            question: "Gateway comes with rib fillet 100g, bacon, fried egg, hash browns, relish, toast, and...?",
            options: ['Grilled mushrooms', 'Gravy', 'Grilled onion', 'Poached egg'],
            answer: "Grilled mushrooms"
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
        },
        {
            category: "steaks",
            question: "What steaks are available in Empire State Bulding?",
            options: ["180g and 300g", '200g and 300g', '100g and 200g', '180g and 200g'],
            answer : "180g and 300g"
        },
        {
            category: "steaks",
            question: "What meal is: Rib fillet 200g or 100g, creamy mushrooms, waffled fries, salad?",
            options: ["Hillary", "Highfields", "Empire State Building", 'Buckingham Palace'],
            answer : "Hillary"
        },
        {
            category: "steaks",
            question: "How many handfuls of normal fries between Thrid, Prince William, Bradman, Highfields?",
            options: ["2", '3', '1', '4'],
            answer : "2"
        },
        {
            category: "steaks",
            question: "What meal comes with salad?",
            options: ["King Charles", 'London', 'Highfields', 'Empire State Building'],
            answer : "King Charles"
        },
        {
            category: "steaks",
            question: "What are the ingredients of London?",
            options: ['Rib fillet 180g or 300g, grilled onion, bacon, sausages, fried egg, fries', 'Rib fillet 100g or 200g, grilled onion, bacon, sausages, fried egg, fries', 'Rib fillet 200g or 100g, mashed potato, rocky carrots, yoghurt and nuts, gravy', 'Rib fillet 180g or 300g, mashed potato, rocky carrots, yoghurt and nuts, gravy'],
            answer : "Rib fillet 180g or 300g, grilled onion, bacon, sausages, fried egg, fries"
        },
        {
            category: "steaks",
            question: "How many rocky carrots between Buckingham Palace, Hillary, Third, London?",
            options: ['6', '9', '3', '12'],
            answer : "6"
        },
        {
            category: "steaks",
            question: "What steak comes normally with Prince William, Buckingham Palace, King Charles?",
            options: ['100g', '250g', '300g', '200'],
            answer : "250g"
        },
        {
            category: "steaks",
            question: "How many salads between Warney, King Charles, Bradman, Hillary?",
            options: ['4', '3', '2', '1'],
            answer : '4'
        },

        // salads

        {
            category: "steaks",
            question: "In what meal halloumi is served?",
            options: ['Roger Banister', 'Julius', 'Skippy', 'Paper White'],
            answer : 'Roger Banister'
        },
        {
            category: "steaks",
            question: "What of these meals is available in a half serve too?",
            options: ['Julius', 'Cherry Blossom', 'Paper White', 'Roger Banister'],
            answer : 'Julius'
        },
        {
            category: "steaks",
            question: "What meals are served with chilli?",
            options: ['Paper White, Skippy, Roger Banister', 'Rooster, Julius, Paper White', 'Skippy, Cherry Blossom, PAB', 'PAB, Paper White, SKippy'],
            answer : 'Paper White, Skippy, Roger Banister'
        },
        {
            category: "steaks",
            question: "How many prawns are served in a half serve of PAB?",
            options: ['5', '10', '4', '3'],
            answer : '5'
        },
        {
            category: "steaks",
            question: "Julius comes with sliced chicken breast, green leaves, crispy bacon, poached egg, creamy parmesan, parmesan cheese, and...?",
            options: ['Croutons', 'Monet tomatoes', 'Coleslaw', 'Italian dressing'],
            answer : 'Croutons'
        },
        {
            category: "steaks",
            question: "What are the same ingredients for Skippy and Paper White?",
            options: ['Green leaves, coleslaw, monet tomatoes, italian dressing, mash avo, fresh chilli, nuts', 'Monet tomatoes, crispy bacon, italian dressing', 'Green leaves, coleslaw, poached egg, parmesan dressing, parmesan', 'Monet tomatoes, italian dressing, hollandaise sauce, nuts'],
            answer : 'Green leaves, coleslaw, monet tomatoes, italian dressing, mash avo, fresh chilli, nuts'
        },
        {
            category: "steaks",
            question: "What meals are served with nuts?",
            options: ['Paper White, Skippy, Cherry Blossom, Roger Banister', 'Skippy, Cherry Blossom, PAB, Julius', 'Paper White, Skippy, Roger Banister, Rooster', 'PAB, Julius, Paper White, Rooster'],
            answer : 'Paper White, Skippy, Cherry Blossom, Roger Banister'
        },
        {
            category: "steaks",
            question: "What meal is served with smoked salmon?",
            options: ['Skippy', 'Paper White', 'Cherry Blossom', 'Roger Banister'],
            answer : 'Paper White'
        },
        {
            category: "steaks",
            question: "What meal is served with cajun chicken breast?",
            options: ['Rooster', 'Julius', 'Paper White', 'Cherry Blossom'],
            answer : 'Rooster'
        },
        {
            category: "steaks",
            question: "Cherry Blossom comes with grilled salmon or barramundi, green leaves, coleslaw, monet tomatoes, italian dressing, nuts, and...",
            options: ['Peri peri mayo', 'Hollandaise sauce', 'Croutons', 'Fresh chilli'],
            answer : 'Hollandaise sauce'
        },


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
            question: "What are the ingredients of Green & Gold",
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
            question: "What are the same ingredients for Ross and Monroe?",
            options: ["Mayo, leaves, tomato, rib fillet 100g, grilled onion","Leaves, tomato, rib fillet 100g, grilled onion", "Buns, leaves, tomato, rib fillet 100g, bacon", "Buns, leaves, tomato, rib fillet 100g, bacon, grilled onion"],
            answer : "Leaves, tomato, rib fillet 100g, grilled onion"
        },
    ],

    omelette: [
        {
            category: "omelette",
            question: "How many handfuls of fries between Southern Cross, Jack, Peggy and BBBB?",
            options: ["1","2","3","4"],
            answer : "2"
        }

    ],

    fish: [
        {
            category: "fish",
            question: "How many handfuls of fries between Southern Cross, Jack, Peggy and BBBB?",
            options: ["1","2","3","4"],
            answer : "2"
        }

    ],

    sweets: [
        {
            category: "sweets",
            question: "How many handfuls of fries between Southern Cross, Jack, Peggy and BBBB?",
            options: ["1","2","3","4"],
            answer : "2"
        }

    ],

    pork: [
        {
            category: "pork",
            question: "How many toasts between ET, Val, Sheperd's Delight, Mount Hood?",
            options: ['5','8', '7', '3'],
            answer: "5"
        },
        {
            category: "pork",
            question: "In what of these meals mashed potato is served?",
            options: ['Paddy 0', 'Tahiti', 'Abercorn', 'Police'],
            answer: "Tahiti"
        },
        {
            category: "pork",
            question: "In what of these meals grilled onion is served?",
            options: ['Mount Hood', 'Stockmans Treat', "Sheperd's Delight", "Shearer's Classic"],
            answer: "Sheperd's Delight"
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