let botonPlay = document.querySelector("#elboton")
    botonPlay.addEventListener("click", () => {
      let etiquetaAudioDos = document.createElement("audio")
      etiquetaAudioDos.setAttribute("src", "./src/recording/7.1introduccionzoologico.m4a")
      etiquetaAudioDos.play()
			setTimeout(function () {window.location.href = "https://severo96.github.io/actividad2/escenariouno.html"; }, 10000);
    })
