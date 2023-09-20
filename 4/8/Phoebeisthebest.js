document.addEventListener("DOMContentLoaded", () => {
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const phrases = ["Hii Phoebe!! :)", "I love you so so much", "And I miss you so much :(" , "Do tell me what you think!", "Even tho you can't replay it yet :(", "But if you want to you can reload the page!", "Anyway I love you, kisses!", "PoopBird!"];
const totalRepetitions = 1;
const h1Element = document.querySelector("h1");
let currentPhraseIndex = 0;
let repetitions = 0;

h1Element.addEventListener("mouseover",animateText);

function animateText() {
  let iterations = 0;
  
  const interval = setInterval(() => {
  h1Element.innerText = phrases[currentPhraseIndex].split("")
  .map((letter, index) => {
    if(index < iterations) {
      return phrases[currentPhraseIndex][index];
    }
    
    return letters[Math.floor(Math.random() * 26)]
  })
  .join("");
    
  if(iterations >= phrases[currentPhraseIndex].length) {
    clearInterval(interval);
    setTimeout(() => {
        
        if (currentPhraseIndex === 0) {
            
            if (repetitions === totalRepetitions) {
              return; // Stop after the desired number of repetitions
              
            }
            repetitions++;
          }
      
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(animateText, 1000); 
      }, 1500);

    
  }
   if (phrases[currentPhraseIndex].length > 16) {
     iterations += 1 ;
   }
  else iterations += 1 / 3;
  }, 30);
}})
