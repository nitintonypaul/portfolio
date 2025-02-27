const words = ["Greetings!", "Grüße!", "नमस्ते!","നമസ്കാരം!"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById("changing-word").textContent = words[index];


    if (words[index] === "നമസ്കാരം!") {
        document.getElementById("changing-word").style.fontFamily = "Noto Sans Malayalam";
    } else {
        document.getElementById("changing-word").style.fontFamily = "Noto Sans";
    }
  }, 3000);

function appear () {
    if (document.getElementById("socialsDiv").style.display == "none") {
        document.getElementById("socialsDiv").style.display = "flex";
    } else {
        document.getElementById("socialsDiv").style.display = "none";
    }
}

