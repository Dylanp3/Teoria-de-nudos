// --- Función reutilizable para mostrar/ocultar una imagen con un botón ---
function activarBotonImagen(botonId, boxId, textoMostrar, textoOcultar) {
  const btn = document.getElementById(botonId);
  const box = document.getElementById(boxId);

  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    const visible = !box.hidden;
    box.hidden = visible;
    btn.textContent = visible ? textoMostrar : textoOcultar;
  });
}

// ------------------------------
// 🔽 BOTONES DE IMÁGENES (conceptos generales)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {

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

  // ------------------------------
  // 🔽 BOTONES PARA TIPOS DE NUDOS (IDs CORRECTOS)
  // ------------------------------
  activarBotonImagen(
    "btnNudo1",
    "nudo1Box",
    "Mostrar imagen del nudo trivial",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnNudo2",
    "nudo2Box",
    "Mostrar imagen del nudo de trébol",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnNudo3",
    "nudo3Box",
    "Mostrar imagen de enlaces de nudos",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnNudo4",
    "nudo4Box",
    "Mostrar imagen del nudo conjugado/primo",
    "Ocultar imagen"
  );

  activarBotonImagen(
    "btnNudo5",
    "nudo5Box",
    "Mostrar imagen de los nudos toroidales",
    "Ocultar imagen"
  );

  // ------------------------------
  // 🔽 BOTONES PARA HISTORIA (sección nueva)
  // ------------------------------
  activarBotonImagen("btnQuipu", "quipuBox", "Mostrar imagen de un quipu", "Ocultar imagen");
  activarBotonImagen("btnTyet", "tyetBox", "Mostrar imagen del nudo Tyet", "Ocultar imagen");
  activarBotonImagen("btnGordiano", "gordianoBox", "Mostrar imagen del nudo gordiano", "Ocultar imagen");
  activarBotonImagen("btnCelta", "celtaBox", "Mostrar imagen de nudos celtas", "Ocultar imagen");
  activarBotonImagen("btnChino", "chinoBox", "Mostrar imagen del nudo chino", "Ocultar imagen");
  activarBotonImagen("btnMizuhiki", "mizuhikiBox", "Mostrar imagen del mizuhiki", "Ocultar imagen");
  activarBotonImagen("btnMarinero", "marineroBox", "Mostrar imagen de nudos marineros", "Ocultar imagen");
  activarBotonImagen("btnHeracles", "heraclesBox", "Mostrar imagen del nudo de Heracles", "Ocultar imagen");
  activarBotonImagen("btnSinFin", "sinfinBox", "Mostrar imagen del nudo sin fin", "Ocultar imagen");
  activarBotonImagen("btnHistoria", "historiaBox", "Mostrar imagen histórica", "Ocultar imagen");

  // --- EFECTO ZOOM (opcional) ---
  document.querySelectorAll(".img-box img").forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
      const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
      img.style.setProperty("--x", x);
      img.style.setProperty("--y", y);
    });
  });
});

// ----- SLIDER PARA EL PROBLEMA DE EQUIVALENCIA -----
const equivImgs = ["img/equi.png", "img/equi2.png"]; // <- agrega tus 2 imágenes aquí
let equivIndex = 0;

const equivImg = document.getElementById("equivImg");
const equivPrev = document.getElementById("equivPrev");
const equivNext = document.getElementById("equivNext");

if (equivImg && equivPrev && equivNext) {
  equivPrev.addEventListener("click", () => {
    equivIndex = (equivIndex - 1 + equivImgs.length) % equivImgs.length;
    equivImg.src = equivImgs[equivIndex];
  });

  equivNext.addEventListener("click", () => {
    equivIndex = (equivIndex + 1) % equivImgs.length;
    equivImg.src = equivImgs[equivIndex];
  });
}

// ===== MODAL DE IMAGEN =====
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const closeBtn = document.getElementById("closeModal");

