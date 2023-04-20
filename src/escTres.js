let botonCinco = document.querySelector("#btn5");
let audioIntroTres = document.querySelector(".intro-tres")		
botonCinco.addEventListener("click", () => {
  let etiquetaAudioCinco = document.createElement("audio");
  etiquetaAudioCinco.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioCinco.play();
	audioIntroTres.pause(); 
  botonCinco.style.backgroundColor = "green";
  setTimeout(function () {
    window.location.href = "https://severo96.github.io/actividad2/escenariocuatro.html";
  }, 3000);
});
let botonSeis = document.querySelector("#btn6");
botonSeis.addEventListener("click", () => {
  let etiquetaAudioSeis = document.createElement("audio");
  etiquetaAudioSeis.setAttribute("src", "./src/recording/1.2oh-no.m4a");
  etiquetaAudioSeis.play();
	audioIntroTres.pause();
  botonSeis.style.backgroundColor = "red";
  setTimeout(function () {
    botonSeis.style.backgroundColor = "white";
		audioIntroTres.load();
  }, 4000);
});
