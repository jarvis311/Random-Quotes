const quoteText = document.querySelector('.quote'),
quoteBtn = document.querySelector(".btn")
const authorName = document.querySelector(".authorName"),
soundClickButton = document.querySelector(".sound"),
copyClickButton = document.querySelector(".copy"),
twitterClickButton = document.querySelector(".twitter")

const randomQuote = () => {
    quoteBtn.innerText = "Wait a second..";
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText ="New Quote";
    })

}

quoteBtn.addEventListener('click', randomQuote);


soundClickButton.addEventListener("click", () => {
    let voice = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(voice);

})

copyClickButton.addEventListener("click", () => {
   navigator.clipboard.writeText(quoteText.innerText)
})

twitterClickButton.addEventListener("click", () => {
  let url = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(url, '_blank')
})