// Información extra opcional
const extraInfo = {
  "ADN anudado": "En el interior de nuestras células y en la corriente sanguínea existen estructuras que, sorprendentemente, adoptan formas de nudos. El ADN, portador de nuestra información genética, se comporta como un nudo diminuto, con enredos y cruces que influyen en su replicación y expresión genética.",

  "Nudo celta": "Este tipo de nudos es muy usual de ver en la decoración en manuscritos, joyería y tallados en piedra. Estos diseños siempre constan de enlaces entre distintos nudos, sin comienzo ni fin simbolizando la eternidad, cada uno de los cruces interconectados simbolizan vida, muerte y renacimiento, ya al igual que en otras culturas se les atribuían propiedades protectoras.",

  "Enlace de nudos": "Un enlace de nudos se forma cuando dos o más nudos se entrelazan entre sí sin fusionarse. Un ejemplo cotidiano es una cadena, que puede interpretarse como una secuencia de nudos triviales enlazados entre sí.",

  "Equivalencia de nudos": "Uno de los grandes desafíos en la clasificación de nudos es determinar cuándo dos nudos son realmente distintos. Un mismo nudo puede parecer completamente diferente tras simples deformaciones, por lo que es esencial garantizar que las clasificaciones no incluyan nudos topológicamente equivalentes.",

  "Equivalencia 2": "Uno de los grandes desafíos en la clasificación de nudos es determinar cuándo dos nudos son realmente distintos. Un mismo nudo puede parecer completamente diferente tras simples deformaciones, por lo que es esencial garantizar que las clasificaciones no incluyan nudos topológicamente equivalentes.",

  "Nudo primo": "Un nudo conjugado se obtiene al unir dos o más nudos mediante cortes y uniones de extremos, creando una estructura más compleja. Un nudo primo no puede descomponerse en nudos más simples; es una unidad fundamental dentro de la teoría.",

  "Nudo de Heracles": "Uso: motivo en amuletos y joyería (pulseras, fibras trenzadas) y en ataduras simbólicas para protección, matrimonio y salud. Folclor/mitología: asociado a Heracles/Hércules como símbolo protector; en algunos contextos se usaba en rituales para garantizar salud y unión (nudos de compromiso).",

  "Nudo marinero": "Uso: imprescindible en navegación — amarras, velas, aparejos; la destreza en nudos determinaba seguridad y eficacia en la navegación. Folclor/mitología: proliferaron leyendas de marineros que “leían” los nudos; además el término “knot” como unidad de velocidad procede de una práctica real: medir la velocidad con una sonda con nudos a intervalos.",

  "Mizuhiki": "Uso: cintas y nudos ceremoniales (envoltorio de regalos, sobres de dinero), cada estilo de nudo transmite una intención (alegría, condolencia, compromiso). Folclor/mitología: el tipo de nudo en un mizuhiki comunica deseo de continuidad (no desatar) o de separación (desatabilidad), y forma parte del lenguaje ritual social japonés. (Vinculado al uso ritual de los nudos en la cultura material japonesa.)",

  "Nudo chino": "Los nudos chinos son un arte identitario de su cultura usados de forma decorativa y comúnmente usado en bodas y fechas importantes como amuletos de buena suerte y adornos festivos. Muchos nudos chinos tienen nombres y significados amor, longevidad, fortuna, formando en sí mismo una clasificación de nudos hay evidencias arqueológicas antiguas que muestran que ya eran símbolos desde hace milenios.",

  "Nudo toroidal": "Dentro del amplio universo de los nudos, los nudos toroidales destacan por su estructura y profundidad matemática, lo que los hace especialmente interesantes es que pueden describirse algebraicamente como curvas sobre la superficie de un toro.",

  "Nudo trivial": "En el estudio de los nudos, se consideran lazos cerrados para evitar que se deshagan o pierdan sus propiedades cuando se manipulan. El nudo trivial es la forma más simple: una circunferencia sin entrelazamientos. Es el punto de partida en la teoría de nudos. El nudo trébol, con tres cruces, es el nudo no trivial más simple y uno de los más estudiados. Representa la primera estructura realmente diferente al nudo trivial.",

  "Nudo Tyet": "Este nudo fue usado como amuleto funerario y símbolo protector, se creía que le brindaba protección al difunto en la otra vida. También se portaba como veneración a la diosa Isis y considerándolo un símbolo de fertilidad, ligado a la magia sanadora de la diosa.",

  "Nudo sin fin": "Uso: símbolo religioso y decorativo (uno de los “Ocho símbolos auspiciosos” en el budismo tibetano; aparece también en arte indio y chino). Folclor/mitología: representa la interdependencia, la unión de sabiduría y compasión, y el ciclo sin fin de samsara; aparece en textos muy antiguos y en gran cantidad de iconografía religiosa."
};

// Cuando se hace clic en cualquier imagen del slider
document.querySelectorAll(".turing-slider img").forEach(img => {
  img.addEventListener("click", () => {
    const desc = img.dataset.desc;

    modalImg.src = img.src;
    modalTitle.textContent = desc;
    modalInfo.textContent = extraInfo[desc] || "Información próximamente...";

    modal.style.display = "flex";
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar al hacer click fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
