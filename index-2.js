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
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      const genero = item.dataset.genero;
      const modal = document.querySelector(`#modal-${genero}`);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Cerrar modal al hacer click en la X
  const botonesCerrar = document.querySelectorAll("[data-close]");
  botonesCerrar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      boton.closest(".modal").style.display = "none";
    });
  });

  // Cerrar modal al hacer click fuera del contenido
  window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal").forEach(function (modal) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

