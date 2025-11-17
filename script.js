// Verifica se o usuário tem cadastro
document.addEventListener("DOMContentLoaded", () => {
  const usuarioCadastrado = localStorage.getItem("usuarioCadastrado");
  const junteSection = document.getElementById("junte");

  if (usuarioCadastrado === "true") {
    junteSection.style.display = "none";
  }

  // Redirecionamentos
  document.querySelector(".causa").addEventListener("click", () => {
    window.location.href = "causa.html";
  });

  document.querySelector(".visitante").addEventListener("click", () => {
    window.location.href = "visitante.html";
  });
});

