# Actividad: Componentes conectados y reutilizados

## Consigna

Crear una app de React (puede ser un proyecto nuevo con Vite, similar a `02-componentes`) que simule el catálogo de una tienda.

### 1. Datos simulando un fetch

En el componente principal (`App.jsx`), declarar un arreglo de al menos 5 objetos que representen productos, como si vinieran de una API (todavía no usamos `fetch` real, solo simulamos la forma en la que llegarían los datos):

```jsx
const productos = [
  {
    id: 1,
    nombre: "Teclado mecánico",
    precio: 45000,
    categoria: "Periféricos",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Mouse inalámbrico",
    precio: 18000,
    categoria: "Periféricos",
    disponible: false,
  },
  // ...al menos 3 más
];
```

### 2. Componentes a crear

Crear los siguientes componentes, cada uno en su propio archivo:

- **`App.jsx`**: declara el arreglo de productos y compone el resto de los componentes.
- **`Navbar.jsx`**: muestra el nombre de la tienda y la **cantidad total de productos** (ese número tiene que llegarle por props, no puede recalcularlo ni hardcodearlo).
- **`ProductList.jsx`**: recibe el arreglo de productos por props y hace `.map()` sobre él, renderizando un `ProductCard` por cada producto.
- **`ProductCard.jsx`**: componente reutilizable que recibe los datos de **un solo** producto por props (nombre, precio, categoría, disponibilidad) y los muestra.
- **`Footer.jsx`**: reutilizado, puede mostrar por ejemplo la misma cantidad total de productos que muestra el `Navbar`.

### 3. Requisitos obligatorios

- [ ] Al menos 4 componentes distintos, cada uno en su propio archivo, importados y usados desde otro componente.
- [ ] El arreglo de productos se declara **una sola vez** (en `App.jsx`) y se pasa por props a los componentes que lo necesitan. No se puede duplicar ni volver a escribir en otro archivo.
- [ ] `ProductList` usa `.map()` para transformar el arreglo en una lista de `ProductCard`, usando `key` en cada elemento.
- [ ] Información **compartida entre componentes**: la cantidad total de productos (o el nombre de la tienda) tiene que aparecer en dos componentes distintos (por ejemplo `Navbar` y `Footer`), viniendo del mismo dato declarado en `App.jsx` y bajando por props a cada uno.
- [ ] Al menos un renderizado condicional, por ejemplo mostrar "Disponible ✅" o "Agotado ❌" según el campo `disponible`.
