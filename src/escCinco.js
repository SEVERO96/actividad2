let botonSNueve = document.querySelector("#btn9");
let audioIntroCinco = document.querySelector(".intro-cinco")		
botonSNueve.addEventListener("click", () => {
  let etiquetaAudioNueve = document.createElement("audio");
  etiquetaAudioNueve.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioNueve.play();
	audioIntroCinco.pause();
  botonSNueve.style.backgroundColor = "green";
  setTimeout(function () {
    window.location.href = "https://severo96.github.io/actividad2/partefinal.html";
  }, 3000);
});
let botonDiez = document.querySelector("#btn10");
botonDiez.addEventListener("click", () => {
  let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.2oh-no.m4a");
  etiquetaAudioDiez.play();
	audioIntroCinco.pause();
  botonDiez.style.backgroundColor = "red";
  setTimeout(function () {
    botonDiez.style.backgroundColor = "white";
		audioIntroCinco.load();
  }, 4000);
});
