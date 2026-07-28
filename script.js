const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const messageLoader = document.querySelector(".message-loading");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// change the position of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  messageLoader.style.display = "flex";   // show the message loading animation

  setTimeout(() => {
    messageLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 2000);
});
