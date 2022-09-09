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

---

## Modelado

Se crean modelos en el archivo de **schema.prisma**

Se indican los tipos de dato, y prisma se encargará de proporcionarlo a la DB con el formato correcto.

> Un producto tiene una categoria y una Categoria tiene varios Productos. La relación se hace mediante llaves primarias y foráneas, por lo tanto, deben ser del mismo tipo.

```js
model Producto {
  id Int @id @default(autoincrement())
  nombre String
  precio Float
  imagen String?
  categoriaId Int
  categoria Categoria @relation(fields: [categoriaId],references: [id])
}

model Categoria {
  id Int @id @default(autoincrement()) 
  nombre String
  icono String
  productos Producto[]
}
```

---

## Migración

El esquema que estructuremos en prisma debe ser migrado, es decir, aplicado directamente en la base de datos mediante: 

```npx prisma migrate dev```

![](documentation/3.png)

> **Siempre que se edite o agregue al esquema se debe migrar para actualizar el esquema**

## RESET DATOS TABLAS

```npx prisma migrate reset```

## Interfaz Recursos Prisma

```npx prisma studio```

![](documentation/4.png)

---

## Seeding
Sembrar información a la base de datos