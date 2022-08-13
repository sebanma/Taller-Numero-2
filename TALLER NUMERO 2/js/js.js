//cuando la ventana carga se ejecuta esta función
window.onload = function () {

   //Del documento html se trae el documento que tiene el elemento en este dicho id. Nos muestra la pantalla del reloj
   visor = document.getElementById("reloj");
   //asociar eventos a botones: al pulsar el botón se activa su función.
   document.cron.boton1.onclick = activarReloj;
   document.cron.boton3.onclick = desactivarReloj;
   document.cron.boton2.onclick = pausar;
   //Propiedades a los eventos
   document.cron.boton1.disabled = false;
   document.cron.boton2.disabled = true;
   //variables de inicio:
   var marcha = 0;
   var cro = 0;

}

//Botón 1: Estado empezar: Poner en marcha el crono
function iniciar() {
   emp = new Date()
   elcrono = setInterval(tiempo, 10);
   marcha = 1
   document.cron.boton1.value = "CONTINUAR";
   document.cron.boton2.disabled = false;
   document.cron.boton1.disabled = true;
}

//función del tiempo			
function tiempo() {
   actual = new Date();
   cro = actual - emp;
   cr = new Date();
   cr.setTime(cro);
   cs = cr.getMilliseconds();
   cs = cs / 10;
   cs = Math.round(cs);
   sg = cr.getSeconds();
   mn = cr.getMinutes();

   //poner siempre 2 cifras en los números		 
   if (cs < 10) { cs = "0" + cs; }
   if (sg < 10) { sg = "0" + sg; }
   if (mn < 10) { mn = "0" + mn; }
   //llevar resultado al visor.		 
   visor.innerHTML = mn + " " + sg + " " + cs;
}


//parar el cronómetro
function parar() {
   clearInterval(elcrono);
   marcha = 0;
   document.cron.boton1.disabled = false;
}

//Continuar una cuenta iniciada y parada.
function continuar() {
   emp2 = new Date();
   emp2 = emp2.getTime();
   emp3 = emp2 - cro;
   emp = new Date();
   emp.setTime(emp3);
   elcrono = setInterval(tiempo, 10);
   marcha = 1;

   document.cron.boton1.disabled = true;
}

//Reinicio simple
function reiniciar() {
   if (marcha == 1) {
      clearInterval(elcrono);
      marcha = 0;
   }

   cro = 0;
   visor.innerHTML = "00 00 00";
   document.cron.boton1.value = "INICIAR";
   document.cron.boton2.disabled = false;
   document.cron.boton1.disabled = false;
}

//botón iniciar/Continuar
function activarReloj() {
   if (document.cron.boton1.value == "INICIAR") {
      //ir  la función iniciar
      iniciar()
   }

   else {
      //ir a la función continuar
      continuar()
   }
}

//botón reiniciar
function desactivarReloj() {
   if (document.cron.boton1.value == "REINICIAR") {
      //ir  la función iniciar
      iniciar()
   }
   //ir a la función reiniciar
   else {
      reiniciar()
   }
}

//botón pausa
function pausar() {

   //ir a la funcion parar
   parar()
}