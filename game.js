// 1. नंबर को पहले ही पूर्णांक (integer) बना लें
let computerGuess = Math.floor(Math.random() * 100); 

console.log("Hint (for testing):", computerGuess);

let userNumber; // स्पेलिंग सही रखें

// 2. 'do-while' लूप का उपयोग करें ताकि गेम कम से कम एक बार जरूर चले
do {
    // ध्यान दें: 'prompt' केवल ब्राउज़र में काम करेगा, GitHub टर्मिनल में नहीं
    userNumber = Number(prompt("Guess a number between 0 and 100:"));

    if (computerGuess === userNumber) {
        console.log("Congratulations! Your guess is right.");
    } 
    else {
        if (computerGuess < userNumber) {
            console.log("Your guess is too big, think small.");
        } 
        else if (computerGuess > userNumber) {
            console.log("Your guess is too small, think big.");
        }
    }
} while (userNumber !== computerGuess); // 3. तब तक चलाएं जब तक सही गेस न मिल जाए
