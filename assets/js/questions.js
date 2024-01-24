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
            question: "In which meal is maple syrup not served?",
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
            question: "In which of these meals are rasperries served?",
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
            question: "In which meal are two hash browns not served?",
            options: ["Jim Hawkins", "Test Match", "Emirates", "Zinzan"],
            answer: "Emirates"
        },
        {
            category: "breakfast",
            question: "In which meal are sausages not served?",
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
            question: "In which meal are 2 eggs not served?",
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
            question: "How many scrambled eggs between True Blue, Peachy, Test Match, 'Bonza? (One = 1 egg)",
            options: ['2', '4', '1', '3'],
            answer: "4"
        },
        {
            category: "breakfast",
            question: "How many toasts between ET, KK, Endevour, Compton's Peak?",
            options: ['2', '3', '6', '4'],
            answer: "4"
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
            question: "In which meals are creamy mushrooms not served?",
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

        // salads

        {
            category: "steaks",
            question: "In which meal is haloumi served?",
            options: ['Roger Banister', 'Julius', 'Skippy', 'Paper White'],
            answer : 'Roger Banister'
        },
        {
            category: "steaks",
            question: "Which of these meals is available in a half serve?",
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
            question: "Julius comes with sliced chicken breast, green leaves, crispy bacon, poached egg, creamy parmesan, parmesan cheese, and...?",
            options: ['Croutons', 'Monet tomatoes', 'Coleslaw', 'Italian dressing'],
            answer : 'Croutons'
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
            question: "Cherry Blossom comes with grilled salmon or barramundi, green leaves, coleslaw, monet tomatoes, italian dressing, nuts, and...",
            options: ['Peri peri mayo', 'Hollandaise sauce', 'Croutons', 'Fresh chilli'],
            answer : 'Hollandaise sauce'
        },

        // soups

        {
            category: "steak",
            question: "What meal comes with Haystacks tomato soup?",
            options: ['Jumping Frog', 'Mast', 'Mizzen', 'Warhol'],
            answer : 'Warhol'
        },
        {
            category: "steak",
            question: "What meal is: Pumpkin soup, sliced chorizo, grilled onion, turkish bread?",
            options: ['Jumping Frog', 'Mast', 'Mizzen', 'Warhol'],
            answer : 'Mast'
        },
        {
            category: "steak",
            question: "What meals are suitable for vegetarians?",
            options: ['Jumping Frog, Warhol', 'Mast, Mizzen', 'Mizzen, Warhol', 'Warhol, Mast'],
            answer : 'Jumping Frog, Warhol'
        },
        {
            category: "steak",
            question: "What are the ingredients of Jumping Frog?",
            options: ['Pumpkin soup, turkish bread', 'Pumpkin soup, grilled chorizo, grilled onion, turkish bread', 'Haystacks tomato soup, croutons, puring cream', 'Pumkin soup, sliced chicken breast, grilled onion, pouring cream'],
            answer : 'Pumpkin soup, turkish bread'
        },
        {
            category: "steak",
            question: "Mizzen comes with: pumpkin soup, sliced chicken breast, grilled onion, and...?",
            options: ['Pouring cream', 'Croutons', 'Turkish bread', 'Sliced chorizo'],
            answer : 'Pouring cream'
        },

        /*

        {
            category: "steaks",
            question: "What meal is served with cajun chicken breast?",
            options: ['Rooster', 'Julius', 'Paper White', 'Cherry Blossom'],
            answer : 'Rooster'
        },
        {
            category: "steaks",
            question: "What are the same ingredients for Skippy and Paper White?",
            options: ['Green leaves, coleslaw, monet tomatoes, italian dressing, mash avo, fresh chilli, nuts', 'Monet tomatoes, crispy bacon, italian dressing', 'Green leaves, coleslaw, poached egg, parmesan dressing, parmesan', 'Monet tomatoes, italian dressing, hollandaise sauce, nuts'],
            answer : 'Green leaves, coleslaw, monet tomatoes, italian dressing, mash avo, fresh chilli, nuts'
        },
        {
            category: "steaks",
            question: "How many prawns are served in a half serve of PAB?",
            options: ['5', '10', '4', '3'],
            answer : '5'
        },
        {
            category: "steaks",
            question: "How many salads between Warney, King Charles, Bradman, Hillary?",
            options: ['4', '3', '2', '1'],
            answer : '4'
        },
        {
            category: "steaks",
            question: "What steaks are available in Empire State Bulding?",
            options: ["180g and 300g", '200g and 300g', '100g and 200g', '180g and 200g'],
            answer : "180g and 300g"
        },

        */
    ],

    pasta: [
        {
            category: "pasta",
            question: "What's inside Picasso?",
            options: ["Pasta, prawns, sliced chorizo, onion, chilli, creamy sauce", "Pasta, prawns, spinach, onion, chilli, Haystacks sauce", "Pasta, chorizo, prawns, monet tomatoes, onion, Haystacks sauce", "Pasta, grilled mushrooms, crispy bacon, creamy sauce"],
            answer : "Pasta, prawns, spinach, onion, chilli, Haystacks sauce"
        },
        {
            category: "pasta",
            question: "What pasta is suitable for vegetarians?",
            options: ["Blackbeard", 'Picasso', 'Tati', 'There is no any one'],
            answer : "There is no any one"
        },
        {
            category: "pasta",
            question: "What pasta is not available in a half serve?",
            options: ['Fotis', 'Blackbeard', 'Picasso', 'Tati'],
            answer : "Blackbeard"
        },
        {
            category: "pasta",
            question: "What meal is served with prawns?",
            options: ['Blackbeard, Picasso, Tati', 'Tati, Nicole, Dali', 'Blackbeard, Dali, Picasso', 'Tati, Picasso, Fotis'],
            answer : 'Blackbeard, Picasso, Tati'
        },
        {
            category: "pasta",
            question: "What meal is served with chicken?",
            options: ['Dali, Fotis', 'Fotis, Blackbeard', 'Dali, Tati', 'Blackbeard, Picasso'],
            answer : 'Dali, Fotis'
        },
        {
            category: "pasta",
            question: "Fotis comes with fettuccine, chicken breast, grilled mushroom, creamy sauce, parmesa cheese and...?",
            options: ['Spinach', 'Smoked salmon', 'Prawns', 'Monet tomatoes'],
            answer : 'Spinach'
        },
        {
            category: "pasta",
            question: "What's included in the creamy sauce?",
            options: ['Onion', 'Monet tomatoes', 'Chilli', 'Only cooking cream'],
            answer : 'Onion'
        },
        {
            category: "pasta",
            question: "Which of these meals comes with creamy Haystacks tomato sauce?",
            options: ['Blackbeard, Picasso, Dali', 'Tati, Nicole, Fotis', 'Blackbeard, Dali, Tati', 'Tati, Picasso, Fotis'],
            answer : 'Blackbeard, Picasso, Dali'
        },
        {
            category: "pasta",
            question: "How many grams of chicken breast are served in a full serve of Fotis?",
            options: ['200g', '100g', '150g', '300g'],
            answer : '200g'
        },
        {
            category: "pasta",
            question: "What are the ingredients of Nicole?",
            options: ['Pasta, grilled mushrooms, crispy diced bacon, creamy sauce, parmesan cheese', 'Pasta, sliced chicken breast, spinach, Haystacks sauce', 'Pasta, prawns, spinach, onion, Haystacks sauce, parmesan cheese', 'Pasta, grilled mushrooms, sliced chorizo, creamy sauce, parmesan cheese'],
            answer : 'Pasta, grilled mushrooms, crispy diced bacon, creamy sauce, parmesan cheese'
        },
        {
            category: "pasta",
            question: "What meal comes with smoked salmon?",
            options: ['Tati', 'Dali', 'Nicole', 'Blackbeard'],
            answer : 'Tati'
        },

        // rosti

        {
            category: "pasta",
            question: "How many toasts between Benny Fit, Apollo 11, Disco Ball?",
            options: ['4', '3', '2', '6'],
            answer : '4'
        },
        {
            category: "pasta",
            question: "What meal is: Turkish bread, relish, wilted spinach, vege rosti, mash avo, chilli?",
            options: ['Apollo 11', 'Disco Ball', 'Ripper', 'Benny Fit'],
            answer : 'Apollo 11'
        },
        {
            category: "pasta",
            question: "Which of these meals is suitable for vegetarians?",
            options: ['Benny Fit', 'Apollo 11', 'Disco Ball', 'Orange Progress'],
            answer : 'Benny Fit'
        },
        {
            category: "pasta",
            question: "Disco Ball comes with vege rosti, haloumi, poached egg, hollandaise sauce, toast, and...?",
            options: ['Wilted spinach', 'Mash avo', 'Grilled tomato', 'Fried egg'],
            answer : 'Wilted spinach'
        },
        {
            category: "pasta",
            question: "In which of these meals is chilli served?",
            options: ['Apollo 11', 'Disco Ball', 'Nicole', 'Tati'],
            answer : 'Apollo 11'
        },

        // PIES

        {
            category: "pasta",
            question: "What meal is: Steak and mushroom pie, mashed potato, gravy?",
            options: ['Orange Progress', 'Barrett Browning', 'Ripper', 'Warhol'],
            answer : 'Barrett Browning'
        },
        {
            category: "pasta",
            question: "What meal is: Steak and mushroom pie, fries, gravy?",
            options: ['Orange Progress', 'Barrett Browning', 'Ripper', 'Mizzen'],
            answer : 'Ripper'
        },
        {
            category: "pasta",
            question: "What are the ingredients of Orange Progress?",
            options: ['Steak and mushroom pie, mashed potato, gravy', 'Steak and mushroom pie, fries, gravy', 'Steak and mushroom pie, gravy', 'Steak and mushroom pie, mashed potato, fries, gravy'],
            answer : 'Steak and mushroom pie, gravy'
        },
        {
            category: "pasta",
            question: "Is there any vegeterian pie?",
            options: ['Yes, Orange Progress', 'Yes, Barret Browning', 'Yes, Ripper', 'No'],
            answer : 'No'
        },
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
        {
            category: "burgers",
            question: "What burger is suitable for vegetarians?",
            options: ['99', 'BBBB', 'Robot', 'There is no any one'],
            answer : "99"
        },
        {
            category: "burgers",
            question: "What sandwich is suitable for vegetarians?",
            options: ['Ottoman', 'Ross', 'Club Sandwich', 'There is no any one'],
            answer : "Ottoman"
        },
        {
            category: "burgers",
            question: "What wrap is suitable for vegetarians?",
            options: ['Camber, Little John', 'Story, Big Bertha', 'Six Pack, Little John', 'There is no any one'],
            answer : "Camber, Little John"
        },
        {
            category: "burgers",
            question: "What burgers doesn't come with salad?",
            options: ['BBBB', '99', 'Robot', 'Thrilla from Manilla'],
            answer : 'Thrilla from Manilla'
        },
        {
            category: "burgers",
            question: "How many bacons between Tarzan, Club Sandwich, Robot, Southern Cross?",
            options: ['1','2','3','4'],
            answer : '2'
        },
        {
            category: "burgers",
            question: "Which of these sandwich comes with turkish bread?",
            options: ['Lincoln', 'Peggy', 'Roar', 'Club Sandwich'],
            answer : "Lincoln"
        },
        {
            category: "burgers",
            question: "What wrap comes with barramundi?",
            options: ['Powercat', 'Cheika', 'Border Leicester', 'Big Bertha'],
            answer : "Powercat"
        },
        {
            category: "burgers",
            question: "How many chicken breasts in total between Big Bertha, Club Sandwich, Cheika, Scenic Rim?",
            options: ['4','5','3','2'],
            answer : "4"
        },
        {
            category: "burgers",
            question: "What sandwich comes with chicken breast, mash avo, green leaves, tomato, mayo?",
            options: ['Peggy', 'Roar', 'Jack', 'Ross'],
            answer : "Peggy"
        },
        {
            category: "burgers",
            question: "BBBB comes with buns, beef patty, bacon, fried egg, mayo, green leaves, tomato, fries, salad, and...?",
            options: ['Grilled onion', 'Coleslaw', 'Cheddar cheese', 'Halloumi'],
            answer : "Grilled onion"
        },
        {
            category: "burgers",
            question: "What sandwich comes with ham, cheddar cheese, tomato?",
            options: ['Tarzan', 'Peggy', 'Jack', 'Ottoman'],
            answer : "Tarzan"
        },
        {
            category: "burgers",
            question: "What burger is not served with fries?",
            options: ['Southern Cross', 'JFK', 'Virgin', 'Everyone is served with fries'],
            answer : "Southern Cross"
        },
        {
            category: "burgers",
            question: "What can you reccomend if someone asks for a toast with ham and cheese?",
            options: ['Tarzan', 'Ottoman', 'Peggy', 'Jack'],
            answer : "Tarzan"
        },
        {
            category: "burgers",
            question: "Is the low gluten bread an option for sandwiches and burgers?",
            options: ['Yes', 'No', 'Only for sadwiches', 'Only for burgers'],
            answer : "Yes"
        },
        {
            category: "burgers",
            question: "What wrap comes with Battered fish?",
            options: ['Anne', 'Story', 'Cheika', 'Six Pack'],
            answer : "Anne"
        },
        {
            category: "burgers",
            question: "What sandwich comes with sourdough toast?",
            options: ['Roar', 'Ross', 'Jack', 'Ottoman'],
            answer : "Roar"
        },
        {
            category: "burgers",
            question: "What burger is: Buns, beef patty, cheddar cheese, hash brown, fried egg, BBQ sauce, hollandaise sauce, picke, fries?",
            options: ['Thrilla from Manilla', 'Scenic Rim', 'Gun Powder', 'Monroe'],
            answer : "Thrilla from Manilla"
        },
    ],

    omelette: [
        {
            category: "omelette",
            question: "Which of these meals comes as a scrambled eggs?",
            options: ['Cathy Freeman', 'Superbrat', 'Sherpa', 'Cobalt'],
            answer : 'Sherpa'
        },
        {
            category: "omelette",
            question: "Which of these meals comes with egg white?",
            options: ['Barty', 'Cobalt', 'Mark Webber', 'Carbon Tax'],
            answer : 'Cobalt'
        },
        {
            category: "omelette",
            question: "Which of these meals comes with 2 hash browns?",
            options: ['Treasure Map', 'Sherpa', 'Super Brat', 'Carbon Tax'],
            answer : 'Carbon Tax'
        },
        {
            category: "omelette",
            question: "Which of these meals is suitable for vegetarians?",
            options: ['Cobalt', 'Stephanie Rice', 'Barty', 'Carbon Tax'],
            answer : 'Barty'
        },
        {
            category: "omelette",
            question: "How many chicken breasts are served in a full serve of Stephanie Rice?",
            options: ['1', '2','3', '4'],
            answer : '2'
        },
        {
            category: "omelette",
            question: "How many toasts in total between Sherpa, half serve of Stephanie Rice, Elle Macpherson, Mark Webber?",
            options: ['7', '6', '8', '5'],
            answer : '7'
        },
        {
            category: "omelette",
            question: "Are all the omelettes available in a half serve too?",
            options: ['Yes, all of them', 'No, no any of them', 'Yes, except Cathy Freeman, Cobalt, Super Brat', 'Yes except Treasure Map, Elle Macpherson, Mark Webber'],
            answer : 'Yes, except Cathy Freeman, Cobalt, Super Brat'
        },
        {
            category: "omelette",
            question: "",
            options: ['7', '6', '8', '5'],
            answer : '7'
        },

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
            question: "In which of these meals is mashed potato served?",
            options: ['Paddy 0', 'Tahiti', 'Abercorn', 'Police'],
            answer: "Tahiti"
        },
        {
            category: "pork",
            question: "In which of these meals is grilled onion served?",
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