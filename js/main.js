// --- Función reutilizable para mostrar/ocultar una imagen con un botón ---
function activarBotonImagen(botonId, boxId, textoMostrar, textoOcultar) {
  const btn = document.getElementById(botonId);
  const box = document.getElementById(boxId);

  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    box.hidden = !box.hidden;
    btn.textContent = box.hidden ? textoMostrar : textoOcultar;
  });
}

// --- Control del menú hamburguesa + activación de botones ---
document.addEventListener("DOMContentLoaded", () => {

  const hambBtn = document.getElementById("hambBtn");
  const overlay = document.getElementById("overlay");
  const overlayBg = document.getElementById("overlayBg");

  // --- MENU HAMBURGUESA ---
  if (hambBtn && overlay) {
    hambBtn.addEventListener("click", () => {
      const expanded = hambBtn.getAttribute("aria-expanded") === "true";
      hambBtn.setAttribute("aria-expanded", String(!expanded));
      overlay.style.display = !expanded ? "flex" : "none";
      overlay.setAttribute("aria-hidden", String(expanded));

      // alternar clase "active" para mostrar la X
      hambBtn.classList.toggle("active", !expanded);
    });
  }

  // --- Cerrar al tocar fondo oscuro ---
  if (overlayBg && hambBtn && overlay) {
    overlayBg.addEventListener("click", () => {
      overlay.style.display = "none";
      hambBtn.setAttribute("aria-expanded", "false");
      overlay.setAttribute("aria-hidden", "true");
      hambBtn.classList.remove("active");
    });
  }

  // --- Cerrar con tecla Escape ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hambBtn && overlay) {
      overlay.style.display = "none";
      hambBtn.setAttribute("aria-expanded", "false");
      overlay.setAttribute("aria-hidden", "true");
      hambBtn.classList.remove("active");
    }
  });

  // --- BOTONES DE IMÁGENES ---
  activarBotonImagen(
    "btnFico",
    "ficoBox",
    "Mostrar imagen de Fico González Acuña",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnReid",
    "reidBox",
    "Mostrar imagen de los movimientos de Reidemeister",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnAdn",
    "adnBox",
    "Mostrar imagen del ADN anudado",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnEquiv",
    "equivBox",
    "Mostrar imagen del problema de equivalencia",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnClasif",
    "clasifBox",
    "Mostrar imagen de la clasificación de nudos",
    "Ocultar imagen"
  );

  // --- EFECTO ZOOM SEGURO ---
  document.querySelectorAll(".img-box img").forEach(img => {
    img.addEventListener("mousemove", e => {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
      const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";

      img.style.setProperty("--x", x);
      img.style.setProperty("--y", y);
    });
  });

});
