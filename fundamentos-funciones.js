// variables
const player1 = "fireboy";
const player2 = "watergirl";
var alive = true;
// strings
let nombrejuego = "    fireboy & watergirl the forest temple  ";
console.log("número de letras:", nombrejuego.length);
console.log("encotrar alguna palabra:", nombrejuego.includes("fireboy"));
console.log("convertir a mayúsculas:", nombrejuego.toUpperCase());
console.log("convertir a minusculas:", nombrejuego.toLowerCase());
console.log("quitar espacios adelante y atrás:", nombrejuego.trim());
console.log(
  "reemplazar una palabra:",
  nombrejuego.replace("fireboy", "waterboy"),
);
console.log("cortar un texto:", nombrejuego.slice(1, 6));
console.log("cortar un texto:", nombrejuego.substring(1, 6));
console.log("cortar un texto:", nombrejuego.charAt(1));
console.log("repetir un texto:", nombrejuego.repeat(2));
console.log("dividir un texto:", nombrejuego.split(" "));
// template strings
console.log(`${player1} & ${player2} the forest temple`);
//numeros
const numerovidas = 2;
let numeropuntos = "3";
console.log(numeropuntos, numerovidas);
console.log(`has perdido ${numerovidas - 1} vidas`);
console.log(`tienes ${Number.parseInt(numeropuntos) + 1} puntos`);

// operador ternario
numerovidas <= 0
  ? console.log("has perdido!")
  : console.log(`tienes ${numerovidas} vidas`);
// condicionales
// simple
let numerodiamantes = 2;
if (numerodiamantes < 5) {
  console.log("aun te faltan recoger diamantes");
}
//doble
if (numerodiamantes < 5) {
  console.log("aun te faltan recoger diamantes");
} else {
  console.log("tienes todos los diamantes, puedes pasar el nivel con 3 ⭐");
}
//multiple
const seleccionarpersonaje = 1;
switch (seleccionarpersonaje) {
  case 1:
    console.log("elegiste fireboy");
    break;
  case 2:
    console.log("elegiste watergirl");
    break;
  default:
    console.log("no elegiste un personaje");
    break;
}
//bucles
let obstaculos = ["lava", "agua", "lava", "agua", "nada"];
for (let i = 0; i < obstaculos.length; i++) {
  let obstaculo = obstaculos[i];

  // fireboy solo puede pasar por la lava
  if (obstaculo === "lava") {
    console.log(`fireboy cruza lava`);
  } else if (obstaculo === "water") {
    console.log(`fireboy no puede cruzar agua`);
  }
}
let pasos = 0;
while (pasos > 10) {
  console.log("Avanzas un paso");
  pasos++;
}
do {
  console.log("Retrocedes un paso");
  pasos--;
} while (pasos >= 1);
//forEach
let gems = ["fire", "water", "earth"];

gems.forEach((gem, index) => {
  console.log(`Gem ${index + 1}: ${gem}`);
});
// for of
let niveles = ["Nivel 1", "Nivel 2", "Nivel 3"];

for (let nivel of niveles) {
  if (nivel === "Level 2") continue;
  console.log(nivel);
}
// for in

for (let i in niveles) {
  console.log(`${i}: ${niveles[i]}`);
}
// map
let puntos = [1, 2, 3, 4];

let doblesPuntos = puntos.map((punto) => punto * 2);
console.log(doblesPuntos);
// funciones autodeclaradas
(function () {
  console.log("Pantalla inicial del juego");
})();

// funciones declaradas
function saltar() {
  console.log("Saltaste");
}
saltar();
//funcion expresada
const moverse = function () {
  console.log("Avanzaste un paso");
};
moverse();
// parametros por default
function calcularVida(numerovidas = 2) {
  return numerovidas * 1;
}
// parametros rest
function Nniveles(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(Nniveles(1, 2, 3));
// funcion flecha
const saludar = () => console.log(`Hola soy ${player1}`);
// this
const player = {
  nombre: "Fireboy",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

player.saludar();
