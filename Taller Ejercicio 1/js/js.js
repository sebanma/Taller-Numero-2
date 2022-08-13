window.onload = function () {
    const agregar = document.getElementById("boton1");
    const borrar = document.getElementById("boton2");
    var lista = document.getElementById("lista");
  
    agregar.onclick = function () {
      var text = document.getElementById("msg");
      var li = lista.getElementsByTagName("li");
      var opcion = "<li>" + text.value.toLowerCase() + "</li>";
      lista.innerHTML += opcion;
    };
  
    borrar.onclick = function() {
      lista.innerHTML = "";
    }
  };