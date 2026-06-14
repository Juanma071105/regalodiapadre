/* ===== ESTRELLAS ===== */

for(let i=0;i<120;i++){

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.top = Math.random()*100 + "vh";

    star.style.left = Math.random()*100 + "vw";

    star.style.animationDuration = (Math.random()*3+2)+"s";

    document.body.appendChild(star);
}

/* ===== CORAZONES ===== */

for(let i=0;i<20;i++){

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (Math.random()*5+5)+"s";

    document.body.appendChild(heart);
}

/* ===== TEXTO AUTOMÁTICO ===== */

const text = `Gracias por estar siempre conmigo,
por apoyarme y enseñarme tantas cosas.

Eres una persona maravillosa y muy importante en mi vida.

Espero que este día esté lleno de felicidad, amor y muchas sonrisas.

Te quiero muchísimo Papa 💖`;

let index = 0;

function writeText(){

    if(index < text.length){

        document.getElementById("typedText").innerHTML += text.charAt(index);

        index++;

        setTimeout(writeText,50);
    }
}

writeText();