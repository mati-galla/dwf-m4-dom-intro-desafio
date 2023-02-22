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

// Metodo inicial mio

// function main() {
//   const listaEl = document.querySelector("ul.lista");

//   let n = listaEl.childElementCount;
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//     listaEl.removeChild(listaEl.querySelector("li"));
//   }

//   const arrayNewLiEls = [];
//   cosasQueAprendimos.forEach((e, i) => {
//     arrayNewLiEls.push(document.createElement("li"));
//     console.log(e.tema);
//     arrayNewLiEls[i].textContent = e.tema;
//     if (!e.class == "") {
//       arrayNewLiEls[i].classList = e.class;
//     }
//     listaEl.appendChild(arrayNewLiEls[i]);
//   });
// }

// main();

// Metodo alternativo 1 (.append() y .innerHTML())

// function createLi(text, elClass) {
//   const newLiEl = document.createElement("li");
//   newLiEl.append(text);
//   if (elClass !== "") newLiEl.classList = elClass;
//   return newLiEl;
// }

// function listItems(items) {
//   return [...Array(items.length)].map((e, i) =>
//     createLi(items[i].tema, items[i].class)
//   );
// }

// function main() {
//   const listaEl = document.querySelector("ul.lista");
//   listaEl.innerHTML = "";
//   listaEl.append(...listItems(cosasQueAprendimos));
// }

// main();

// Metodo alternativo 2 (.append() y .innerHTML())

function createLi(text, elClass) {
  const newLiEl = document.createElement("li");
  newLiEl.append(text);
  if (elClass !== "") newLiEl.classList = elClass;
  return newLiEl;
}

function listItems(items) {
  return [...Array(items.length)].map((e, i) =>
    createLi(items[i].tema, items[i].class)
  );
}

function main() {
  const listaEl = document.querySelector("ul.lista");
  listaEl.replaceChildren(...listItems(cosasQueAprendimos));
}

main();
