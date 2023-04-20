let botonSiete = document.querySelector("#btn7");
let audioIntroCuatro = document.querySelector(".intro-cuatro")		
botonSiete.addEventListener("click", () => {
  let etiquetaAudioSiete = document.createElement("audio");
  etiquetaAudioSiete.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioSiete.play();
	audioIntroCuatro.pause();
  botonSiete.style.backgroundColor = "green";
  setTimeout(function () {
    window.location.href = "https://severo96.github.io/actividad2/escenariocinco.html";
		
  }, 3000);
});
let botonOcho = document.querySelector("#btn8");
botonOcho.addEventListener("click", () => {
  let etiquetaAudioOcho = document.createElement("audio");
  etiquetaAudioOcho.setAttribute("src", "./src/recording/1.2oh-no.m4a");
  etiquetaAudioOcho.play();
	audioIntroCuatro.pause();
  botonOcho.style.backgroundColor = "red";
  setTimeout(function () {
    botonOcho.style.backgroundColor = "white";
		audioIntroCuatro.load();
  }, 4000);
});
