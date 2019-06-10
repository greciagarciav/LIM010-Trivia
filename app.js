const nombreUsuario = document.getElementById('nombre');
let aciertos = 0;

function MostrarNombre() {
  const nombre = nombreUsuario.value;

  document.getElementById('nombreJugador').innerHTML = "¡Hola " + nombre + "!";
  document.getElementById('inicio').style.display = "none"; // Oculta la seccion indicada
  document.getElementById('saludo').style.display = "block"; // Muestra  la seccion indicda
}

//Peliculas
function MostrarPelicula(){
  document.getElementById('saludo').style.display = "none";
  document.getElementById('peliculasPregunta1').style.display = "block";
}
function SumarPeliculaP1(respuesta){
//Evalular Pregunta 1
  if (respuesta==2) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta1').style.display = "none";
  document.getElementById('peliculasPregunta2').style.display = "block";
}
//Evalular Pregunta 2
function SumarPeliculaP2(respuesta){
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta2').style.display = "none";
  document.getElementById('peliculasPregunta3').style.display = "block";
}
//Evalular Pregunta 3
function SumarPeliculaP3(respuesta){
  //Evalular Pregunta
  if (respuesta==2) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta3').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  MostrarResultados();
}

//Libros
function MostrarLibros(){
  document.getElementById('saludo').style.display = "none";
  document.getElementById('librosPregunta1').style.display = "block";
}
function SumarLibrosP1(respuesta){
//Evalular Pregunta 1
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta1').style.display = "none";
  document.getElementById('librosPregunta2').style.display = "block";
}
//Evalular Pregunta 2
function SumarLibrosP2(respuesta){
  if (respuesta==1) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta2').style.display = "none";
  document.getElementById('librosPregunta3').style.display = "block";
}
//Evalular Pregunta 3
function SumarLibrosP3(respuesta){
  //Evalular Pregunta
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta3').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  MostrarResultados();
}

function MostrarTemas() {
  aciertos = 0;
  document.getElementById('resultados').style.display = "none";
  document.getElementById('saludo').style.display = "block";
}

function MostrarInicio() {
  nombreUsuario.value = "";
  aciertos = 0;
  document.getElementById('resultados').style.display = "none";
  document.getElementById('inicio').style.display = "block";
}

//resultados
function MostrarResultados() {
  document.getElementById('puntos').innerHTML = "¡Has acertado " + aciertos + " preguntas!";
}
