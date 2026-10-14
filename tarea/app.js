// v1: solo DOM (sin eventos)
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

["Estudiar JavaScript", "Hacer el laboratorio 8"].forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  lista.appendChild(li);
});

resumen.textContent = lista.children.length + " tareas";