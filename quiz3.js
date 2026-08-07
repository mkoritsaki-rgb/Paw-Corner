function StartQuiz3() {

let score = 0;


if (quizLanguage === "en") {


let answer1 = prompt("Cats can see very well in the dark. (True/False)");

if(answer1 === "True") score++;


let answer2 = prompt("Cats do not need any water because they get fluids only from their food. (True/False)");

if(answer2 === "False") score++;


let answer3 = prompt("Cats do not use their whiskers to understand the space around them. (True/False)");

if(answer3 === "False") score++;


let answer4 = prompt("All cats love bathing with water. (True/False)");

if(answer4 === "False") score++;


let answer5 = prompt("Cats can fall from a height and often land on their feet. (True/False)");

if(answer5 === "True") score++;


alert("You completed the quiz! Score: " + score + "/5");


}

else {


let answer1 = prompt("Οι γάτες μπορούν να δουν πολύ καλά στο σκοτάδι. (Σωστό/Λάθος)");

if(answer1 === "Σωστό") score++;


let answer2 = prompt("Οι γάτες δεν χρειάζονται καθόλου νερό γιατί παίρνουν υγρά μόνο από την τροφή τους. (Σωστό/Λάθος)");

if(answer2 === "Λάθος") score++;


let answer3 = prompt("Οι γάτες δεν χρησιμοποιούν τα μουστάκια τους για να καταλαβαίνουν τον χώρο γύρω τους. (Σωστό/Λάθος)");

if(answer3 === "Λάθος") score++;


let answer4 = prompt("Όλες οι γάτες αγαπούν το μπάνιο με νερό. (Σωστό/Λάθος)");

if(answer4 === "Λάθος") score++;


let answer5 = prompt("Οι γάτες μπορούν να πέσουν από ύψος και συχνά να προσγειωθούν στα πόδια τους. (Σωστό/Λάθος)");

if(answer5 === "Σωστό") score++;


alert("Ολοκλήρωσες το quiz! Σκορ: " + score + "/5");


}

}
	
	
	
