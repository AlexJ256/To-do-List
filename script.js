//define variables obtenidas de html
const boton = document.getElementById("boton_agregar");
const lista = document.getElementById("tareas_pendientes");
const inputtitulo = document.getElementById("titulo");
const inputdescripcion = document.getElementById("descripcion");

function agregarTareas(){

  const titulo = inputtitulo.value.trim();
  const descripcion = inputdescripcion.value.trim();
  //verificar si los espacios estan completados
  if (titulo === "" || descripcion === "") {
    alert("Completa ambos textos");
    return;
  }
  //crea el li
  const li = document.createElement("li");
  li.innerHTML = 
  `<h2>${titulo}</h2>
  <br>
  ${descripcion}
  <br>
  <button class="eliminar">Eliminar</button>`;
  //le añade el botono para poder eliminar el li
  li.querySelector(".eliminar").addEventListener("click", () => {
    lista.removeChild(li);
  });
  //añade el li
  lista.appendChild(li);

  inputtitulo.value = "";
  inputdescripcion.value = "";

}
//le da la funcion de agregar li al boton al hacer click
boton.addEventListener("click", agregarTareas);
