```npx create-next-app@latest```

## **Tailwind css en NEXTJS**

```npm i -D tailwindcss postcss autoprefixer```

```npx tailwindcss init -p```

Desde el tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Conservar solo el globals.css con:**

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Reiniciar el servidor**

---

## **PRISMA**

> Prisma es un ORM, es una capa para conectarnos a una base de datos y manipularla sin realizar las funciones manualmente.

[Visita Prisma >>>](https://www.prisma.io/)

```npm i -D prisma```

```npm i @prisma/client```

```npx prisma init```


## **Crear Base de Datos**

Prisma soporta variedad de Bases de datos. En este caso MySQL

[Descargar MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)

Desde la terminal:
```mysql -u root```

```create database puntoventa;```

