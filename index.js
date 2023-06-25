const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  const liEls = lista.querySelectorAll("li");
  for (let itemAEliminar of liEls) {
    itemAEliminar.remove();
  }
  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    newLiEl.classList.add(item.class || "item");
    lista.appendChild(newLiEl);
  }
}
main();

