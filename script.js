const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I like you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    const constrainedX = Math.min(maxX - noBtnRect.width, Math.max(0, randomX));
    const constrainedY = Math.min(maxY - noBtnRect.height, Math.max(0, randomY));

    noBtn.style.left = constrainedX + "px";
    noBtn.style.top = constrainedY + "px";
});