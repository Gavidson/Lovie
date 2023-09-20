document.addEventListener("DOMContentLoaded", () => {
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const phrases = ["Hii Phoebe!! :)", "I Love You So So Much", "I think this is just a start to what I wanna make you.", "I miss you so much :(" , "Tell me what you think!", "Its gonna go back to the start but not all the way because idk how to do that yet!", "I love you kisses!", "Poop"];
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
      }, 1000);

    
  }
  iterations += 1 / 3;
  }, 30);
}})
