function irAEscaneo(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (nombre && email && password) {
    document.getElementById("registro").classList.add("hidden");
    document.getElementById("escaneo").classList.remove("hidden");
  } else {
    alert("Por favor completá todos los campos.");
  }
}

function irAPerfil() {
  document.getElementById("escaneo").classList.add("hidden");
  document.getElementById("perfil").classList.remove("hidden");
}

function irAInfo() {
  document.getElementById("perfil").classList.add("hidden");
  document.getElementById("info").classList.remove("hidden");
}

function volverAEscaneo() {
  document.getElementById("info").classList.add("hidden");
  document.getElementById("escaneo").classList.remove("hidden");
}
function abrirModal(genero) {
  const modal = document.getElementById("modal-" + genero);
  if (modal) {
    modal.style.display = "block";
  }
}

function cerrarModal(genero) {
  const modal = document.getElementById("modal-" + genero);
  if (modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  const modales = document.querySelectorAll(".modal");
  modales.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};