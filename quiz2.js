function StartQuiz1() {

let score = 0;


if (quizLanguage === "en") {


let answer1 = prompt("Dogs have a better sense of smell than humans. (True/False)");

if(answer1 === "True") score++;


let answer2 = prompt("Dogs can only see in black and white. (True/False)");

if(answer2 === "False") score++;


let answer3 = prompt("Chocolate is safe for dogs in small amounts. (True/False)");

if(answer3 === "False") score++;


let answer4 = prompt("Dogs cannot understand their owner's mood. (True/False)");

if(answer4 === "False") score++;


let answer5 = prompt("All dogs can swim naturally. (True/False)");

if(answer5 === "False") score++;


alert("You completed the quiz! Score: " + score + "/5");


}


else {


let answer1 = prompt("Οι σκύλοι έχουν καλύτερη όσφρηση από τους ανθρώπους. (Σωστό/Λάθος)");

if(answer1 === "Σωστό") score++;


let answer2 = prompt("Οι σκύλοι βλέπουν μόνο ασπρόμαυρα. (Σωστό/Λάθος)");

if(answer2 === "Λάθος") score++;


let answer3 = prompt("Η σοκολάτα είναι ασφαλής για τους σκύλους σε μικρές ποσότητες. (Σωστό/Λάθος)");

if(answer3 === "Λάθος") score++;


let answer4 = prompt("Οι σκύλοι δεν μπορούν να καταλάβουν τη διάθεση του ιδιοκτήτη τους. (Σωστό/Λάθος)");

if(answer4 === "Λάθος") score++;


let answer5 = prompt("Όλοι οι σκύλοι κολυμπούν από τη φύση τους. (Σωστό/Λάθος)");

if(answer5 === "Λάθος") score++;


alert("Ολοκληρώσατε το quiz! Σκορ: " + score + "/5");


}


}

