function startQuiz() {

let score = 0;


if (quizLanguage === "en") {


let answer1 = prompt("Positive reinforcement helps a dog learn faster. (True/False)");

if (answer1 === "True") score++;


let answer2 = prompt("Training is only necessary when a dog is aggressive. (True/False)");

if (answer2 === "False") score++;


let answer3 = prompt("Puppies can start basic training at the age of 2 months. (True/False)");

if (answer3 === "True") score++;


let answer4 = prompt("Long training sessions (over 1 hour) are suitable for puppies. (True/False)");

if (answer4 === "False") score++;


let answer5 = prompt("The command 'Come' is important for a dog's safety. (True/False)");

if (answer5 === "True") score++;


alert("You completed the quiz! Score: " + score + "/5");


}

else {


let answer1 = prompt("Η θετική ενίσχυση βοηθά τον σκύλο να μαθαίνει πιο γρήγορα. (Σωστό/Λάθος)");

if (answer1 === "Σωστό") score++;


let answer2 = prompt("Η εκπαίδευση είναι απαραίτητη μόνο όταν ο σκύλος είναι επιθετικός. (Σωστό/Λάθος)");

if (answer2 === "Λάθος") score++;


let answer3 = prompt("Τα κουτάβια μπορούν να ξεκινήσουν βασική εκπαίδευση από την ηλικία των 2 μηνών. (Σωστό/Λάθος)");

if (answer3 === "Σωστό") score++;


let answer4 = prompt("Οι μεγάλες σε διάρκεια συνεδρίες εκπαίδευσης (πάνω από 1 ώρα) είναι κατάλληλες για κουτάβια. (Σωστό/Λάθος)");

if (answer4 === "Λάθος") score++;


let answer5 = prompt("Η εντολή 'Έλα' είναι σημαντική για την ασφάλεια του σκύλου. (Σωστό/Λάθος)");

if (answer5 === "Σωστό") score++;


alert("Ολοκληρώσατε το quiz! Σκορ: " + score + "/5");


}

}
