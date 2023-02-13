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
  const listaEl = document.querySelector("ul.lista");

  let n = listaEl.childElementCount;
  for (let i = 0; i < n; i++) {
    console.log(i);
    listaEl.removeChild(listaEl.querySelector("li"));
  }

  const arrayNewLiEls = [];
  cosasQueAprendimos.forEach((e, i) => {
    arrayNewLiEls.push(document.createElement("li"));
    console.log(e.tema);
    arrayNewLiEls[i].textContent = e.tema;
    if (!e.class == "") {
      arrayNewLiEls[i].classList = e.class;
    }
    listaEl.appendChild(arrayNewLiEls[i]);
  });
}

main();
