let boton = document.querySelector("#btn1")
		let audioIntro = document.querySelector(".intro-uno")
    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "./src/recording/1.1muybien.m4a")
      etiquetaAudio.play()
			audioIntro.pause()
			boton.style.backgroundColor = "green";
			setTimeout( function() { window.location.href = "escenariodos.html"; }, 3000 );
    })

		let botonDos = document.querySelector("#btn2")
    botonDos.addEventListener("click", () => {
      let etiquetaAudioDos = document.createElement("audio")
      etiquetaAudioDos.setAttribute("src", "./src/recording/1.2oh-no.m4a")
      etiquetaAudioDos.play()
			audioIntro.pause()
			botonDos.style.backgroundColor = "red";
			setTimeout( function() { botonDos.style.backgroundColor = "white"; audioIntro.load()}, 4000 );
    })

		