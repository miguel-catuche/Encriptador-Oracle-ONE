const cpbd = document.querySelector(".clipboard"),
  btn_encpt = document.querySelector(".btn-1"),
  sobreEscribir = document.getElementById("resultado"),
  btn_copy = document.querySelector(".btn-3"),
  btn_accept = document.querySelector(".btn-4"),
  error_content = document.querySelector(".error-Message"),
  copied_msg = document.querySelector(".copiado"),
  btn_desncpt = document.querySelector(".btn-2");

// btn_encpt.addEventListener("click", encriptar());
// btn_desncpt.addEventListener("click", desencriptar());
// btn_copy.addEventListener("click", copiar());
function cerrar() {
  error_content.classList.remove("active");
}
function copiar() {
  const resultado = document.querySelector("#resultado");
  const texto = resultado.innerHTML;

  const inputTemp = document.createElement("input");
  inputTemp.value = texto;

  document.body.appendChild(inputTemp);

  inputTemp.select();
  document.execCommand("copy");

  document.body.removeChild(inputTemp);
  copied_msg.classList.toggle("active");
  // const mensaje = document.createElement("p");
  // mensaje.textContent = "¡Copiado!";
  // document.body.appendChild(mensaje);

  setTimeout(function () {
    // document.body.removeChild(mensaje);
    copied_msg.classList.remove("active");
  }, 1300); // Elimina el mensaje después de 2 segundos
}

function encriptar() {
  var datosIngresados = document.getElementById("toEncript").value;
  var hayDatos = true;
  if (datosIngresados === "") {
    hayDatos = false;
    error_content.classList.toggle("active");
    return hayDatos;
  }
  if (hayDatos === true) {
    let palabraEncriptada = datosIngresados
      .replace(/e/gi, "enter")
      .replace(/i/gi, "ines")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    sobreEscribir.innerHTML = palabraEncriptada;
  }

  if (!cpbd.classList.contains("active")) {
    //verificar si el elemento cpbd no está activo
    cpbd.classList.toggle("active"); //entonces le agregamos active, si está activo entonces
    //que no lo active
  }
}
function desencriptar() {
  var datosIngresados = document.getElementById("toEncript").value;
  var hayDatos = true;
  if (datosIngresados === "") {
    hayDatos = false;
    error_content.classList.toggle("active");
    return hayDatos;
  }
  if (hayDatos === true) {
    let palabraDesencriptada = datosIngresados
      .replace(/enter/gi, "e")
      .replace(/ines/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    sobreEscribir.textContent = palabraDesencriptada;
  }

  if (!cpbd.classList.contains("active")) {
    //verificar si el elemento cpbd no está activo
    cpbd.classList.toggle("active"); //entonces le agregamos active, si está activo entonces
    //que no lo active
  }
}
/*
esta funcion se ejecuta correctamente
function encriptar() {
  var datosIngresados = document.getElementById("toEncript").value;
  var hayDatos = true;
  var letras = ["a", "e", "i", "o", "u"];
  var valores = ["ai", "enter", "ines", "ober", "ufat"];
  if (datosIngresados === "") {
    hayDatos = false;
  }
  if (hayDatos === true) {
    var palabraEncriptada = "";
    for (var j = 0; j < datosIngresados.length; j++) {
      var letra = datosIngresados[j].toLowerCase(); //cada letra que obtengo del textarea es
      var encriptada = letra; //iterada y almacenada en la variable letra, luego se buscan
      for (var i = 0; i < letras.length; i++) {
        //las consonantes en el nuevo for, entonces
        if (letra === letras[i]) {
          //se verifica si la letra iterada es igual a las letras
          encriptada = valores[i]; //establecidas e iteradas entonces la variable encriptada
          break; //va a encriptar la vocal iterada con el valor correspondiente a valores.
        }
      }
      palabraEncriptada += encriptada;
    }
    sobreEscribir.innerHTML = palabraEncriptada;
    if (!cpbd.classList.contains("active")) {
      //verificar si el elemento cpbd no está activo
      cpbd.classList.toggle("active"); //entonces le agregamos active, si está activo entonces
      //que no lo active
    }
    // encriptClick();
  }
  // return datosIngresados;
}*/

/*
function desencriptar() {
  var datosIngresados = document.getElementById("toEncript").value;
  var hayDatos = true;
  var letras = ["a", "e", "i", "o", "u"];
  var valores = ["ai", "enter", "ines", "ober", "ufat"];
  if (datosIngresados === "") {
    hayDatos = false;
  }
  if (hayDatos === true) {
    var palabraDesencriptada = "";
    for (var j = 0; j < datosIngresados.length; j++) {
      var dletra = datosIngresados[j].toLowerCase(); //cada letra que obtengo del textarea es
      var desencriptada = dletra; //iterada y almacenada en la variable letra, luego se buscan
      for (var i = 0; i < valores.length; i++) {
        //las consonantes en el nuevo for, entonces
        if (dletra === valores[i]) {
          //se verifica si la letra iterada es igual a las letras
          desencriptada = letras[i]; //establecidas e iteradas entonces la variable encriptada
          break; //va a encriptar la vocal iterada con el valor correspondiente a valores.
        }
      }
      palabraDesencriptada += desencriptada;
    }
    sobreEscribir.textContent = palabraDesencriptada;
    if (!cpbd.classList.contains("active")) {
      //verificar si el elemento cpbd no está activo
      cpbd.classList.toggle("active"); //entonces le agregamos active, si está activo entonces
      //que no lo active
    }
    // encriptClick();
  }
  // return datosIngresados;
}
*/
/*
esta funcion se ejecuta correctamente
function desencriptaar() {
  var datosIngresados = document.getElementById("toEncript").value;
  var hayDatos = true;
  var letras = ["a", "e", "i", "o", "u"];
  var valores = ["ai", "enter", "ines", "ober", "ufat"];
  if (datosIngresados === "") {
    hayDatos = false;
  }
  if (hayDatos === true) {
    for (var i = 0; i < letras.length; i++) {
      var regex = new RegExp(valores[i], "g");
      datosIngresados = datosIngresados.replace(regex, letras[i]);
    }
    sobreEscribir.textContent = datosIngresados;
    if (!cpbd.classList.contains("active")) {
      cpbd.classList.toggle("active");
    }
  }
}
*/
