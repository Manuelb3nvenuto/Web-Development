// Seleccionar todos los botones con la clase 'drum'
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", handleClick);
  });
  document.querySelectorAll(".drum").forEach(button => function(){
    button.addEventListener("keypress", function(event){
      console.log(event)
    })
  })
  
  
  function handleClick(event) {
    // Obtener el texto del botón que se presionó
    const buttonPressed = event.target.textContent.toLowerCase();
  
    // Reproducir el sonido correspondiente
    let audio;
    switch (buttonPressed) {
      case "w":
        audio = new Audio("sounds/crash.mp3");
        if (buttonPressed == "w"){
            this.style.color = "red"; 
        }
        break;
      case "a":
        audio = new Audio("sounds/kick-bass.mp3");
        if (buttonPressed == "a"){
            this.style.color = "yellow"; 
        }
        break;
      case "s":
        audio = new Audio("sounds/snare.mp3");
        if (buttonPressed == "s"){
            this.style.color = "green"; 
        }
        break;
      case "d":
        audio = new Audio("sounds/tom-1.mp3");
        if (buttonPressed == "d"){
            this.style.color = "blue"; 
        }
        break;
      case "j":
        audio = new Audio("sounds/tom-2.mp3");
        if (buttonPressed == "j"){
            this.style.color = "purple"; 
        }
        break;
      case "k":
        audio = new Audio("sounds/tom-3.mp3");
        if (buttonPressed == "k"){
            this.style.color = "orange"; 
        }
        break;
      case "l":
        audio = new Audio("sounds/tom-4.mp3");
        if (buttonPressed == "l"){
            this.style.color = "white"; 
        }
        break;
      default:
        console.log("No sound found for this button");
        return;
    }
    //llamando a la funcion para reproducir each sound
    audio.play();
  }
  
