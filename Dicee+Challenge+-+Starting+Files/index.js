
const random1 = Math.ceil(Math.random() * 6); // Número aleatorio para el primer dado
const random2 = Math.ceil(Math.random() * 6); // Número aleatorio para el segundo dado

// Actualiza las imágenes de los dados
document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");

// Cambia el texto del h1 según los resultados
if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🎲";
}
