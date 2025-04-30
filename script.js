const words = ["Greetings!", "Grüße!", "नमस्ते!","നമസ്കാരം!"];
let index = 0;

setInterval(() => {
    const changingText = document.getElementById("changing-word")
    
    changingText.style.opacity = 0

    setTimeout(() => {
        index = (index + 1) % words.length;

        if (words[index] === "നമസ്കാരം!") {
            changingText.style.fontFamily = "Noto Sans Malayalam";
        } else {
            changingText.style.fontFamily = "Noto Sans";
        }

        changingText.textContent = words[index];
        changingText.style.opacity = 1

    }, 300)
  }, 3000);

function appear () {
    if (document.getElementById("socialsDiv").style.opacity == 0) {
        document.getElementById("socialsDiv").style.opacity = 1;
    } else {
        document.getElementById("socialsDiv").style.opacity = 0;
    }
}

