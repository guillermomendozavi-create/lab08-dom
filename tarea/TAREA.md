# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas: se agregan tareas con un formulario (valida que no este vacio), se marcan como hechas con un clic, se borran con un boton y se buscan escribiendo.

## Version 1: solo DOM

- Que agregue: pagina con HTML y un app.js que selecciona la lista y crea dos tareas con createElement y appendChild.
- Por que: para dominar primero como se encuentra y se modifica el DOM, sin eventos.
- Que cambio: la lista se llena sola al abrir la pagina, pero el usuario no puede hacer nada.

```js
// v1: solo DOM (sin eventos)
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

["Estudiar JavaScript", "Hacer el laboratorio 8"].forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  lista.appendChild(li);
});

resumen.textContent = lista.children.length + " tareas";
```

## Version 2: con eventos

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase