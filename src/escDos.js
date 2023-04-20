let botonTres = document.querySelector("#btn3")
let audioIntroDos = document.querySelector(".intro-dos")		
botonTres.addEventListener("click", () => {
      let etiquetaAudioTres = document.createElement("audio")
      etiquetaAudioTres.setAttribute("src", "./src/recording/1.1muybien.m4a")
      etiquetaAudioTres.play()
			audioIntroDos.pause()
			botonTres.style.backgroundColor = "green";
			setTimeout( function() { window.location.href = "escenariotres.html"; }, 3000 );
    })
		let botonCuatro = document.querySelector("#btn4")
    botonCuatro.addEventListener("click", () => {
      let etiquetaAudioCuatro = document.createElement("audio")
      etiquetaAudioCuatro.setAttribute("src", "./src/recording/1.2oh-no.m4a")
      etiquetaAudioCuatro.play()
			audioIntroDos.pause()
			botonCuatro.style.backgroundColor = "red";
			setTimeout( function() { botonCuatro.style.backgroundColor = "white"; audioIntroDos.load() }, 4000 );
    })