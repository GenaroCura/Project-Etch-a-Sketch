const divContainer = document.querySelector("div");

//Creo un bucle for para no crear uno por uno los divs.
for (let i= 0 ; i < 16 * 16 ; i++){ 
const divs = document.createElement("div");
divs.classList.add("divs");
divContainer.classList.add("divContainer");
divContainer.appendChild(divs);
}

//Creo un bucle forearch para iterar  cada .divs(cuadradro), cuando se le hace click cambia de color.
const divhover = document.querySelectorAll(".divs");

let isMouseDown = false; // Para que al presionar click, se pinten y ademas pinten los cuadrados al pasar el mouse presionado.
let randomMode = false;

divhover.forEach(div => {
    div.addEventListener("mousedown", () => {
        isMouseDown = true;
        if (randomMode) {
            div.style.backgroundColor = getRandomColor();
        } else {
            div.style.backgroundColor = "black";
        }
    });
    div.addEventListener("mouseover", () => {
        if (isMouseDown) {
            if (randomMode) {
                div.style.backgroundColor = getRandomColor();
            } else {
                div.style.backgroundColor = "black";
            }
        }
    });
});

// Realizo este evento para cuando el usuario suelte el botón, no pinte más.
document.addEventListener("mouseup", () => {
    isMouseDown = false;
});


//Boton que le va a pedir al usuario ingresar el tamaño de la cuadricula, pero que tenga un limite de 100.
const btnSize = document.querySelector("button");
btnSize.textContent = "Grid Size";
btnSize.addEventListener("click", () => {
    let grid = prompt("Enter grid size maximun (100)");
    grid = parseInt(grid);
    if(!isNaN(grid) && grid != null && grid > 0 && grid <= 100){
        divContainer.innerHTML = "";

        const containerSize = 482;

        const squareSize = containerSize / grid;

    for(let i=0; i < grid * grid ; i++){
        const divs = document.createElement("div");
        divs.classList.add("divs");
        divs.style.width = `${squareSize}px`;
        divs.style.height = `${squareSize}px`;
        divContainer.appendChild(divs);
    }
}else{
    prompt("Maximun grid size 100")
}

const divhover = document.querySelectorAll(".divs");

divhover.forEach(div => {
    div.addEventListener("mousedown", () => {
        isMouseDown = true;
        if (randomMode) {
            div.style.backgroundColor = getRandomColor();
        } else {
            div.style.backgroundColor = "black";
        }
    });
    div.addEventListener("mouseover", () => {
        if (isMouseDown) {
            if (randomMode) {
                div.style.backgroundColor = getRandomColor();
            } else {
                div.style.backgroundColor = "black";
            }
        }
    });
});

// Realizo este evento para cuando el usuario suelte el botón, no pinte más.
document.addEventListener("mouseup", () => {
    isMouseDown = false;
});
})


//Creo un boton para limpiar la cuadricula.
const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
document.body.appendChild(btnReset);

btnReset.addEventListener("click", ()=>{
     // Seleccionar todos los cuadrados coloreados
     const coloredSquares = document.querySelectorAll(".divs");

     // Iterar sobre los cuadrados coloreados y quitar el color de fondo
     coloredSquares.forEach(square => {
         square.style.backgroundColor = "";
     });


     randomMode = false;
}); 


//Funcion para el randomColor;
const getRandomColor = () => { 
    const r = Math.floor(Math.random() * 256); // Genera un valor aleatorio para el componente rojo (entre 0 y 255)
    const g = Math.floor(Math.random() * 256); // Genera un valor aleatorio para el componente verde (entre 0 y 255)
    const b = Math.floor(Math.random() * 256); // Genera un valor aleatorio para el componente azul (entre 0 y 255)
    return `rgb(${r}, ${g}, ${b})`
}


//Boton para random color
const btnRandom = document.createElement("button");
btnRandom.textContent = "Random mode";

btnRandom.addEventListener("click", () =>{
    randomMode =!randomMode;
})

document.body.appendChild(btnRandom);



const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
buttonContainer.appendChild(btnSize);
buttonContainer.appendChild(btnRandom);
buttonContainer.appendChild(btnReset);



document.body.appendChild(buttonContainer);




const footer = document.createElement("footer");
footer.textContent = "Copyright © The Odin Project 2024 - Genaro Cura"
footer.classList.add("footer");


document.body.appendChild(footer);
