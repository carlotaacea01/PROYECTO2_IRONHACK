// DEFINIMOS VARIABLES

var numeroseleccionado = null;
var casilla = null;
var aciertos = 0;
const ACIERTOS_MAX = 42; // N MAX DE ACIERTOS. POSIBILIDAD DE AÑADIR FUNCIONALIDAD

setTimeout(() => { // 5 MINUTOS MAX
	alert("¡Muy lento!");
	location.reload();
}, "300000");


var juego = [ // ARRAY CON JUEGO VISIBLE. POSIBILIDAD DE AÑADIR FUNCIONALIDAD
	"-8---5179",
	"---2-6-84",
	"9-3---6--",
	"27--8-5-3",
	"4---5-812",
	"--8-42--7",
	"8----3--1",
	"354-1--9-",
	"-96-247--"
]

var solucion = [ // ARRAY CON SOLUCION. POSIBILIDAD DE AÑADIR FUNCIONALIDAD
	"682435179",
	"715296384",
	"943871625",
	"271689543",
	"469357812",
	"538142967",
	"827963451",
	"354718296",
	"196524738"
]

window.onload = function(){ // CARGAMOS EL JUEGO
	jugar();
}

function jugar(){ // DEFINIMOS LA GUI
	for (let i = 1; i<10; i++){ // DEFINIMOS LOS 9 NUM DE ABAJO
		let numero = document.createElement("div");
		numero.id = i;
		numero.innerText = i;

		numero.classList.add("numero");
		document.getElementById("numeros").appendChild(numero); // AÑADIMOS
		numero.addEventListener("click", seleccionarNumero); // ESCUCHAMOS CLICK
}

	for (let f = 0; f < 9; f++){ // DEFINIMOS EL TABLERO -- 9 FILAS
		for (let c = 0; c < 9; c++){ // 9 COL. FOR ANIDADO
			let casilla = document.createElement("div");
			casilla.id = f.toString() + "-" + c.toString();

			if(juego[f][c] != "-"){ // ELIMINAMOS GUIONES
				casilla.innerText= juego[f][c];
}

			casilla.classList.add("casilla");
			casilla.addEventListener("click", seleccionarCasilla) // ESCUCHAMOS CLICK
			document.getElementById("juego").append(casilla); // AÑADIMOS CASILLA
}
}
}

function seleccionarNumero(){
	if (numeroseleccionado != null){
		numeroseleccionado.classList.remove("numeroseleccionado"); // ELIMINAMOS LA SELECCION
}

	numeroseleccionado = this;
	numeroseleccionado.classList.add("numeroseleccionado");
}

function seleccionarCasilla(){
	if (numeroseleccionado) {
		if (this.innerText != ""){ // FUNCIONALIDAD DIFICIL. NO PERMITIMOS FALLOS
			return;
}

	this.innerText = numeroseleccionado.id;

	let xy = this.id.split("-");
	let fila = parseInt(xy[0]);
	let columna = parseInt(xy[1]);
	// console.log(xy);

	if (solucion[fila][columna] == numeroseleccionado.id){
		aciertos += 1;
		// console.log(aciertos);

		if (aciertos == ACIERTOS_MAX){ // GANAR
			alert("¡Ganaste!");
			location.href = 'https://www.youtube.com/watch?v=mumDtnq7-jU';
}
}

		else{ //PERDER
			alert("¡Has fallado!");
			location.reload(); // FUNCIONALIDAD DIFICIL. NO PERMITIMOS FALLOS
}
}
}